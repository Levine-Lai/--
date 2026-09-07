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

const allTeams = teamPots.flatMap((pot) => pot.teams.map((team, index) => ({ ...team, pot: pot.number, potPosition: index + 1 })));
const teamsByName = new Map(allTeams.map((team) => [team.name, team]));
const resultsByRegion = { arctic: {}, antarctic: {} };
let dashboardRegion = "arctic";
let activeView = "matches";
let activeRound = 1;

const dashboardEls = {
  regionButtons: [...document.querySelectorAll("[data-region]")],
  navButtons: [...document.querySelectorAll(".nav-button")],
  viewPanels: [...document.querySelectorAll("[data-view-panel]")],
  roundTabs: document.querySelector("#roundTabs"), matchGrid: document.querySelector("#matchGrid"),
  standingsBody: document.querySelector("#standingsBody"), potGrid: document.querySelector("#potGrid"),
  matchesRegionLabel: document.querySelector("#matchesRegionLabel"), standingsRegionLabel: document.querySelector("#standingsRegionLabel"),
  groupsRegionLabel: document.querySelector("#groupsRegionLabel"), matchModal: document.querySelector("#matchModal"),
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
function matchKey(matchday, home, away) { return `${matchday}|${home}|${away}`; }
function getMatchData(matchday, home, away, region = dashboardRegion) {
  return resultsByRegion[region][matchKey(matchday, home, away)] || {
    homeScore: null, awayScore: null, homeLineup: [], awayLineup: [], homeCaptain: null, awayCaptain: null, differentials: [], status: "待同步",
  };
}
function formatDate(dateValue) { const date = new Date(`${dateValue}T00:00:00`); return `${date.getMonth() + 1}月${date.getDate()}日`; }
function scoreText(data) { return Number.isFinite(data.homeScore) && Number.isFinite(data.awayScore) ? `${data.homeScore}:${data.awayScore}` : "—:—"; }
function scoreBoardHtml(data) {
  const hasScore = Number.isFinite(data.homeScore) && Number.isFinite(data.awayScore);
  const homeScore = hasScore ? data.homeScore : "—";
  const awayScore = hasScore ? data.awayScore : "—";
  const label = hasScore ? `比分 ${homeScore} 比 ${awayScore}` : "比赛尚未产生比分";
  return `<span class="scoreboard" aria-label="${label}"><span class="score-value">${homeScore}</span><span class="score-divider">:</span><span class="score-value">${awayScore}</span></span>`;
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
}

function lineupHtml(items) {
  return Array.isArray(items) && items.length ? `<div class="empty-lineup">${items.map(escapeHtml).join(" · ")}</div>` : '<div class="empty-lineup">阵容暂未公布</div>';
}

function openMatchModal(matchIndex) {
  const round = officialMatchdays.find((item) => item.number === activeRound);
  const [date, homeName, awayName] = round.matches[matchIndex];
  const home = teamsByName.get(homeName), away = teamsByName.get(awayName);
  const data = getMatchData(activeRound, homeName, awayName);
  const differentials = Array.isArray(data.differentials) && data.differentials.length ? data.differentials.map(escapeHtml).join(" · ") : "暂无差异球员";
  dashboardEls.modalContent.innerHTML = `<div class="modal-match-head">
      <p id="modalMatchTitle">${escapeHtml(regionLabels[dashboardRegion])} · 第 ${activeRound} 轮 · ${formatDate(date)}</p>
      <div class="modal-scoreline">
        <div class="modal-team"><img src="${logoUrl(home)}" alt="" /><strong>${escapeHtml(home.zh)}</strong><span>${escapeHtml(managerFor(homeName))}</span></div>
        <div class="modal-score">${scoreText(data)}</div>
        <div class="modal-team"><img src="${logoUrl(away)}" alt="" /><strong>${escapeHtml(away.zh)}</strong><span>${escapeHtml(managerFor(awayName))}</span></div>
      </div></div>
    <div class="modal-detail-body"><section class="differential-panel"><strong>差异球员</strong><p>${differentials}</p></section><p class="detail-label">双方阵容</p><div class="lineup-grid">
      <section class="lineup-panel"><h3><img src="${logoUrl(home)}" alt="" />${escapeHtml(managerFor(homeName))}</h3>${lineupHtml(data.homeLineup)}<div class="detail-item"><strong>队长</strong><span>${escapeHtml(data.homeCaptain || "暂未公布")}</span></div></section>
      <section class="lineup-panel"><h3><img src="${logoUrl(away)}" alt="" />${escapeHtml(managerFor(awayName))}</h3>${lineupHtml(data.awayLineup)}<div class="detail-item"><strong>队长</strong><span>${escapeHtml(data.awayCaptain || "暂未公布")}</span></div></section>
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
    <td class="rank-cell"><strong>${index+1}</strong></td><td><div class="standing-club"><img src="${logoUrl(row.team)}" alt="" /><div><strong>${escapeHtml(row.team.zh)}</strong><small>${escapeHtml(managerFor(row.team.name))}</small></div></div></td>
    <td>${row.played}</td><td>${row.won}</td><td>${row.drawn}</td><td>${row.lost}</td><td>${row.scored}</td><td>${row.conceded}</td><td>${row.difference>0?"+":""}${row.difference}</td><td class="points-cell">${row.points}</td></tr>`).join("");
}

