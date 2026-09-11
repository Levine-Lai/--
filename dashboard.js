const regionLabels = {
  arctic: "Shuo🐧北极赛区",
  antarctic: "小红书关注Acidboy🐧南极赛区",
};

// 最终抽签结果：每一档均严格对应 teamPots 中官方球队顺序。
const finalManagers = {
  arctic: [
    ["fitz", "AVG", "DDDD", "UEFAntasis", "东马", "Bad K", "座山雕", "Shuo", "紫葱酱"],
    ["狗蛋kk", "第一边锋萨默维尔", "Diego W", "baros15", "Steven", "kusuri", "Kimi", "nbw", "喝呀"],
    ["Pluto", "Kw", "企鹅", "切尔西萌塔", "verydisco", "欧巡", "拙言", "W", "当代丁蟹"],
    ["Micky VDV", "Eva", "warmer", "江逐流", "九命黑獭一统天下", "x team", "殷少Eric", "镜落", "Yamine Lmao"],
  ],
  antarctic: [
    ["conan joe", "remember", "Euro Ben", "LQ女神", "yummy", "enzowang", "小火龙", "Acidboy", "进藤光"],
    ["halfbrain", "Jiang", "蒂兰基尔尼", "lulucool", "Snepia Fepson", "鬼嗨", "Nirvana", "丢屁", "yu128"],
    ["Eric", "比尔", "saru", "垫底超人00", "公瑾", "高桥明", "BA", "纳尼", "Dannyyyyy"],
    ["Frank Hua", "Elliott", "面条", "Y", "珍惜眼前人❤️", "英国人画像", "Lambert luo", "联曼", "ZHIYU"],
  ],
};

const leagueRosterData = window.PENGUIN_LEAGUE_ROSTERS || { regions: { arctic: [], antarctic: [] }, extras: { arctic: [], antarctic: [] } };
const normalizeMemberKey = (value) => String(value ?? "").normalize("NFKC").trim().replace(/\s+/g, " ").toLocaleLowerCase();
const leagueMemberIndexes = Object.fromEntries(Object.entries(leagueRosterData.regions).map(([region, members]) => {
  const index = new Map();
  members.forEach((member) => {
    [member.drawName, member.fantasyTeam, member.displayName].forEach((value) => {
      const key = normalizeMemberKey(value);
      if (!key) return;
      if (!index.has(key)) index.set(key, member);
      else if (index.get(key) !== member) index.set(key, null);
    });
  });
  return [region, index];
}));

function attachGuidToLeagueMember(member, guid, region) {
  const key = normalizeMemberKey(guid);
  if (!member || !key || !leagueMemberIndexes[region]) return;
  member.guid = guid;
  leagueMemberIndexes[region].set(key, member);
}

const allTeams = teamPots.flatMap((pot) => pot.teams.map((team, index) => ({ ...team, pot: pot.number, potPosition: index + 1 })));
const teamsByName = new Map(allTeams.map((team) => [team.name, team]));
const resultsByRegion = { arctic: {}, antarctic: {} };
const managerScoresByRegion = { arctic: {}, antarctic: {} };
const roundAnalyticsByMatchday = window.PENGUIN_UEFA_SNAPSHOT?.roundAnalytics || {};
const dashboardParams = new URLSearchParams(window.location.search);
const requestedRegion = dashboardParams.get("region");
const requestedView = dashboardParams.get("view");
let dashboardRegion = Object.hasOwn(regionLabels, requestedRegion) ? requestedRegion : "arctic";
let activeView = ["matches", "standings", "fdr", "groups"].includes(requestedView) ? requestedView : "matches";
let activeRound = 1;
let fdrSort = { round: null, direction: null };
document.body.classList.toggle("is-exporting", dashboardParams.get("export") === "1");

