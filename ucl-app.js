const potColors = ["#f4cc55", "#78c5a4", "#8fb7ef", "#ee9e8d"];
const potDarkColors = ["#d9a92c", "#49a57f", "#678fc8", "#cf7767"];

// 整机 memory：这是不可变的核心约束，界面和抽签逻辑均从这里读取。
const MACHINE_MEMORY = Object.freeze({
  managerPoolSize: 36,
  potSize: 9,
  oneMachineForAllPots: true,
  drawByPot: true,
  preserveLegacyAnimation: true,
  spinDuration: 3000,
  releaseDuration: 2300,
  modalDelay: 1000,
});
const SHOW_FULL_FIXTURES = false;

const teamPots = [
  {
    number: 1,
    teams: [
      { zh: "巴黎圣日耳曼", name: "Paris Saint-Germain", id: "52747" },
      { zh: "拜仁慕尼黑", name: "Bayern München", id: "50037" },
      { zh: "皇家马德里", name: "Real Madrid", id: "50051" },
      { zh: "利物浦", name: "Liverpool", id: "7889" },
      { zh: "国际米兰", name: "Inter", id: "50138" },
      { zh: "曼城", name: "Manchester City", id: "52919" },
      { zh: "阿森纳", name: "Arsenal", id: "52280" },
      { zh: "巴塞罗那", name: "Barcelona", id: "50080" },
      { zh: "马德里竞技", name: "Atlético de Madrid", id: "50124" },
    ],
  },
  {
    number: 2,
    teams: [
      { zh: "多特蒙德", name: "Borussia Dortmund", id: "52758" },
      { zh: "罗马", name: "Roma", id: "50137" },
      { zh: "葡萄牙体育", name: "Sporting CP", id: "50149" },
      { zh: "阿斯顿维拉", name: "Aston Villa", id: "52683" },
      { zh: "波尔图", name: "Porto", id: "50064" },
      { zh: "曼联", name: "Manchester United", id: "52682" },
      { zh: "布鲁日", name: "Club Brugge", id: "50043" },
      { zh: "皇家贝蒂斯", name: "Real Betis", id: "52265" },
      { zh: "埃因霍温", name: "PSV", id: "50062" },
    ],
  },
  {
    number: 3,
    teams: [
      { zh: "费耶诺德", name: "Feyenoord", id: "52749" },
      { zh: "里尔", name: "Lille", id: "75797" },
      { zh: "博德闪耀", name: "Bodø/Glimt", id: "59333" },
      { zh: "那不勒斯", name: "Napoli", id: "50136" },
      { zh: "RB莱比锡", name: "Leipzig", id: "2603790" },
      { zh: "比利亚雷亚尔", name: "Villarreal", id: "70691" },
      { zh: "费内巴切", name: "Fenerbahçe", id: "52692" },
      { zh: "顿涅茨克矿工", name: "Shakhtar Donetsk", id: "52707" },
      { zh: "加拉塔萨雷", name: "Galatasaray", id: "50067" },
    ],
  },
  {
    number: 4,
    teams: [
      { zh: "布拉格斯拉维亚", name: "Slavia Praha", id: "52498" },
      { zh: "布拉迪斯拉发", name: "Slovan Bratislava", id: "52797" },
      { zh: "斯图加特", name: "Stuttgart", id: "50107" },
      { zh: "雅典AEK", name: "AEK Athens", id: "50129" },
      { zh: "林茨", name: "LASK", id: "63405" },
      { zh: "科莫", name: "Como", id: "79946" },
      { zh: "朗斯", name: "Lens", id: "52277" },
      { zh: "维京", name: "Viking", id: "52319" },
      { zh: "萨巴赫", name: "Sabah", id: "2609356" },
    ],
  },
];

const competitionPots = {
  arctic: [
    ["UEFAntasis", "Bad K", "紫葱酱", "东马", "座山雕", "fitz", "Shuo", "AVG", "DDDD"],
    ["狗蛋kk", "Diego W", "喝呀", "Kimi", "nbw", "baros15", "第一边锋萨默维尔", "Steven", "kusuri"],
    ["当代丁蟹", "企鹅", "切尔西萌塔", "Pluto", "verydisco", "拙言", "W", "Kw", "欧巡"],
    ["九命黑獭一统天下", "江逐流", "Eva", "Micky VDV", "殷少Eric", "x team", "Yamine Lmao", "镜落", "warmer"],
  ],
  antarctic: [
    ["Euro Ben", "remember", "进藤光", "LQ女神", "小火龙", "Acidboy", "yummy", "conan joe", "enzowang"],
    ["蒂兰基尔尼", "Jiang", "Nirvana", "yu128", "丢屁", "lulucool", "halfbrain", "Snepia Fepson", "鬼嗨"],
    ["Eric", "BA", "高桥明", "公瑾", "saru", "垫底超人00", "Dannyyyyy", "比尔", "纳尼"],
    ["面条", "联曼", "珍惜眼前人❤️", "Frank Hua", "Elliott", "Lambert luo", "Y", "英国人画像", "ZHIYU"],
  ],
};

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function createCompetitionTeams(pots) {
  return pots.flatMap((names, potIndex) =>
    names.map((name, position) => ({
      id: potIndex * 9 + position + 1,
      name,
      pot: potIndex + 1,
      potPosition: position + 1,
    }))
  );
}

const regionConfigs = [
  { key: "arctic", label: "Shuo🐧北极赛区", players: createCompetitionTeams(competitionPots.arctic) },
  { key: "antarctic", label: "小红书关注Acidboy🐧南极赛区", players: createCompetitionTeams(competitionPots.antarctic) },
];

const slots = teamPots.flatMap((pot) =>
  pot.teams.map((team, index) => ({ pot: pot.number, position: index + 1, team }))
);
const fixtureColumns = [1, 2, 3, 4].flatMap((pot) => [
  { key: `p${pot}Home`, pot, venue: "home", label: "主场" },
  { key: `p${pot}Away`, pot, venue: "away", label: "客场" },
]);

