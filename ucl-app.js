const potColors = ["#f4cc55", "#78c5a4", "#8fb7ef", "#ee9e8d"];
const potDarkColors = ["#d9a92c", "#49a57f", "#678fc8", "#cf7767"];

// 整机 memory：这是不可变的核心约束，界面和抽签逻辑均从这里读取。
const MACHINE_MEMORY = Object.freeze({
  managerPoolSize: 36,
  singleMachinePool: true,
  preserveLegacyAnimation: true,
  spinDuration: 3000,
  releaseDuration: 2300,
  modalDelay: 1000,
});

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

const sourceManagers = {
  arctic: [
    "francistasy", "DDDD", "andy", "大猫与火炮", "AVG", "511", "Enzo Wang", "LAD",
    "丢屁", "antonius", "LeoDing", "Kimi", "ZHIYU", "nbw", "海笛", "GreyIi",
    "糕灬福特", "青森山田", "Yemon", "Loki7_7", "小火龙", "Steven", "GaelClichy", "嘉进®平安",
    "东马", "Nagimenz", "英国人画像", "fitz", "Acidboy", "Verydisco", "拙言", "Dannyyyyy",
    "Shuo", "蒂亚鸽", "比尔", "Kevin", "Clark Sim", "狗蛋kk", "乳酸君", "香香软软的big b",
    "星喵", "联曼", "Qunny", "珍惜眼前人❤️", "Havertz scores again", "Maxlee", "鸡米", "TK City",
  ],
  antarctic: [
    "笨笨是大骗子", "Dr. Mongodmundsson", "小新Jerry", "座山雕", "Conan Joe", "128", "Summerfan", "轻狂",
    "喝呀", "remember", "zcnai", "小绿", "Bad K", "Ethan", "橘", "BA",
    "ocean欧巡", "进藤光", "第一边锋萨默维尔", "halfbrain", "蒂兰基尔尼", "软糖", "kusuri", "Baros15",
    "Pluto", "Jackiegu", "企鹅", "Team Name", "垫底超人00", "Chelsea mata", "SEAWUWU", "沙洛系咁队",
    "Gladiator Mississippi", "fpl中搁浅的哲学家", "Eva", "diogo", "AnonTokyo", "可乐", "紫葱酱", "面条",
    "Yeehc111", "鬼嗨", "patience", "Micky VDV", "开半天猪耳朵", "SSU-FAIAA", "X Team", "镜落",
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

function selectManagers(names) {
  return shuffle(names)
    .slice(0, MACHINE_MEMORY.managerPoolSize)
    .map((name, index) => ({ id: index + 1, name }));
}

const regionConfigs = [
  { key: "arctic", label: "北极赛区", players: selectManagers(sourceManagers.arctic) },
  { key: "antarctic", label: "南极赛区", players: selectManagers(sourceManagers.antarctic) },
];

const slots = teamPots.flatMap((pot) =>
  pot.teams.map((team, index) => ({ pot: pot.number, position: index + 1, team }))
);

const els = {
  machineCanvas: document.querySelector("#machineCanvas"),
  regionSwitch: document.querySelector("#regionSwitch"),
  startBtn: document.querySelector("#startBtn"),
  autoBtn: document.querySelector("#autoBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  exportActions: document.querySelector("#exportActions"),
  groupsGrid: document.querySelector("#groupsGrid"),
  playerPool: document.querySelector("#playerPool"),
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
  els.playerPool.innerHTML = activeRegion().players
    .map((player) => `
      <span class="pool-chip ${remainingIds.has(player.id) ? "" : "drawn"}">
        <strong>P${String(player.id).padStart(2, "0")}</strong>
        <span title="${escapeHTML(player.name)}">${escapeHTML(player.name)}</span>
      </span>
    `)
    .join("");
}

function renderControls() {
  const complete = state.assignments.length === slots.length;
  const busy = state.isSpinning || state.isReleasing || state.modalPending || state.modalOpen;
  const next = currentSlot();
  const positionInPot = (state.assignments.length % 9) + 1;

  els.drawCount.textContent = state.assignments.length;
  els.remainingCount.textContent = `${state.remaining.length} 人待抽`;
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
  machineBalls = state.remaining.map((player, index) => {
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
  const candidateBalls = machineBalls
    .filter((ball) => state.remaining.some((player) => player.id === ball.player.id))
    .map((ball) => ({
      ball,
      distance: Math.hypot(ball.x - bowlPhysics.exitX, ball.y - bowlPhysics.exitY),
    }))
    .sort((a, b) => a.distance - b.distance);

  const player = candidateBalls[0]?.ball.player || state.remaining[Math.floor(Math.random() * state.remaining.length)];
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
  const remainingPool = shuffle(state.remaining);
  slots.slice(state.assignments.length).forEach((slot, index) => {
    state.assignments.push({ player: remainingPool[index], slot });
  });
  state.remaining = [];
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

function exportPairings() {
  if (state.assignments.length !== slots.length) return;
  const rows = [
    ["赛区", "档位", "档内顺序", "球队", "英文名", "经理人"],
    ...state.assignments.map(({ player, slot }) => [
      activeRegion().label,
      `Pot ${slot.pot}`,
      slot.position,
      slot.team.zh,
      slot.team.name,
      player.name,
    ]),
  ];
  const csv = rows
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))
    .join("\r\n");
  const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `企鹅欧冠Fantasy_${activeRegion().label}_球队对应名单.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

els.startBtn.addEventListener("click", startDraw);
els.autoBtn.addEventListener("click", openAutoConfirm);
els.resetBtn.addEventListener("click", openResetConfirm);
els.exportBtn.addEventListener("click", exportPairings);
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