const dashboardEls = {
  regionButtons: [...document.querySelectorAll("[data-region]")],
  navButtons: [...document.querySelectorAll(".nav-button")],
  viewPanels: [...document.querySelectorAll("[data-view-panel]")],
  roundTabs: document.querySelector("#roundTabs"), matchGrid: document.querySelector("#matchGrid"),
  analyticsPanel: document.querySelector("#analyticsPanel"), analyticsGrid: document.querySelector("#analyticsGrid"),
  standingsBody: document.querySelector("#standingsBody"), potGrid: document.querySelector("#potGrid"),
  fdrHead: document.querySelector("#fdrHead"), fdrBody: document.querySelector("#fdrBody"),
  matchesRegionLabel: document.querySelector("#matchesRegionLabel"), standingsRegionLabel: document.querySelector("#standingsRegionLabel"),
  groupsRegionLabel: document.querySelector("#groupsRegionLabel"), fdrRegionLabel: document.querySelector("#fdrRegionLabel"), matchModal: document.querySelector("#matchModal"),
  modalClose: document.querySelector("#modalClose"), modalContent: document.querySelector("#modalContent"),
};

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function logoUrl(team) { return `https://img.uefa.com/imgml/TP/teams/logos/70x70/${team.id}.png`; }
function managerFor(teamName, region = dashboardRegion) {
  const team = teamsByName.get(teamName);
  return finalManagers[region][team.pot - 1][team.potPosition - 1];
}
function resolveLeagueMember(identity, region = dashboardRegion) {
  const index = leagueMemberIndexes[region];
  if (!index) return null;
  if (identity && typeof identity === "object") {
    const candidates = [identity.guid, identity.opponentguid, identity.drawName, identity.fantasyTeam, identity.fantasyTeamName, identity.entryName, identity.displayName, identity.managerName, identity.name];
    for (const candidate of candidates) {
      const member = index.get(normalizeMemberKey(candidate));
      if (member) return member;
    }
    return null;
  }
  return index.get(normalizeMemberKey(identity)) || null;
}
function teamForManager(identity, region = dashboardRegion) {
  const member = resolveLeagueMember(identity, region);
  const drawName = member?.drawName || String(identity ?? "");
  for (let potIndex = 0; potIndex < finalManagers[region].length; potIndex += 1) {
    const position = finalManagers[region][potIndex].indexOf(drawName);
    if (position >= 0) return teamPots[potIndex].teams[position];
  }
  return null;
}
function matchKey(matchday, home, away) { return `${matchday}|${home}|${away}`; }
function getMatchData(matchday, home, away, region = dashboardRegion) {
  return resultsByRegion[region][matchKey(matchday, home, away)] || {
    homeScore: null, awayScore: null, homeLineup: [], awayLineup: [], homeCaptain: null, awayCaptain: null, differentials: [], status: "待同步",
  };
}
function scoreBoardHtml(data, variant = "") {
  const hasScore = Number.isFinite(data.homeScore) && Number.isFinite(data.awayScore);
  const homeScore = hasScore ? data.homeScore : "—";
  const awayScore = hasScore ? data.awayScore : "—";
  const label = hasScore ? `比分 ${homeScore} 比 ${awayScore}` : "比赛尚未产生比分";
  const homeState = !hasScore ? " is-empty" : homeScore > awayScore ? " is-leading" : homeScore < awayScore ? " is-trailing" : " is-level";
  const awayState = !hasScore ? " is-empty" : awayScore > homeScore ? " is-leading" : awayScore < homeScore ? " is-trailing" : " is-level";
  const variantClass = variant ? ` scoreboard--${variant}` : "";
  return `<span class="scoreboard${variantClass}" aria-label="${label}"><span class="score-value${homeState}">${homeScore}</span><span class="score-divider">:</span><span class="score-value${awayState}">${awayScore}</span></span>`;
}