const els = {
  machineCanvas: document.querySelector("#machineCanvas"),
  regionSwitch: document.querySelector("#regionSwitch"),
  startBtn: document.querySelector("#startBtn"),
  autoBtn: document.querySelector("#autoBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  exportDrawBtn: document.querySelector("#exportDrawBtn"),
  exportScheduleBtn: document.querySelector("#exportScheduleBtn"),
  exportActions: document.querySelector("#exportActions"),
  groupsGrid: document.querySelector("#groupsGrid"),
  playerPool: document.querySelector("#playerPool"),
  fixturesPanel: document.querySelector("#fixturesPanel"),
  fixturesRegion: document.querySelector("#fixturesRegion"),
  fixturesBody: document.querySelector("#fixturesBody"),
  schedulesPanel: document.querySelector("#schedulesPanel"),
  schedulesRegion: document.querySelector("#schedulesRegion"),
  scheduleList: document.querySelector("#scheduleList"),
  drawCount: document.querySelector("#drawCount"),
  remainingCount: document.querySelector("#remainingCount"),
  stagePill: document.querySelector("#stagePill"),
  nextTeamLabel: document.querySelector("#nextTeamLabel"),
  resultModal: document.querySelector("#resultModal"),
  closeModalBtn: document.querySelector("#closeModalBtn"),
  modalText: document.querySelector("#modalText"),
  resetModal: document.querySelector("#resetModal"),
  cancelResetBtn: document.querySelector("#cancelResetBtn"),
  confirmResetBtn: document.querySelector("#confirmResetBtn"),
  autoModal: document.querySelector("#autoModal"),
  cancelAutoBtn: document.querySelector("#cancelAutoBtn"),
  confirmAutoBtn: document.querySelector("#confirmAutoBtn"),
};

function createDrawState(players) {
  return {
    assignments: [],
    remaining: [...players],
    fixtures: null,
    isSpinning: false,
    isReleasing: false,
    modalPending: false,
    modalOpen: false,
    latestSlotKey: "",
  };
}

const regionStates = Object.fromEntries(
  regionConfigs.map((region) => [region.key, createDrawState(region.players)])
);
let activeRegionKey = "arctic";
let state = regionStates[activeRegionKey];
let machineBalls = [];
let releaseVisual = null;
let animationFrame = 0;
let spinTimer = 0;
let releaseTimer = 0;
let modalTimer = 0;
let lastFrameTime = 0;

const machineCtx = els.machineCanvas.getContext("2d");
const goldenAngle = Math.PI * (3 - Math.sqrt(5));
const bowlPhysics = {
  centerX: 290,
  centerY: 240,
  radius: 174,
  exitX: 304,
  exitY: 402,
};

function activeRegion() {
  return regionConfigs.find((region) => region.key === activeRegionKey);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function logoUrl(team) {
  return `https://img.uefa.com/imgml/TP/teams/logos/70x70/${team.id}.png`;
}

function slotKey(slot) {
  return `P${slot.pot}-${slot.position}`;
}

function assignmentMap() {
  return new Map(state.assignments.map((assignment) => [slotKey(assignment.slot), assignment]));
}

function addFixture(fixtures, home, away) {
  fixtures[home.id][`p${away.pot}Home`] = away.id;
  fixtures[away.id][`p${home.pot}Away`] = home.id;
}

function generateFixtures(players) {
  const fixtures = Object.fromEntries(players.map((player) => [player.id, {}]));
  const byPot = new Map(
    [1, 2, 3, 4].map((pot) => [pot, players.filter((player) => player.pot === pot)])
  );

  for (let pot = 1; pot <= 4; pot += 1) {
    const ring = shuffle(byPot.get(pot));
    ring.forEach((home, index) => addFixture(fixtures, home, ring[(index + 1) % ring.length]));
  }

  for (let leftPot = 1; leftPot <= 4; leftPot += 1) {
    for (let rightPot = leftPot + 1; rightPot <= 4; rightPot += 1) {
      const left = shuffle(byPot.get(leftPot));
      const right = shuffle(byPot.get(rightPot));
      const returnOffset = 1 + Math.floor(Math.random() * (right.length - 1));
      left.forEach((home, index) => addFixture(fixtures, home, right[index]));
      left.forEach((away, index) => addFixture(fixtures, right[(index + returnOffset) % right.length], away));
    }
  }

  const expectedKeys = [1, 2, 3, 4].flatMap((pot) => [`p${pot}Home`, `p${pot}Away`]);
  players.forEach((player) => {
    const opponentIds = expectedKeys.map((key) => fixtures[player.id][key]);
    if (opponentIds.some((id) => !id) || new Set(opponentIds).size !== 8 || opponentIds.includes(player.id)) {
      throw new Error(`无法为 ${player.name} 生成完整的 8 场对阵`);
    }
  });

  return fixtures;
}

function currentSlot() {
  return slots[state.assignments.length] || null;
}

function currentPotIndex() {
  return Math.min(Math.floor(state.assignments.length / 9), 3);
}

function renderRegionSwitch() {
  els.regionSwitch.innerHTML = regionConfigs
    .map((region) => `
      <button class="region-tab ${region.key === activeRegionKey ? "active" : ""}" data-region="${region.key}" type="button">
        ${region.label}
      </button>
    `)
    .join("");
}

function renderPots() {
  const bySlot = assignmentMap();
  els.groupsGrid.innerHTML = teamPots
    .map((pot) => {
      const rows = pot.teams
        .map((team, index) => {
          const slot = { pot: pot.number, position: index + 1, team };
          const key = slotKey(slot);
          const assignment = bySlot.get(key);
          const classes = ["slot-row", assignment ? "filled" : "", key === state.latestSlotKey ? "latest" : ""]
            .filter(Boolean)
            .join(" ");
          return `
            <div class="${classes}" id="slot-${key}">
              <span class="club-logo"><img src="${logoUrl(team)}" alt="${escapeHTML(team.zh)}队徽" loading="lazy" /></span>
              <span class="team-name" title="${escapeHTML(team.name)}">${escapeHTML(team.zh)}</span>
              <span class="player-badge">${assignment ? escapeHTML(assignment.player.name) : ""}</span>
            </div>
          `;
        })
        .join("");
      const filled = pot.teams.filter((team, index) => bySlot.has(`P${pot.number}-${index + 1}`)).length;
      return `
        <article class="group-card" style="--pot-color:${potColors[pot.number - 1]}">
          <div class="group-title"><strong>Pot ${pot.number}</strong><span>${filled}/9</span></div>
          <div class="slot-list">${rows}</div>
        </article>
      `;
    })
    .join("");
}

function renderPlayerPool() {
  const remainingIds = new Set(state.remaining.map((player) => player.id));
  const activePot = currentSlot()?.pot;
  els.playerPool.innerHTML = [1, 2, 3, 4]
    .map((pot) => {
      const players = activeRegion().players.filter((player) => player.pot === pot);
      const remaining = players.filter((player) => remainingIds.has(player.id)).length;
      return `
        <section class="pool-pot ${activePot === pot ? "active" : ""}" data-pot="${pot}">
          <div class="pool-pot-head"><strong>Pot ${pot}</strong><span>${remaining}/9</span></div>
          <div class="pool-pot-list">
            ${players.map((player) => `
              <span class="pool-chip ${remainingIds.has(player.id) ? "" : "drawn"}">
                <span title="${escapeHTML(player.name)}">${escapeHTML(player.name)}</span>
              </span>
            `).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderFixtures() {
  const complete = state.assignments.length === slots.length && state.fixtures;
  const visible = SHOW_FULL_FIXTURES && complete;
  els.fixturesPanel.hidden = !visible;
  if (!visible) {
    els.fixturesBody.innerHTML = "";
    return;
  }

  const players = activeRegion().players;
  const playersById = new Map(players.map((player) => [player.id, player]));
  const assignmentsByPlayer = new Map(state.assignments.map((assignment) => [assignment.player.id, assignment]));

  els.fixturesRegion.textContent = activeRegion().label;
  els.fixturesBody.innerHTML = players
    .map((player) => {
      const assignment = assignmentsByPlayer.get(player.id);
      const opponents = fixtureColumns
        .map((column) => {
          const opponent = playersById.get(state.fixtures[player.id][column.key]);
          const opponentAssignment = assignmentsByPlayer.get(opponent.id);
          return `
            <td>
              <span class="fixture-opponent">
                <img src="${logoUrl(opponentAssignment.slot.team)}" alt="" loading="lazy" />
                <span class="fixture-copy">
                  <strong title="${escapeHTML(opponent.name)}">${escapeHTML(opponent.name)}</strong>
                  <small>${escapeHTML(opponentAssignment.slot.team.zh)}</small>
                </span>
              </span>
            </td>
          `;
        })
        .join("");
      return `
        <tr data-pot="${player.pot}">
          <th scope="row">
            <span class="fixture-team">
              <img src="${logoUrl(assignment.slot.team)}" alt="" loading="lazy" />
              <span class="fixture-copy">
                <span class="fixture-pot">Pot ${player.pot}</span>
                <strong title="${escapeHTML(player.name)}">${escapeHTML(player.name)}</strong>
                <small>${escapeHTML(assignment.slot.team.zh)}</small>
              </span>
            </span>
          </th>
          ${opponents}
        </tr>
      `;
    })
    .join("");
}

function renderSchedules() {
  const complete = state.assignments.length === slots.length && state.fixtures;
  els.schedulesPanel.hidden = !complete;
  if (!complete) {
    els.scheduleList.innerHTML = "";
    return;
  }

  const players = activeRegion().players;
  const playersById = new Map(players.map((player) => [player.id, player]));
  const assignmentsByPlayer = new Map(state.assignments.map((assignment) => [assignment.player.id, assignment]));
  els.schedulesRegion.textContent = activeRegion().label;
  els.scheduleList.innerHTML = [1, 2, 3, 4]
    .map((pot) => {
      const cards = players
        .filter((player) => player.pot === pot)
        .map((player) => {
          const assignment = assignmentsByPlayer.get(player.id);
          const matches = fixtureColumns
            .map((column) => {
              const opponent = playersById.get(state.fixtures[player.id][column.key]);
              const opponentAssignment = assignmentsByPlayer.get(opponent.id);
              return `
                <div class="schedule-match" data-venue="${column.venue}">
                  <div class="schedule-match-meta"><span>Pot ${column.pot}</span><strong>${column.label}</strong></div>
                  <img src="${logoUrl(opponentAssignment.slot.team)}" alt="${escapeHTML(opponentAssignment.slot.team.zh)}队徽" loading="lazy" />
                  <strong title="${escapeHTML(opponent.name)}">${escapeHTML(opponent.name)}</strong>
                </div>
              `;
            })
            .join("");
          return `
            <article class="schedule-card" data-pot="${player.pot}">
              <header class="schedule-card-head">
                <img src="${logoUrl(assignment.slot.team)}" alt="${escapeHTML(assignment.slot.team.zh)}队徽" loading="lazy" />
                <div>
                  <h3>${escapeHTML(player.name)}</h3>
                </div>
              </header>
              <div class="schedule-opponents">${matches}</div>
            </article>
          `;
        })
        .join("");
      return `
        <section class="schedule-pot-row" data-pot="${pot}" aria-label="Pot ${pot} 赛程">
          <div class="schedule-pot-title">Pot ${pot}</div>
          <div class="schedule-pot-grid">${cards}</div>
        </section>
      `;
    })
    .join("");
}

function renderControls() {
  const complete = state.assignments.length === slots.length;
  const busy = state.isSpinning || state.isReleasing || state.modalPending || state.modalOpen;
  const next = currentSlot();
  const positionInPot = (state.assignments.length % 9) + 1;

  els.drawCount.textContent = state.assignments.length;
  els.remainingCount.textContent = `${state.remaining.length} 人`;
  els.stagePill.textContent = complete ? "抽签完成" : `Pot ${next.pot} · ${positionInPot}/9`;
  els.nextTeamLabel.textContent = complete ? "完成" : `Pot ${next.pot} · ${next.team.zh}`;
  els.startBtn.textContent = state.isSpinning ? "抽签中…" : state.isReleasing || state.modalPending ? "出球中…" : "抽签";
  els.startBtn.disabled = busy || complete;
  els.autoBtn.disabled = busy || complete;
  els.resetBtn.disabled = state.isReleasing;
  els.exportActions.hidden = !complete;
}

function render() {
  renderRegionSwitch();
  renderPots();
  renderPlayerPool();
  renderFixtures();
  renderSchedules();
  updateMachineBalls();
  renderControls();
}

function packedPosition(index) {
  const rows = [3, 6, 7, 8, 7, 5];
  let offset = 0;
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const count = rows[rowIndex];
    if (index >= offset + count) {
      offset += count;
      continue;
    }
    const indexInRow = index - offset;
    return {
      x: bowlPhysics.centerX + (indexInRow - (count - 1) / 2) * 39,
      y: 380 - rowIndex * 38,
    };
  }
  return { x: bowlPhysics.centerX, y: bowlPhysics.centerY };
}

function updateMachineBalls() {
  const potIndex = currentPotIndex();
  const activePot = currentSlot()?.pot;
  const eligiblePlayers = activePot ? state.remaining.filter((player) => player.pot === activePot) : [];
  machineBalls = eligiblePlayers.map((player, index) => {
    const position = packedPosition(index);
    return {
      player,
      x: position.x,
      y: position.y,
      vx: 0,
      vy: 0,
      angle: index * goldenAngle,
      spin: 0,
      size: 18 + (index % 2),
      fill: potColors[potIndex],
      darkFill: potDarkColors[potIndex],
    };
  });
  lastFrameTime = 0;
  drawMachine(performance.now());
}

function clearMachine() {
  machineCtx.clearRect(0, 0, 640, 640);
}

function drawStroke(path, width, color = "#2b2b2b") {
  machineCtx.save();
  machineCtx.lineWidth = width;
  machineCtx.lineCap = "round";
  machineCtx.lineJoin = "round";
  machineCtx.strokeStyle = color;
  machineCtx.stroke(path);
  machineCtx.restore();
}

function drawGlassBowl() {
  const centerX = 290;
  const centerY = 240;
  const radius = 178;
  const glow = machineCtx.createRadialGradient(centerX - 58, centerY - 76, 20, centerX, centerY, radius);
  glow.addColorStop(0, "rgba(255, 255, 255, 0.98)");
  glow.addColorStop(0.46, "rgba(255, 253, 244, 0.82)");
  glow.addColorStop(1, "rgba(228, 244, 234, 0.66)");

  machineCtx.save();
  machineCtx.shadowColor = "rgba(38, 48, 43, 0.16)";
  machineCtx.shadowBlur = 14;
  machineCtx.shadowOffsetY = 9;
  machineCtx.fillStyle = glow;
  machineCtx.beginPath();
  machineCtx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  machineCtx.fill();
  machineCtx.restore();

  machineCtx.strokeStyle = "#2b2b2b";
  machineCtx.lineWidth = 7;
  machineCtx.beginPath();
  machineCtx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  machineCtx.stroke();

  machineCtx.strokeStyle = "rgba(43, 43, 43, 0.16)";
  machineCtx.lineWidth = 4;
  machineCtx.beginPath();
  machineCtx.arc(centerX, centerY, radius - 18, 0.18, Math.PI * 1.84);
  machineCtx.stroke();

  machineCtx.strokeStyle = "rgba(255, 255, 255, 0.9)";
  machineCtx.lineWidth = 12;
  machineCtx.beginPath();
  machineCtx.arc(centerX - 44, centerY - 54, 92, Math.PI * 1.06, Math.PI * 1.48);
  machineCtx.stroke();

  machineCtx.strokeStyle = "rgba(20, 125, 99, 0.16)";
  machineCtx.lineWidth = 14;
  machineCtx.beginPath();
  machineCtx.arc(centerX, centerY, radius - 34, Math.PI * 0.28, Math.PI * 0.76);
  machineCtx.stroke();

  machineCtx.fillStyle = "rgba(255, 255, 255, 0.5)";
  machineCtx.beginPath();
  machineCtx.ellipse(centerX - 66, centerY - 94, 44, 16, -0.42, 0, Math.PI * 2);
  machineCtx.fill();
}

function constrainBall(ball) {
  const centerX = bowlPhysics.centerX;
  const centerY = bowlPhysics.centerY;
  const maxRadius = bowlPhysics.radius - ball.size;
  const dx = ball.x - centerX;
  const dy = ball.y - centerY;
  const distance = Math.hypot(dx, dy) || 1;

  if (distance > maxRadius) {
    const nx = dx / distance;
    const ny = dy / distance;
    ball.x = centerX + nx * maxRadius;
    ball.y = centerY + ny * maxRadius;
    const dot = ball.vx * nx + ball.vy * ny;
    ball.vx -= dot * nx * 1.75;
    ball.vy -= dot * ny * 1.75;
  }
}

function stepMachinePhysics(time) {
  if (!lastFrameTime) {
    lastFrameTime = time;
    return;
  }

  const dt = Math.min((time - lastFrameTime) / 1000, 0.035);
  lastFrameTime = time;
  if (!state.isSpinning && !state.isReleasing) return;

  const centerX = bowlPhysics.centerX;
  const centerY = bowlPhysics.centerY;
  const balls = machineBalls.filter((ball) => ball.player.id !== releaseVisual?.player.id);

  balls.forEach((ball, index) => {
    const dx = ball.x - centerX;
    const dy = ball.y - centerY;
    const distance = Math.hypot(dx, dy) || 1;

    if (state.isSpinning) {
      const tangentX = -dy / distance;
      const tangentY = dx / distance;
      const noise = Math.sin(time * 0.018 + index * 3.41);
      const pulse = Math.cos(time * 0.015 + index * 2.13);

      ball.vx += (tangentX * 640 + noise * 360 + dx * pulse * 0.9 - dx * 0.62) * dt;
      ball.vy += (tangentY * 640 + pulse * 340 + dy * noise * 0.9 - dy * 0.62) * dt;
      ball.vx *= 0.994;
      ball.vy *= 0.994;
    } else {
      ball.vy += 620 * dt;
      ball.vx *= 0.968;
      ball.vy *= 0.978;
    }

    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;
    ball.spin += (ball.vx + ball.vy) * dt * 0.04;
    constrainBall(ball);
  });

  for (let i = 0; i < balls.length; i += 1) {
    for (let j = i + 1; j < balls.length; j += 1) {
      const a = balls[i];
      const b = balls[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distance = Math.hypot(dx, dy) || 1;
      const minDistance = a.size + b.size + 1.5;
      if (distance >= minDistance) continue;

      const overlap = (minDistance - distance) / 2;
      const nx = dx / distance;
      const ny = dy / distance;
      a.x -= nx * overlap;
      a.y -= ny * overlap;
      b.x += nx * overlap;
      b.y += ny * overlap;

      const impulse = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
      a.vx -= nx * impulse * 0.24;
      a.vy -= ny * impulse * 0.24;
      b.vx += nx * impulse * 0.24;
      b.vy += ny * impulse * 0.24;
      constrainBall(a);
      constrainBall(b);
    }
  }
}

function drawFivePointStar(x, y, outerRadius, innerRadius, rotation = -Math.PI / 2) {
  machineCtx.beginPath();
  for (let point = 0; point < 10; point += 1) {
    const radius = point % 2 === 0 ? outerRadius : innerRadius;
    const angle = rotation + (point * Math.PI) / 5;
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    if (point === 0) machineCtx.moveTo(px, py);
    else machineCtx.lineTo(px, py);
  }
  machineCtx.closePath();
}

function drawBall(x, y, size, label, fill = "#fffdf8", alpha = 1, darkFill = null) {
  machineCtx.save();
  machineCtx.globalAlpha = alpha;
  machineCtx.fillStyle = "rgba(35, 35, 35, 0.13)";
  machineCtx.beginPath();
  machineCtx.ellipse(x + 4, y + 6, size * 0.9, size * 0.42, 0, 0, Math.PI * 2);
  machineCtx.fill();

  const ballGradient = machineCtx.createRadialGradient(x - size * 0.38, y - size * 0.42, 1, x, y, size);
  ballGradient.addColorStop(0, "#ffffff");
  ballGradient.addColorStop(0.18, "#45cfff");
  ballGradient.addColorStop(0.52, "#174ea6");
  ballGradient.addColorStop(1, "#031342");
  machineCtx.fillStyle = ballGradient;
  machineCtx.strokeStyle = "#eaf8ff";
  machineCtx.lineWidth = 2.5;
  machineCtx.beginPath();
  machineCtx.arc(x, y, size, 0, Math.PI * 2);
  machineCtx.fill();
  machineCtx.stroke();

  machineCtx.save();
  machineCtx.beginPath();
  machineCtx.arc(x, y, size - 2, 0, Math.PI * 2);
  machineCtx.clip();
  machineCtx.fillStyle = "rgba(255, 255, 255, 0.96)";
  drawFivePointStar(x, y + size * 0.04, size * 0.46, size * 0.2);
  machineCtx.fill();
  for (let star = 0; star < 5; star += 1) {
    const angle = -Math.PI / 2 + (star * Math.PI * 2) / 5;
    const starX = x + Math.cos(angle) * size * 0.68;
    const starY = y + Math.sin(angle) * size * 0.68;
    drawFivePointStar(starX, starY, size * 0.23, size * 0.1, angle + Math.PI / 2);
    machineCtx.fill();
  }
  machineCtx.restore();
  machineCtx.restore();
}

function drawBalls() {
  const visibleBalls = machineBalls
    .filter((ball) => ball.player.id !== releaseVisual?.player.id)
    .map((ball) => ({ ...ball }))
    .sort((a, b) => a.y - b.y);

  visibleBalls.forEach((ball) => {
    drawBall(ball.x, ball.y, ball.size, ball.player.id, ball.fill, 1, ball.darkFill);
  });
}

function chooseExitPlayer() {
  const activePot = currentSlot()?.pot;
  const eligiblePlayers = state.remaining.filter((player) => player.pot === activePot);
  const candidateBalls = machineBalls
    .filter((ball) => eligiblePlayers.some((player) => player.id === ball.player.id))
    .map((ball) => ({
      ball,
      distance: Math.hypot(ball.x - bowlPhysics.exitX, ball.y - bowlPhysics.exitY),
    }))
    .sort((a, b) => a.distance - b.distance);

  const player = candidateBalls[0]?.ball.player || eligiblePlayers[Math.floor(Math.random() * eligiblePlayers.length)];
  return {
    player,
    randomIndex: state.remaining.findIndex((item) => item.id === player.id),
  };
}

function drawTube() {
  const tubePath = new Path2D();
  tubePath.moveTo(304, 402);
  tubePath.quadraticCurveTo(306, 462, 372, 462);
  tubePath.lineTo(552, 462);

  drawStroke(tubePath, 82, "#26302b");
  drawStroke(tubePath, 68, "#f8f6ec");
  drawStroke(tubePath, 28, "rgba(111, 190, 164, 0.16)");

  machineCtx.save();
  const mouthGradient = machineCtx.createLinearGradient(536, 416, 622, 508);
  mouthGradient.addColorStop(0, "#ffffff");
  mouthGradient.addColorStop(1, "#e8efe7");
  machineCtx.fillStyle = mouthGradient;
  machineCtx.strokeStyle = "#2b2b2b";
  machineCtx.lineWidth = 6;
  machineCtx.beginPath();
  machineCtx.roundRect(538, 416, 84, 92, 40);
  machineCtx.fill();
  machineCtx.stroke();
  machineCtx.restore();
}

function drawBase() {
  machineCtx.save();
  machineCtx.fillStyle = "rgba(35, 35, 35, 0.08)";
  machineCtx.beginPath();
  machineCtx.ellipse(312, 544, 192, 24, 0, 0, Math.PI * 2);
  machineCtx.fill();

  machineCtx.strokeStyle = "#2b2b2b";
  machineCtx.lineWidth = 6;
  machineCtx.lineCap = "round";
  machineCtx.beginPath();
  machineCtx.moveTo(178, 516);
  machineCtx.lineTo(454, 516);
  machineCtx.stroke();

  machineCtx.lineWidth = 5;
  machineCtx.beginPath();
  machineCtx.moveTo(246, 514);
  machineCtx.lineTo(226, 560);
  machineCtx.moveTo(374, 514);
  machineCtx.lineTo(394, 560);
  machineCtx.stroke();
  machineCtx.restore();
}

function releasePoint(progress, visual = releaseVisual) {
  const p = Math.min(Math.max(progress, 0), 1);
  const entryEnd = 0.22;
  const curveEnd = 0.46;
  const entry = { x: bowlPhysics.exitX, y: bowlPhysics.exitY };
  const start = visual?.start || entry;

  if (p <= entryEnd) {
    const t = p / entryEnd;
    const eased = 1 - (1 - t) ** 2;
    return { x: start.x + (entry.x - start.x) * eased, y: start.y + (entry.y - start.y) * eased };
  }

  const tubeProgress = (p - entryEnd) / (1 - entryEnd);
  if (tubeProgress <= curveEnd) {
    const t = tubeProgress / curveEnd;
    const inv = 1 - t;
    const control = { x: 306, y: 462 };
    const end = { x: 372, y: 462 };
    return {
      x: inv ** 2 * entry.x + 2 * inv * t * control.x + t ** 2 * end.x,
      y: inv ** 2 * entry.y + 2 * inv * t * control.y + t ** 2 * end.y,
    };
  }

  const t = (tubeProgress - curveEnd) / (1 - curveEnd);
  return { x: 372 + (602 - 372) * t, y: 462 };
}

function drawReleaseBall(time) {
  if (!releaseVisual) return;
  const progress = (time - releaseVisual.startedAt) / MACHINE_MEMORY.releaseDuration;
  const bounded = Math.min(progress, 1);
  const eased = bounded < 0.55 ? 2 * bounded ** 2 : 1 - (-2 * bounded + 2) ** 2 / 2;
  const point = releasePoint(eased, releaseVisual);
  const inPipeAlpha = eased < 0.22 ? 1 : eased < 0.9 ? 0.34 + eased * 0.32 : 1;
  drawBall(point.x, point.y, releaseVisual.size, releaseVisual.player.id, releaseVisual.color, inPipeAlpha, releaseVisual.darkColor);
}

function drawMachine(time = performance.now()) {
  stepMachinePhysics(time);
  clearMachine();
  drawBase();
  drawTube();
  drawGlassBowl();
  drawBalls();
  drawReleaseBall(time);

  if (state.isSpinning || state.isReleasing) {
    animationFrame = requestAnimationFrame(drawMachine);
  }
}

function startDraw() {
  if (state.isSpinning || state.isReleasing || !currentSlot()) return;
  clearTimeout(spinTimer);
  clearTimeout(modalTimer);
  machineBalls.forEach((ball, index) => {
    const burst = 260 + (index % 4) * 80;
    const angle = index * goldenAngle + Math.random() * 0.75;
    ball.vx += Math.cos(angle) * burst + (Math.random() - 0.5) * 260;
    ball.vy += Math.sin(angle) * burst - 220 - Math.random() * 260;
  });
  state.isSpinning = true;
  state.modalPending = false;
  state.modalOpen = false;
  state.latestSlotKey = "";
  renderPots();
  renderControls();
  drawMachine(performance.now());
  spinTimer = window.setTimeout(releaseBall, MACHINE_MEMORY.spinDuration);
}

function launchBall(player) {
  const sourceBall = machineBalls.find((ball) => ball.player.id === player.id);
  const potIndex = currentPotIndex();
  releaseVisual = {
    player,
    color: potColors[potIndex],
    darkColor: potDarkColors[potIndex],
    size: sourceBall?.size || 18,
    start: { x: sourceBall?.x || bowlPhysics.exitX, y: sourceBall?.y || bowlPhysics.exitY },
    startedAt: performance.now(),
  };
  drawMachine(releaseVisual.startedAt);
}

function releaseBall() {
  if (!state.isSpinning || state.isReleasing || state.remaining.length === 0) return;
  const slot = currentSlot();
  const { player, randomIndex } = chooseExitPlayer();
  state.isSpinning = false;
  state.isReleasing = true;
  renderControls();
  launchBall(player);
  clearTimeout(releaseTimer);
  releaseTimer = window.setTimeout(() => completeDraw(player, randomIndex, slot), MACHINE_MEMORY.releaseDuration);
}

function completeDraw(player, randomIndex, slot) {
  state.remaining.splice(randomIndex, 1);
  state.assignments.push({ player, slot });
  if (state.assignments.length === slots.length) {
    state.fixtures = generateFixtures(activeRegion().players);
  }
  state.isSpinning = false;
  state.isReleasing = false;
  state.modalPending = true;
  state.latestSlotKey = slotKey(slot);
  if (animationFrame) cancelAnimationFrame(animationFrame);
  render();
  drawMachine(performance.now());

  clearTimeout(modalTimer);
  modalTimer = window.setTimeout(() => {
    releaseVisual = null;
    state.modalPending = false;
    showResultModal(player, slot);
    drawMachine(performance.now());
  }, MACHINE_MEMORY.modalDelay);
}

function showResultModal(player, slot) {
  state.modalOpen = true;
  els.modalText.innerHTML = `
    <strong class="draw-paper-team">${escapeHTML(slot.team.zh)}</strong>
    <span class="draw-paper-manager">${escapeHTML(player.name)}</span>
  `;
  els.resultModal.hidden = false;
  renderControls();
}

function closeResultModal() {
  state.modalOpen = false;
  els.resultModal.hidden = true;
  renderControls();
}

function completeRandomDraw() {
  if (state.isSpinning || state.isReleasing || state.modalPending || !currentSlot()) return;
  closeAutoConfirm();
  const remainingByPot = Object.fromEntries(
    [1, 2, 3, 4].map((pot) => [pot, shuffle(state.remaining.filter((player) => player.pot === pot))])
  );
  slots.slice(state.assignments.length).forEach((slot) => {
    state.assignments.push({ player: remainingByPot[slot.pot].shift(), slot });
  });
  state.remaining = [];
  state.fixtures = generateFixtures(activeRegion().players);
  state.latestSlotKey = "";
  state.modalPending = false;
  render();
}

function openResetConfirm() {
  if (!state.isReleasing) els.resetModal.hidden = false;
}

function closeResetConfirm() {
  els.resetModal.hidden = true;
}

function openAutoConfirm() {
  if (state.isSpinning || state.isReleasing || state.modalPending || state.modalOpen || !currentSlot()) return;
  els.autoModal.hidden = false;
}

function closeAutoConfirm() {
  els.autoModal.hidden = true;
}

function resetDraw() {
  clearTimeout(spinTimer);
  clearTimeout(releaseTimer);
  clearTimeout(modalTimer);
  cancelAnimationFrame(animationFrame);
  closeResultModal();
  closeResetConfirm();
  closeAutoConfirm();
  regionStates[activeRegionKey] = createDrawState(activeRegion().players);
  state = regionStates[activeRegionKey];
  releaseVisual = null;
  render();
}

function setActiveRegion(nextKey) {
  if (!regionStates[nextKey] || nextKey === activeRegionKey) return;
  if (state.isSpinning || state.isReleasing || state.modalPending) return;
  clearTimeout(spinTimer);
  clearTimeout(releaseTimer);
  clearTimeout(modalTimer);
  cancelAnimationFrame(animationFrame);
  state.isSpinning = false;
  state.isReleasing = false;
  state.modalPending = false;
  state.modalOpen = false;
  els.resultModal.hidden = true;
  activeRegionKey = nextKey;
  state = regionStates[activeRegionKey];
  releaseVisual = null;
  render();
}

const exportFont = '"Microsoft YaHei", "PingFang SC", Arial, sans-serif';

function paintExportBackground(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#020628");
  gradient.addColorStop(0.52, "#00134f");
  gradient.addColorStop(1, "#123b8d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgba(0, 201, 255, 0.1)";
  ctx.beginPath();
  ctx.arc(width * 0.84, 0, width * 0.34, 0, Math.PI * 2);
  ctx.fill();
}

function fillRoundRect(ctx, x, y, width, height, radius, color) {
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawFittedText(ctx, text, x, y, maxWidth, size, color, options = {}) {
  const { weight = 900, align = "left", minSize = 12 } = options;
  let fontSize = size;
  do {
    ctx.font = `${weight} ${fontSize}px ${exportFont}`;
    if (ctx.measureText(text).width <= maxWidth) break;
    fontSize -= 1;
  } while (fontSize > minSize);
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y, maxWidth);
}

function drawLogo(ctx, image, x, y, size) {
  if (!image) return;
  const ratio = Math.min(size / image.naturalWidth, size / image.naturalHeight);
  const width = image.naturalWidth * ratio;
  const height = image.naturalHeight * ratio;
  ctx.drawImage(image, x + (size - width) / 2, y + (size - height) / 2, width, height);
}

function loadExportLogo(team) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    const finish = (loadedImage) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      resolve([team.id, loadedImage]);
    };
    const timeout = window.setTimeout(() => finish(null), 8000);
    image.crossOrigin = "anonymous";
    image.onload = () => finish(image);
    image.onerror = () => finish(null);
    image.src = logoUrl(team);
  });
}

async function loadExportLogos() {
  const teams = teamPots.flatMap((pot) => pot.teams);
  return new Map(await Promise.all(teams.map(loadExportLogo)));
}

function createExportCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  paintExportBackground(ctx, width, height);
  return { canvas, ctx };
}

function drawExportHeading(ctx, width, title) {
  drawFittedText(ctx, activeRegion().label, 52, 54, width - 104, 32, "#00c9ff", { minSize: 22 });
  drawFittedText(ctx, title, 52, 104, width - 104, 46, "#ffffff", { minSize: 30 });
}

async function createDrawResultImage() {
  const logos = await loadExportLogos();
  const { canvas, ctx } = createExportCanvas(2100, 1260);
  const bySlot = assignmentMap();
  const margin = 44;
  const columnGap = 12;
  const columnWidth = (canvas.width - margin * 2 - columnGap * 3) / 4;
  const top = 158;
  const titleHeight = 54;
  const rowHeight = 108;

  drawExportHeading(ctx, canvas.width, "欧冠球队抽签结果");
  teamPots.forEach((pot, potIndex) => {
    const x = margin + potIndex * (columnWidth + columnGap);
    fillRoundRect(ctx, x, top, columnWidth, titleHeight, 8, potColors[potIndex]);
    drawFittedText(ctx, `Pot ${pot.number}`, x + 18, top + titleHeight / 2, columnWidth - 36, 28, "#06133c");

    pot.teams.forEach((team, teamIndex) => {
      const y = top + titleHeight + teamIndex * rowHeight;
      const assignment = bySlot.get(`P${pot.number}-${teamIndex + 1}`);
      ctx.fillStyle = teamIndex % 2 ? "#183a7c" : "#102b68";
      ctx.fillRect(x, y + 4, columnWidth, rowHeight - 4);
      drawLogo(ctx, logos.get(team.id), x + 14, y + 20, 64);
      drawFittedText(ctx, team.zh, x + 92, y + 37, columnWidth - 110, 22, "#7ee9ff", { minSize: 16 });
      drawFittedText(ctx, assignment?.player.name || "—", x + 92, y + 73, columnWidth - 110, 30, "#ffffff", { minSize: 18 });
    });
  });
  return canvas;
}

async function createScheduleImage() {
  const logos = await loadExportLogos();
  const { canvas, ctx } = createExportCanvas(3300, 2780);
  const players = activeRegion().players;
  const playersById = new Map(players.map((player) => [player.id, player]));
  const assignmentsByPlayer = new Map(state.assignments.map((assignment) => [assignment.player.id, assignment]));
  const margin = 35;
  const cardGap = 10;
  const cardWidth = (canvas.width - margin * 2 - cardGap * 8) / 9;
  const rowTop = 154;
  const potTitleHeight = 48;
  const ownerHeight = 82;
  const matchHeight = 62;
  const potGap = 30;
  const potRowHeight = potTitleHeight + ownerHeight + matchHeight * 8;

  drawExportHeading(ctx, canvas.width, "欧冠联赛阶段对阵");
  [1, 2, 3, 4].forEach((pot, potIndex) => {
    const y = rowTop + potIndex * (potRowHeight + potGap);
    const potColor = potColors[potIndex];
    fillRoundRect(ctx, margin, y, 160, potTitleHeight - 6, 7, potColor);
    drawFittedText(ctx, `Pot ${pot}`, margin + 18, y + 21, 124, 25, "#06133c");

    players.filter((player) => player.pot === pot).forEach((player, playerIndex) => {
      const x = margin + playerIndex * (cardWidth + cardGap);
      const assignment = assignmentsByPlayer.get(player.id);
      const cardY = y + potTitleHeight;
      ctx.fillStyle = "#071a52";
      ctx.fillRect(x, cardY, cardWidth, ownerHeight + matchHeight * 8);
      ctx.fillStyle = potColor;
      ctx.fillRect(x, cardY, cardWidth, 7);
      drawLogo(ctx, logos.get(assignment.slot.team.id), x + 15, cardY + 19, 48);
      drawFittedText(ctx, player.name, x + 78, cardY + 43, cardWidth - 94, 25, "#ffffff", { minSize: 15 });

      fixtureColumns.forEach((column, matchIndex) => {
        const opponent = playersById.get(state.fixtures[player.id][column.key]);
        const opponentAssignment = assignmentsByPlayer.get(opponent.id);
        const matchY = cardY + ownerHeight + matchIndex * matchHeight;
        const isHome = column.venue === "home";
        ctx.fillStyle = isHome ? "#102b68" : "#183a7c";
        ctx.fillRect(x + 3, matchY + 2, cardWidth - 6, matchHeight - 2);
        ctx.fillStyle = isHome ? "#00c9ff" : "#e11d8d";
        ctx.fillRect(x + 3, matchY + 2, 4, matchHeight - 2);
        drawFittedText(ctx, `Pot ${column.pot}`, x + 14, matchY + 15, 82, 15, "#b7c7ec", { weight: 800 });
        drawFittedText(ctx, column.label, x + cardWidth - 14, matchY + 15, 70, 15, isHome ? "#00c9ff" : "#ff9bd4", { align: "right" });
        drawLogo(ctx, logos.get(opponentAssignment.slot.team.id), x + 14, matchY + 22, 34);
        drawFittedText(ctx, opponent.name, x + 58, matchY + 43, cardWidth - 74, 21, "#ffffff", { minSize: 13 });
      });
    });
  });
  return canvas;
}

function safeFilePart(value) {
  return value.replace(/[\\/:*?"<>|]/g, "");
}

function downloadCanvas(canvas, filename) {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("图片生成失败"));
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        resolve();
      }, "image/png");
    } catch (error) {
      reject(error);
    }
  });
}

async function runImageExport(button, label, createImage) {
  if (state.assignments.length !== slots.length || !state.fixtures) return;
  const originalText = button.textContent;
  els.exportDrawBtn.disabled = true;
  els.exportScheduleBtn.disabled = true;
  button.textContent = "生成中…";
  try {
    const canvas = await createImage();
    await downloadCanvas(canvas, `企鹅欧冠Fantasy_${safeFilePart(activeRegion().label)}_${label}.png`);
  } catch (error) {
    console.error(error);
    window.alert("图片导出失败，请重试");
  } finally {
    button.textContent = originalText;
    els.exportDrawBtn.disabled = false;
    els.exportScheduleBtn.disabled = false;
  }
}

els.startBtn.addEventListener("click", startDraw);
els.autoBtn.addEventListener("click", openAutoConfirm);
els.resetBtn.addEventListener("click", openResetConfirm);
els.exportDrawBtn.addEventListener("click", () => runImageExport(els.exportDrawBtn, "抽签结果", createDrawResultImage));
els.exportScheduleBtn.addEventListener("click", () => runImageExport(els.exportScheduleBtn, "对阵", createScheduleImage));
els.cancelResetBtn.addEventListener("click", closeResetConfirm);
els.confirmResetBtn.addEventListener("click", resetDraw);
els.cancelAutoBtn.addEventListener("click", closeAutoConfirm);
els.confirmAutoBtn.addEventListener("click", completeRandomDraw);
els.closeModalBtn.addEventListener("click", closeResultModal);
els.regionSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-region]");
  if (button) setActiveRegion(button.dataset.region);
});
els.resultModal.addEventListener("click", (event) => {
  if (event.target === els.resultModal) closeResultModal();
});
els.resetModal.addEventListener("click", (event) => {
  if (event.target === els.resetModal) closeResetConfirm();
});
els.autoModal.addEventListener("click", (event) => {
  if (event.target === els.autoModal) closeAutoConfirm();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeResultModal();
    closeResetConfirm();
    closeAutoConfirm();
  }
});

window.__uclDrawApp = {
  getState: () => ({
    region: activeRegionKey,
    assignments: state.assignments.length,
    remaining: state.remaining.length,
    nextSlot: currentSlot() ? slotKey(currentSlot()) : null,
  }),
  completeRandomDraw,
  resetDraw,
};

render();