function renderGroups() {
  dashboardEls.potGrid.innerHTML = teamPots.map((pot) => `<section class="pot-column" data-pot="${pot.number}"><h3 class="pot-title">Pot ${pot.number}</h3>
    ${pot.teams.map((team,index) => `<div class="group-row"><img src="${logoUrl(team)}" alt="" /><div><span>${escapeHtml(team.zh)}</span><strong>${escapeHtml(finalManagers[dashboardRegion][pot.number-1][index])}</strong></div></div>`).join("")}</section>`).join("");
}

function switchView(view) {
  activeView = view;
  dashboardEls.navButtons.forEach((button) => { const selected=button.dataset.view===view; button.classList.toggle("is-active",selected); button.setAttribute("aria-current",selected?"page":"false"); });
  dashboardEls.viewPanels.forEach((panel) => { const selected=panel.dataset.viewPanel===view; panel.hidden=!selected; panel.classList.toggle("is-active",selected); });
  if(view==="standings") renderStandings(); if(view==="groups") renderGroups();
}
function setRegion(region) {
  if(!regionLabels[region]) return; dashboardRegion=region; closeMatchModal(); renderRegionState(); renderMatches(); renderStandings(); renderGroups();
}
function setMatchData(records) {
  if(!Array.isArray(records)) return;
  records.forEach((record) => { const region=record.region||dashboardRegion; if(!resultsByRegion[region]||!record.matchday||!record.homeTeam||!record.awayTeam)return; const key=matchKey(Number(record.matchday),record.homeTeam,record.awayTeam); resultsByRegion[region][key]={...resultsByRegion[region][key],...record}; });
  renderMatches(); renderStandings();
}

dashboardEls.regionButtons.forEach((button) => button.addEventListener("click",()=>setRegion(button.dataset.region)));
dashboardEls.navButtons.forEach((button) => button.addEventListener("click",()=>switchView(button.dataset.view)));
dashboardEls.roundTabs.addEventListener("click",(event)=>{const button=event.target.closest("[data-round]");if(!button)return;activeRound=Number(button.dataset.round);renderRoundTabs();renderMatches()});
dashboardEls.matchGrid.addEventListener("click",(event)=>{const card=event.target.closest("[data-match-index]");if(card)openMatchModal(Number(card.dataset.matchIndex))});
dashboardEls.modalClose.addEventListener("click",closeMatchModal);
dashboardEls.matchModal.addEventListener("click",(event)=>{if(event.target===dashboardEls.matchModal)closeMatchModal()});
window.addEventListener("keydown",(event)=>{if(event.key==="Escape")closeMatchModal()});

// 后续官方数据接入点：传入带 region/matchday/homeTeam/awayTeam 的比赛记录即可刷新页面。
window.__penguinCupDashboard = { setMatchData, getStandings:(region=dashboardRegion)=>calculateStandings(region), getState:()=>({region:dashboardRegion,view:activeView,round:activeRound}) };
renderRegionState(); renderRoundTabs(); renderMatches(); renderStandings(); renderGroups();