function renderRegionState() {
  dashboardEls.regionButtons.forEach((button) => {
    const selected = button.dataset.region === dashboardRegion;
    button.classList.toggle("is-active", selected); button.setAttribute("aria-pressed", String(selected));
  });
  const label = regionLabels[dashboardRegion];
  dashboardEls.matchesRegionLabel.textContent = label;
  dashboardEls.standingsRegionLabel.textContent = label;
  dashboardEls.groupsRegionLabel.textContent = label;
  dashboardEls.fdrRegionLabel.textContent = label;
}

function renderRoundTabs() {
  dashboardEls.roundTabs.innerHTML = officialMatchdays.map((round) =>
    `<button class="round-button${round.number === activeRound ? " is-active" : ""}" type="button" role="tab" aria-selected="${round.number === activeRound}" data-round="${round.number}">第 ${round.number} 轮</button>`
  ).join("");
}

function matchCardHtml(roundNumber, match, index) {
  const [date, homeName, awayName] = match;
  const home = teamsByName.get(homeName), away = teamsByName.get(awayName);
  const data = getMatchData(roundNumber, homeName, awayName);
  const hasScore = Number.isFinite(data.homeScore) && Number.isFinite(data.awayScore);
  return `<button class="match-card" type="button" data-match-index="${index}" aria-label="查看${escapeHtml(home.zh)}对阵${escapeHtml(away.zh)}详情">
    <span class="match-meta"><span>第 ${roundNumber} 轮</span><span>${hasScore ? escapeHtml(data.status || "已结束") : "未开始"}</span></span>
    <span class="match-sides">
      <span class="match-team"><img src="${logoUrl(home)}" alt="" /><strong>${escapeHtml(managerFor(homeName))}</strong><small>${escapeHtml(home.zh)}</small></span>
      <span class="match-score">${scoreBoardHtml(data)}</span>
      <span class="match-team"><img src="${logoUrl(away)}" alt="" /><strong>${escapeHtml(managerFor(awayName))}</strong><small>${escapeHtml(away.zh)}</small></span>
    </span></button>`;
}

function renderMatches() {
  const round = officialMatchdays.find((item) => item.number === activeRound);
  dashboardEls.matchGrid.innerHTML = round.matches.map((match, index) => matchCardHtml(round.number, match, index)).join("");
  renderAnalytics();
}

const analyticsCards = [
  { key: "score", title: "分数排行", area: "score" },
  { key: "ownership", title: "持有率排行", area: "ownership" },
  { key: "lowSalaryHigh", title: "低薪高能", area: "value" },
  { key: "highSalaryLow", title: "高薪低能", area: "low" },
  { key: "hiddenGems", title: "隐藏宝石", area: "gem" },
  { key: "popularTraps", title: "热门陷阱", area: "trap" },
];

function analyticsMetricHtml(player, key) {
  const points = Number(player.points) || 0;
  const price = Number(player.price) || 0;
  const ownership = Number(player.ownership) || 0;
  if (key === "score") return `<strong>${points}</strong><small>分</small>`;
  if (key === "ownership") return `<strong>${ownership.toFixed(1).replace(/\.0$/, "")}</strong><small>%</small>`;
  if (key === "lowSalaryHigh" || key === "highSalaryLow") {
    const ratio = price > 0 ? points / price : 0;
    return `<strong>${ratio.toFixed(2)}</strong><small>${points}分 · €${price.toFixed(1)}</small>`;
  }
  const ratio = ownership > 0 ? points / ownership : 0;
  return `<strong>${ratio.toFixed(2)}</strong><small>${points}分 · ${ownership.toFixed(1).replace(/\.0$/, "")}%</small>`;
}

function renderAnalytics() {
  if (!dashboardEls.analyticsPanel || !dashboardEls.analyticsGrid) return;
  const data = roundAnalyticsByMatchday[activeRound] || roundAnalyticsByMatchday[String(activeRound)];
  dashboardEls.analyticsPanel.hidden = !data;
  if (!data) {
    dashboardEls.analyticsGrid.innerHTML = "";
    return;
  }
  dashboardEls.analyticsGrid.innerHTML = analyticsCards.map(({ key, title, area }) => {
    const players = Array.isArray(data[key]) ? data[key] : [];
    return `<section class="analytics-card" style="--analytics-area:${area}"><h3>${title}</h3><ol>${players.map((player, index) => `
      <li><span class="analytics-rank">${index + 1}</span><span class="analytics-player"><strong>${escapeHtml(player.name)}</strong><small>${escapeHtml(player.club)}</small></span><span class="analytics-metric">${analyticsMetricHtml(player, key)}</span></li>`).join("")}</ol></section>`;
  }).join("");
}

function positionLabel(position) {
  return ({ 1: "GK", 2: "DF", 3: "MD", 4: "FW" })[Number(position)] || "--";
}

function lineupPlayersHtml(items, isBench) {
  if (!items.length) return '<p class="lineup-empty">暂无球员</p>';
  return `<ol class="lineup-player-list">${items.map((player) => {
    const isPlayed = Boolean(player?.played);
    const isUnavailable = isBench && isPlayed;
    const points = isPlayed ? Number(player?.points) || 0 : 0;
    const stateClass = `${isPlayed ? " is-played" : " is-unplayed"}${isUnavailable ? " is-unavailable" : ""}`;
    const stateTitle = isUnavailable ? ' title="已开赛且位于替补席，本轮得分无效"' : "";
    const manOfMatch = player?.manOfMatch ? '<b class="motm-star" title="欧足联全场最佳（+3分）">⭐</b>' : "";
    const captain = player?.captain ? '<b class="captain-mark" title="队长">©</b>' : "";
    return `<li class="lineup-player${stateClass}"${stateTitle}><span class="position-code">${positionLabel(player?.position)}</span><span class="lineup-player-name">${escapeHtml(player?.name || "未知球员")}${manOfMatch}${captain}</span><strong class="lineup-player-points">${points}<small>分</small></strong></li>`;
  }).join("")}</ol>`;
}

function fullLineupHtml(items) {
  const lineup = Array.isArray(items) ? items : [];
  const indexed = lineup.map((player, index) => ({ player, index }));
  const starters = indexed.filter(({ player }) => !player?.bench).sort((a, b) => Number(a.player?.position) - Number(b.player?.position) || a.index - b.index).map(({ player }) => player);
  const substitutes = indexed.filter(({ player }) => player?.bench).sort((a, b) => Number(b.player?.position === 1) - Number(a.player?.position === 1) || a.index - b.index).map(({ player }) => player);
  return `<div class="lineup-section lineup-section--starters"><div class="lineup-section-title"><strong>首发</strong></div>${lineupPlayersHtml(starters, false)}</div>
    <div class="lineup-section lineup-section--bench"><div class="lineup-section-title"><strong>替补</strong></div>${lineupPlayersHtml(substitutes, true)}</div>`;
}

function openMatchModal(matchIndex) {
  const round = officialMatchdays.find((item) => item.number === activeRound);
  const [, homeName, awayName] = round.matches[matchIndex];
  const home = teamsByName.get(homeName), away = teamsByName.get(awayName);
  const data = getMatchData(activeRound, homeName, awayName);
  const homeLineup = Array.isArray(data.homeLineup) ? data.homeLineup : [];
  const awayLineup = Array.isArray(data.awayLineup) ? data.awayLineup : [];
  dashboardEls.modalContent.innerHTML = `<div class="modal-match-head">
      <p id="modalMatchTitle">${escapeHtml(regionLabels[dashboardRegion])} · 第 ${activeRound} 轮</p>
      <div class="modal-scoreline">
        <div class="modal-team"><img src="${logoUrl(home)}" alt="" /><strong>${escapeHtml(managerFor(homeName))}</strong><span>${escapeHtml(home.zh)}</span></div>
        <div class="modal-score">${scoreBoardHtml(data, "modal")}</div>
        <div class="modal-team"><img src="${logoUrl(away)}" alt="" /><strong>${escapeHtml(managerFor(awayName))}</strong><span>${escapeHtml(away.zh)}</span></div>
      </div></div>
    <div class="modal-detail-body"><div class="lineup-heading"><strong>双方阵容</strong></div><div class="lineup-columns">
      <section class="lineup-side"><h3><img src="${logoUrl(home)}" alt="" /><span>${escapeHtml(managerFor(homeName))}</span></h3>${fullLineupHtml(homeLineup)}</section>
      <section class="lineup-side"><h3><img src="${logoUrl(away)}" alt="" /><span>${escapeHtml(managerFor(awayName))}</span></h3>${fullLineupHtml(awayLineup)}</section>
    </div></div>`;
  dashboardEls.matchModal.hidden = false; document.body.style.overflow = "hidden"; dashboardEls.modalClose.focus();
}
function closeMatchModal() { dashboardEls.matchModal.hidden = true; document.body.style.overflow = ""; }

function calculateStandings(region = dashboardRegion) {
  const rows = allTeams.map((team) => ({ team, played:0, won:0, drawn:0, lost:0, scored:0, conceded:0, difference:0, points:0 }));
  const byName = new Map(rows.map((row) => [row.team.name, row]));
  officialMatchdays.forEach((round) => round.matches.forEach(([, homeName, awayName]) => {
    const data = getMatchData(round.number, homeName, awayName, region);
    if (!Number.isFinite(data.homeScore) || !Number.isFinite(data.awayScore)) return;
    const home = byName.get(homeName), away = byName.get(awayName);
    home.played += 1; away.played += 1; home.scored += data.homeScore; home.conceded += data.awayScore; away.scored += data.awayScore; away.conceded += data.homeScore;
    if (data.homeScore > data.awayScore) { home.won += 1; home.points += 3; away.lost += 1; }
    else if (data.homeScore < data.awayScore) { away.won += 1; away.points += 3; home.lost += 1; }
    else { home.drawn += 1; away.drawn += 1; home.points += 1; away.points += 1; }
  }));
  rows.forEach((row) => { row.difference = row.scored - row.conceded; });
  return rows.sort((a,b) => b.points-a.points || b.difference-a.difference || b.scored-a.scored || a.team.pot-b.team.pot || a.team.potPosition-b.team.potPosition);
}

function renderStandings() {
  dashboardEls.standingsBody.innerHTML = calculateStandings().map((row,index) => `<tr data-zone="${index < 8 ? "direct" : index < 24 ? "playoff" : "out"}">
    <td class="rank-cell"><strong>${index+1}</strong></td><td><div class="standing-club"><img src="${logoUrl(row.team)}" alt="" /><strong>${escapeHtml(managerFor(row.team.name))}</strong></div></td>
    <td>${row.won}</td><td>${row.drawn}</td><td>${row.lost}</td><td>${row.difference>0?"+":""}${row.difference}</td><td class="points-cell">${row.points}</td></tr>`).join("");
}

function renderGroups() {
  dashboardEls.potGrid.innerHTML = teamPots.map((pot) => `<section class="pot-column" data-pot="${pot.number}"><h3 class="pot-title">Pot ${pot.number}</h3>
    ${pot.teams.map((team,index) => `<div class="group-row"><img src="${logoUrl(team)}" alt="" /><div><span>${escapeHtml(team.zh)}</span><strong>${escapeHtml(finalManagers[dashboardRegion][pot.number-1][index])}</strong></div></div>`).join("")}</section>`).join("");
}

function fixtureForTeam(round, teamName) {
  const match = round.matches.find(([, homeName, awayName]) => homeName === teamName || awayName === teamName);
  if (!match) return null;
  const [, homeName, awayName] = match;
  const isHome = homeName === teamName;
  const opponentName = isHome ? awayName : homeName;
  return { opponent: teamsByName.get(opponentName), venue: isHome ? "H" : "A" };
}

function renderFdr() {
  dashboardEls.fdrHead.innerHTML = `<tr><th>玩家</th>${officialMatchdays.map((round) => {
    const active = fdrSort.round === round.number && fdrSort.direction;
    const directionLabel = active ? (fdrSort.direction === "easy" ? "易→难" : "难→易") : "";
    return `<th aria-sort="${active ? (fdrSort.direction === "easy" ? "descending" : "ascending") : "none"}"><button class="fdr-sort${active ? " is-active" : ""}" type="button" data-fdr-sort="${round.number}" aria-label="GD${round.number}${directionLabel ? `，当前${directionLabel}` : "，按难度排序"}"><strong>GD${round.number}</strong>${directionLabel ? `<small>${directionLabel}</small>` : ""}</button></th>`;
  }).join("")}</tr>`;
  const displayedTeams = [...allTeams];
  if (fdrSort.round && fdrSort.direction) {
    const round = officialMatchdays.find((item) => item.number === fdrSort.round);
    displayedTeams.sort((teamA, teamB) => {
      const potA = fixtureForTeam(round, teamA.name)?.opponent?.pot || 0;
      const potB = fixtureForTeam(round, teamB.name)?.opponent?.pot || 0;
      return fdrSort.direction === "easy" ? potB - potA : potA - potB;
    });
  }
  dashboardEls.fdrBody.innerHTML = displayedTeams.map((team) => {
    const manager = managerFor(team.name);
    const fixtures = officialMatchdays.map((round) => {
      const fixture = fixtureForTeam(round, team.name);
      if (!fixture?.opponent) return '<td class="fdr-empty">—</td>';
      const opponentManager = managerFor(fixture.opponent.name);
      return `<td class="fdr-cell" data-pot="${fixture.opponent.pot}" title="${escapeHtml(opponentManager)} · Pot ${fixture.opponent.pot}"><span>${escapeHtml(opponentManager)}</span></td>`;
    }).join("");
    return `<tr><th scope="row"><img src="${logoUrl(team)}" alt="" /><span>${escapeHtml(manager)}</span></th>${fixtures}</tr>`;
  }).join("");
}

function cycleFdrSort(round) {
  if (fdrSort.round !== round || !fdrSort.direction) fdrSort = { round, direction: "easy" };
  else if (fdrSort.direction === "easy") fdrSort = { round, direction: "hard" };
  else fdrSort = { round: null, direction: null };
  renderFdr();
}

function switchView(view) {
  activeView = view;
  dashboardEls.navButtons.forEach((button) => { const selected=button.dataset.view===view; button.classList.toggle("is-active",selected); button.setAttribute("aria-current",selected?"page":"false"); });
  dashboardEls.viewPanels.forEach((panel) => { const selected=panel.dataset.viewPanel===view; panel.hidden=!selected; panel.classList.toggle("is-active",selected); });
  if(view==="standings") renderStandings(); if(view==="groups") renderGroups(); if(view==="fdr") renderFdr();
}
function setRegion(region) {
  if(!regionLabels[region]) return; dashboardRegion=region; closeMatchModal(); renderRegionState(); renderMatches(); renderStandings(); renderGroups(); renderFdr();
}
function setMatchData(records) {
  if(!Array.isArray(records)) return;
  records.forEach((record) => { const region=record.region||dashboardRegion; if(!resultsByRegion[region]||!record.matchday||!record.homeTeam||!record.awayTeam)return; const key=matchKey(Number(record.matchday),record.homeTeam,record.awayTeam); resultsByRegion[region][key]={...resultsByRegion[region][key],...record}; });
  renderMatches(); renderStandings();
}

// 按 Fantasy 队名、玩家显示名或抽签昵称导入每轮得分；最终统一映射到网站抽签昵称。
function setManagerScores(records) {
  if (!Array.isArray(records)) return { imported: 0, unresolved: [] };
  const unresolved = [];
  let imported = 0;
  records.forEach((record) => {
    const region = record.region || dashboardRegion;
    const member = resolveLeagueMember(record, region);
    const team = member ? teamForManager(member.drawName, region) : null;
    const matchday = Number(record.matchday ?? record.round ?? record.gameday);
    const score = Number(record.score ?? record.points);
    if (!member || !team || !Number.isInteger(matchday) || matchday < 1 || matchday > officialMatchdays.length || !Number.isFinite(score)) {
      unresolved.push(record);
      return;
    }
    if (record.guid) attachGuidToLeagueMember(member, record.guid, region);
    managerScoresByRegion[region][`${matchday}|${team.name}`] = {
      score,
      lineup: Array.isArray(record.lineup) ? record.lineup : [],
      captain: record.captain ?? null,
      status: record.status || "已同步",
    };
    imported += 1;
  });

  Object.keys(managerScoresByRegion).forEach((region) => {
    officialMatchdays.forEach((round) => round.matches.forEach(([, homeName, awayName]) => {
      const home = managerScoresByRegion[region][`${round.number}|${homeName}`];
      const away = managerScoresByRegion[region][`${round.number}|${awayName}`];
      if (!home || !away) return;
      resultsByRegion[region][matchKey(round.number, homeName, awayName)] = {
        ...resultsByRegion[region][matchKey(round.number, homeName, awayName)],
        homeScore: home.score,
        awayScore: away.score,
        homeLineup: home.lineup,
        awayLineup: away.lineup,
        homeCaptain: home.captain,
        awayCaptain: away.captain,
        status: home.status === away.status ? home.status : "已同步",
      };
    }));
  });
  renderMatches();
  renderStandings();
  return { imported, unresolved };
}

dashboardEls.regionButtons.forEach((button) => button.addEventListener("click",()=>setRegion(button.dataset.region)));
dashboardEls.navButtons.forEach((button) => button.addEventListener("click",()=>switchView(button.dataset.view)));
dashboardEls.fdrHead.addEventListener("click",(event)=>{const button=event.target.closest("[data-fdr-sort]");if(button)cycleFdrSort(Number(button.dataset.fdrSort))});
dashboardEls.roundTabs.addEventListener("click",(event)=>{const button=event.target.closest("[data-round]");if(!button)return;activeRound=Number(button.dataset.round);renderRoundTabs();renderMatches()});
dashboardEls.matchGrid.addEventListener("click",(event)=>{const card=event.target.closest("[data-match-index]");if(card)openMatchModal(Number(card.dataset.matchIndex))});
dashboardEls.modalClose.addEventListener("click",closeMatchModal);
dashboardEls.matchModal.addEventListener("click",(event)=>{if(event.target===dashboardEls.matchModal)closeMatchModal()});
window.addEventListener("keydown",(event)=>{if(event.key==="Escape")closeMatchModal()});

// 后续官方数据接入点：传入带 region/matchday/homeTeam/awayTeam 的比赛记录即可刷新页面。
window.__penguinCupDashboard = {
  setMatchData,
  setManagerScores,
  resolveLeagueMember,
  teamForManager,
  getLeagueRosters: () => leagueRosterData,
  getStandings:(region=dashboardRegion)=>calculateStandings(region),
  getState:()=>({region:dashboardRegion,view:activeView,round:activeRound}),
};
renderRegionState(); renderRoundTabs(); renderMatches(); renderStandings(); renderGroups(); renderFdr();
if (window.PENGUIN_UEFA_SNAPSHOT?.records) {
  const importResult = setManagerScores(window.PENGUIN_UEFA_SNAPSHOT.records);
  window.__penguinCupDashboard.lastImport = importResult;
}
switchView(activeView);
