const groups = [
  {
    letter: "A",
    teams: [
      { zh: "墨西哥", flag: "🇲🇽", code: "MEX" },
      { zh: "南非", flag: "🇿🇦", code: "RSA" },
      { zh: "韩国", flag: "🇰🇷", code: "KOR" },
      { zh: "捷克", flag: "🇨🇿", code: "CZE" },
    ],
  },
  {
    letter: "B",
    teams: [
      { zh: "加拿大", flag: "🇨🇦", code: "CAN" },
      { zh: "波黑", flag: "🇧🇦", code: "BIH" },
      { zh: "卡塔尔", flag: "🇶🇦", code: "QAT" },
      { zh: "瑞士", flag: "🇨🇭", code: "SUI" },
    ],
  },
  {
    letter: "C",
    teams: [
      { zh: "巴西", flag: "🇧🇷", code: "BRA" },
      { zh: "摩洛哥", flag: "🇲🇦", code: "MAR" },
      { zh: "海地", flag: "🇭🇹", code: "HAI" },
      { zh: "苏格兰", flag: "🏴", code: "SCO" },
    ],
  },
  {
    letter: "D",
    teams: [
      { zh: "美国", flag: "🇺🇸", code: "USA" },
      { zh: "巴拉圭", flag: "🇵🇾", code: "PAR" },
      { zh: "澳大利亚", flag: "🇦🇺", code: "AUS" },
      { zh: "土耳其", flag: "🇹🇷", code: "TUR" },
    ],
  },
  {
    letter: "E",
    teams: [
      { zh: "德国", flag: "🇩🇪", code: "GER" },
      { zh: "库拉索", flag: "🇨🇼", code: "CUW" },
      { zh: "科特迪瓦", flag: "🇨🇮", code: "CIV" },
      { zh: "厄瓜多尔", flag: "🇪🇨", code: "ECU" },
    ],
  },
  {
    letter: "F",
    teams: [
      { zh: "荷兰", flag: "🇳🇱", code: "NED" },
      { zh: "日本", flag: "🇯🇵", code: "JPN" },
      { zh: "瑞典", flag: "🇸🇪", code: "SWE" },
      { zh: "突尼斯", flag: "🇹🇳", code: "TUN" },
    ],
  },
  {
    letter: "G",
    teams: [
      { zh: "比利时", flag: "🇧🇪", code: "BEL" },
      { zh: "埃及", flag: "🇪🇬", code: "EGY" },
      { zh: "伊朗", flag: "🇮🇷", code: "IRN" },
      { zh: "新西兰", flag: "🇳🇿", code: "NZL" },
    ],
  },
  {
    letter: "H",
    teams: [
      { zh: "西班牙", flag: "🇪🇸", code: "ESP" },
      { zh: "佛得角", flag: "🇨🇻", code: "CPV" },
      { zh: "沙特阿拉伯", flag: "🇸🇦", code: "KSA" },
      { zh: "乌拉圭", flag: "🇺🇾", code: "URU" },
    ],
  },
  {
    letter: "I",
    teams: [
      { zh: "法国", flag: "🇫🇷", code: "FRA" },
      { zh: "塞内加尔", flag: "🇸🇳", code: "SEN" },
      { zh: "伊拉克", flag: "🇮🇶", code: "IRQ" },
      { zh: "挪威", flag: "🇳🇴", code: "NOR" },
    ],
  },
  {
    letter: "J",
    teams: [
      { zh: "阿根廷", flag: "🇦🇷", code: "ARG" },
      { zh: "阿尔及利亚", flag: "🇩🇿", code: "ALG" },
      { zh: "奥地利", flag: "🇦🇹", code: "AUT" },
      { zh: "约旦", flag: "🇯🇴", code: "JOR" },
    ],
  },
  {
    letter: "K",
    teams: [
      { zh: "葡萄牙", flag: "🇵🇹", code: "POR" },
      { zh: "刚果民主共和国", flag: "🇨🇩", code: "COD" },
      { zh: "乌兹别克斯坦", flag: "🇺🇿", code: "UZB" },
      { zh: "哥伦比亚", flag: "🇨🇴", code: "COL" },
    ],
  },
  {
    letter: "L",
    teams: [
      { zh: "英格兰", flag: "🏴", code: "ENG" },
      { zh: "克罗地亚", flag: "🇭🇷", code: "CRO" },
      { zh: "加纳", flag: "🇬🇭", code: "GHA" },
      { zh: "巴拿马", flag: "🇵🇦", code: "PAN" },
    ],
  },
];

const playerNames = [
  "Faiaa",
  "轻狂",
  "珍惜",
  "蒙古大夫",
  "可乐",
  "remember",
  "Eric(殷少)",
  "andy",
  "Bad K",
  "dice",
  "笨笨",
  "GaelClichy",
  "LA",
  "MUJY",
  "nagimenz",
  "面条",
  "Yeehc111",
  "Old Trafford",
  "丢屁",
  "蒂兰基尔尼",
  "fitz",
  "青森山田",
  "Kw",
  "BA",
  "ocean",
  "进藤光",
  "香香软软的big b",
  "鸡米",
  "Enzo Wang",
  "Ericherry",
  "Conan",
  "Yemon",
  "欧冠bot  ༽ UEFAntasis",
  "diogo20lfc",
  "AVG",
  "Steven",
  "id：JackieGu",
  "HALL（记得哥铁粉）",
  "Variable 🦖 软糖",
  "Summerfan",
  "patience",
  "比尔",
  "别墅里面唱K 你想象不到",
  "MutdBJ-垫底超人",
  "座山雕",
  "Antonius",
  "九五二七",
  "Pluto.",
];

const players = playerNames.map((name, index) => ({
  id: index + 1,
  name,
}));

const slots = groups.flatMap((group) =>
  group.teams.map((team, teamIndex) => ({
    group: group.letter,
    position: teamIndex + 1,
    team,
  }))
);

const storageKey = "world-cup-player-draw-mvp";
const releaseDuration = 1800;
const modalDelay = 1000;
const flagCodes = {
  MEX: "mx",
  RSA: "za",
  KOR: "kr",
  CZE: "cz",
  CAN: "ca",
  BIH: "ba",
  QAT: "qa",
  SUI: "ch",
  BRA: "br",
  MAR: "ma",
  HAI: "ht",
  SCO: "gb-sct",
  USA: "us",
  PAR: "py",
  AUS: "au",
  TUR: "tr",
  GER: "de",
  CUW: "cw",
  CIV: "ci",
  ECU: "ec",
  NED: "nl",
  JPN: "jp",
  SWE: "se",
  TUN: "tn",
  BEL: "be",
  EGY: "eg",
  IRN: "ir",
  NZL: "nz",
  ESP: "es",
  CPV: "cv",
  KSA: "sa",
  URU: "uy",
  FRA: "fr",
  SEN: "sn",
  IRQ: "iq",
  NOR: "no",
  ARG: "ar",
  ALG: "dz",
  AUT: "at",
  JOR: "jo",
  POR: "pt",
  COD: "cd",
  UZB: "uz",
  COL: "co",
  ENG: "gb-eng",
  CRO: "hr",
  GHA: "gh",
  PAN: "pa",
};

const els = {
  machine: document.querySelector("#machine"),
  machineCanvas: document.querySelector("#machineCanvas"),
  startBtn: document.querySelector("#startBtn"),
  releaseBtn: document.querySelector("#releaseBtn"),
  autoBtn: document.querySelector("#autoBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  posterBtn: document.querySelector("#posterBtn"),
  excelBtn: document.querySelector("#excelBtn"),
  exportActions: document.querySelector("#exportActions"),
  groupsGrid: document.querySelector("#groupsGrid"),
  playerPool: document.querySelector("#playerPool"),
  drawCount: document.querySelector("#drawCount"),
  remainingCount: document.querySelector("#remainingCount"),
  resultModal: document.querySelector("#resultModal"),
  closeModalBtn: document.querySelector("#closeModalBtn"),
  modalText: document.querySelector("#modalText"),
};

let state = {
  assignments: [],
  remaining: [...players],
  isSpinning: false,
  isReleasing: false,
  modalPending: false,
  modalOpen: false,
  latestSlotKey: null,
};

let animationFrame = null;
let releaseTimer = null;
let modalTimer = null;

const machineCtx = els.machineCanvas.getContext("2d");
const machinePalette = ["#fffdf8", "#f6cf58", "#e4f4ea"];
const goldenAngle = Math.PI * (3 - Math.sqrt(5));
let machineBalls = [];
let releaseVisual = null;
let lastMachineTime = 0;

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeXML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function restoreState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.assignments)) return;

    const validAssignments = parsed.assignments
      .filter((item) => item && Number.isInteger(item.playerId))
      .slice(0, 48);
    const usedIds = new Set(validAssignments.map((item) => item.playerId));

    state.assignments = validAssignments
      .map((item, index) => ({
        player: players.find((player) => player.id === item.playerId),
        slot: slots[index],
      }))
      .filter((item) => item.player && item.slot);
    state.remaining = players.filter((player) => !usedIds.has(player.id));
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      assignments: state.assignments.map((assignment) => ({
        playerId: assignment.player.id,
      })),
    })
  );
}

function slotKey(slot) {
  return `${slot.group}${slot.position}`;
}

function assignmentMap() {
  return new Map(
    state.assignments.map((assignment) => [slotKey(assignment.slot), assignment])
  );
}

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function chooseRemainingPlayer() {
  const randomIndex = Math.floor(Math.random() * state.remaining.length);
  return {
    player: state.remaining[randomIndex],
    randomIndex,
  };
}

function flagUrl(team) {
  return `https://flagcdn.com/w40/${flagCodes[team.code] || team.code.toLowerCase()}.png`;
}

function renderGroups() {
  const bySlot = assignmentMap();

  els.groupsGrid.innerHTML = groups
    .map((group) => {
      const filled = group.teams.filter((_, index) =>
        bySlot.has(`${group.letter}${index + 1}`)
      ).length;
      const rows = group.teams
        .map((team, index) => {
          const slot = { group: group.letter, position: index + 1, team };
          const key = slotKey(slot);
          const assignment = bySlot.get(key);
          const classes = [
            "slot-row",
            assignment ? "filled" : "",
            key === state.latestSlotKey ? "latest" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return `
            <div class="${classes}" id="slot-${key}">
              <span class="slot-code">${key}</span>
              <span class="flag-frame">
                <img src="${flagUrl(team)}" alt="${escapeHTML(team.zh)}国旗" loading="lazy" />
              </span>
              <span class="team-name">${escapeHTML(team.zh)}</span>
              <span class="player-badge ${assignment ? "" : "waiting"}">${assignment ? escapeHTML(assignment.player.name) : "待抽"}</span>
            </div>
          `;
        })
        .join("");

      return `
        <article class="group-card">
          <div class="group-title">
            <strong>${group.letter}组</strong>
            <span>${filled}/4</span>
          </div>
          <div class="slot-list">${rows}</div>
        </article>
      `;
    })
    .join("");
}

function renderPlayerPool() {
  const remainingIds = new Set(state.remaining.map((player) => player.id));
  els.playerPool.innerHTML = players
    .map((player) => {
      const isDrawn = !remainingIds.has(player.id);
      return `
        <span class="pool-chip ${isDrawn ? "drawn" : ""}">
          <strong>P${player.id}</strong>
          <span>${escapeHTML(player.name)}</span>
        </span>
      `;
    })
    .join("");
}

function updateMachineBalls() {
  machineBalls = state.remaining.map((player, index) => {
    const count = Math.max(state.remaining.length, 1);
    const radiusRatio = Math.sqrt((index + 0.5) / count);
    const angle = index * goldenAngle;
    const radius = 18 + radiusRatio * 122;

    return {
      player,
      x: 290 + Math.cos(angle) * radius,
      y: 240 + Math.sin(angle) * radius,
      vx: Math.sin(index * 1.91) * 24,
      vy: Math.cos(index * 1.37) * 24,
      angle,
      spin: 0,
      size: 17 + (index % 4),
      fill: machinePalette[index % machinePalette.length],
    };
  });
  lastMachineTime = 0;
  drawMachine(performance.now());
}

function renderControls() {
  const completed = state.assignments.length >= slots.length;
  const busy =
    state.isSpinning ||
    state.isReleasing ||
    state.modalPending ||
    state.modalOpen;

  els.drawCount.textContent = state.assignments.length;
  els.remainingCount.textContent = `${state.remaining.length} 人待抽`;
  els.startBtn.disabled = busy || completed;
  els.releaseBtn.disabled = !state.isSpinning || state.isReleasing || completed;
  els.autoBtn.disabled = busy || completed;
  els.resetBtn.disabled = state.isReleasing;
  els.exportActions.hidden = !completed;
}

function render() {
  renderGroups();
  renderPlayerPool();
  updateMachineBalls();
  renderControls();
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

function drawGlassBowl(time) {
  const centerX = 290;
  const centerY = 240;
  const radius = 178;
  const glow = machineCtx.createRadialGradient(
    centerX - 58,
    centerY - 76,
    20,
    centerX,
    centerY,
    radius
  );
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
  const centerX = 290;
  const centerY = 240;
  const maxRadius = 160 - ball.size;
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
  if (!lastMachineTime) {
    lastMachineTime = time;
    return;
  }

  const dt = Math.min((time - lastMachineTime) / 1000, 0.035);
  lastMachineTime = time;
  if (!state.isSpinning && !state.isReleasing) return;

  const centerX = 290;
  const centerY = 240;
  const balls = machineBalls.filter((ball) => ball.player.id !== releaseVisual?.player.id);

  balls.forEach((ball, index) => {
    const dx = ball.x - centerX;
    const dy = ball.y - centerY;
    const distance = Math.hypot(dx, dy) || 1;
    const tangentX = -dy / distance;
    const tangentY = dx / distance;
    const noise = Math.sin(time * 0.012 + index * 3.41);
    const pulse = Math.cos(time * 0.009 + index * 2.13);

    ball.vx += (tangentX * 360 + noise * 180 - dx * 1.15) * dt;
    ball.vy += (tangentY * 360 + pulse * 180 - dy * 1.15) * dt;
    ball.vx *= 0.988;
    ball.vy *= 0.988;
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

function drawBall(x, y, size, label, fill = "#fffdf8") {
  machineCtx.save();
  machineCtx.fillStyle = "rgba(35, 35, 35, 0.13)";
  machineCtx.beginPath();
  machineCtx.ellipse(x + 4, y + 6, size * 0.9, size * 0.42, 0, 0, Math.PI * 2);
  machineCtx.fill();

  const ballGradient = machineCtx.createRadialGradient(
    x - size * 0.36,
    y - size * 0.42,
    2,
    x,
    y,
    size
  );
  ballGradient.addColorStop(0, "#ffffff");
  ballGradient.addColorStop(0.34, fill);
  ballGradient.addColorStop(1, fill === "#f6cf58" ? "#e9b940" : "#dfeee5");
  machineCtx.fillStyle = ballGradient;
  machineCtx.strokeStyle = "#2b2b2b";
  machineCtx.lineWidth = 2.5;
  machineCtx.beginPath();
  machineCtx.arc(x, y, size, 0, Math.PI * 2);
  machineCtx.fill();
  machineCtx.stroke();

  machineCtx.fillStyle = "#232323";
  machineCtx.font = `950 ${Math.max(12, size * 0.78)}px Microsoft YaHei, Arial, sans-serif`;
  machineCtx.textAlign = "center";
  machineCtx.textBaseline = "middle";
  machineCtx.fillText(label, x, y + 0.5);
  machineCtx.restore();
}

function drawBalls(time) {
  const visibleBalls = machineBalls
    .filter((ball) => ball.player.id !== releaseVisual?.player.id)
    .map((ball) => ({ ...ball }))
    .sort((a, b) => a.y - b.y);

  visibleBalls.forEach((ball) => {
    drawBall(ball.x, ball.y, ball.size, ball.player.id, ball.fill);
  });
}

function drawTube() {
  const tubePath = new Path2D();
  tubePath.moveTo(296, 410);
  tubePath.quadraticCurveTo(318, 478, 394, 472);
  tubePath.lineTo(542, 472);

  drawStroke(tubePath, 46, "#26302b");
  drawStroke(tubePath, 31, "#f8f6ec");
  drawStroke(tubePath, 12, "rgba(111, 190, 164, 0.18)");

  machineCtx.save();
  const mouthGradient = machineCtx.createLinearGradient(534, 437, 590, 507);
  mouthGradient.addColorStop(0, "#ffffff");
  mouthGradient.addColorStop(1, "#e8efe7");
  machineCtx.fillStyle = mouthGradient;
  machineCtx.strokeStyle = "#2b2b2b";
  machineCtx.lineWidth = 6;
  machineCtx.beginPath();
  machineCtx.roundRect(534, 437, 56, 70, 27);
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

function releasePoint(progress) {
  const p = Math.min(Math.max(progress, 0), 1);
  const start = { x: 314, y: 385 };
  const controlA = { x: 300, y: 458 };
  const controlB = { x: 392, y: 474 };
  const end = { x: 574, y: 472 };
  const inv = 1 - p;

  return {
    x:
      inv ** 3 * start.x +
      3 * inv ** 2 * p * controlA.x +
      3 * inv * p ** 2 * controlB.x +
      p ** 3 * end.x,
    y:
      inv ** 3 * start.y +
      3 * inv ** 2 * p * controlA.y +
      3 * inv * p ** 2 * controlB.y +
      p ** 3 * end.y,
  };
}

function drawReleaseBall(time) {
  if (!releaseVisual) return;

  const progress = (time - releaseVisual.startedAt) / releaseDuration;
  const eased = Math.min(progress, 1) < 0.55
    ? 2 * Math.min(progress, 1) ** 2
    : 1 - (-2 * Math.min(progress, 1) + 2) ** 2 / 2;
  const point = releasePoint(eased);
  drawBall(point.x, point.y, 24, releaseVisual.player.id, "#f6cf58");
}

function drawMachine(time = performance.now()) {
  stepMachinePhysics(time);
  clearMachine();
  drawBase();
  drawTube();
  drawGlassBowl(time);
  drawBalls(time);
  drawReleaseBall(time);

  if (state.isSpinning || state.isReleasing) {
    animationFrame = requestAnimationFrame(drawMachine);
  }
}

function startDraw() {
  if (state.isSpinning || state.isReleasing || state.assignments.length >= slots.length) return;

  clearTimeout(modalTimer);
  state.isSpinning = true;
  state.modalPending = false;
  state.modalOpen = false;
  state.latestSlotKey = null;
  renderGroups();
  renderControls();
  drawMachine(performance.now());
}

function launchBall(player) {
  releaseVisual = {
    player,
    startedAt: performance.now(),
  };
  drawMachine(releaseVisual.startedAt);
}

function completeDraw(player, randomIndex, slot) {
  state.remaining.splice(randomIndex, 1);
  state.assignments.push({ player, slot });
  state.latestSlotKey = slotKey(slot);
  state.isSpinning = false;
  state.isReleasing = false;
  state.modalPending = true;
  saveState();

  if (animationFrame) cancelAnimationFrame(animationFrame);
  render();
  drawMachine(performance.now());

  clearTimeout(modalTimer);
  modalTimer = window.setTimeout(() => {
    releaseVisual = null;
    state.modalPending = false;
    showResultModal(state.assignments.length, player, slot);
    drawMachine(performance.now());
  }, modalDelay);
}

function releaseBall() {
  if (!state.isSpinning || state.isReleasing || state.remaining.length === 0) return;

  const slot = slots[state.assignments.length];
  const { player, randomIndex } = chooseRemainingPlayer();

  state.isSpinning = false;
  state.isReleasing = true;
  renderControls();
  launchBall(player);

  clearTimeout(releaseTimer);
  releaseTimer = window.setTimeout(() => {
    completeDraw(player, randomIndex, slot);
  }, releaseDuration);
}

function showResultModal(number, player, slot) {
  els.modalText.innerHTML = `
    <span class="modal-line">第${number}位抽出的玩家为 <strong>${escapeHTML(player.name)}</strong></span>
    <span class="modal-line">对应的球队为 <strong>${escapeHTML(slot.team.zh)}队</strong></span>
    <span class="modal-line">将被分在 <strong>${slot.group}组</strong></span>
  `;
  state.modalOpen = true;
  els.resultModal.hidden = false;
  renderControls();
}

function closeResultModal() {
  state.modalOpen = false;
  els.resultModal.hidden = true;
  renderControls();
}

function completeRandomGroups() {
  if (state.isSpinning || state.isReleasing || state.assignments.length >= slots.length) return;

  const randomPlayers = shuffle(state.remaining);
  const startIndex = state.assignments.length;
  randomPlayers.forEach((player, index) => {
    state.assignments.push({
      player,
      slot: slots[startIndex + index],
    });
  });
  state.remaining = [];
  state.latestSlotKey = null;
  state.modalPending = false;
  state.modalOpen = false;
  saveState();
  closeResultModal();
  render();
}

function resetDraw() {
  clearTimeout(releaseTimer);
  clearTimeout(modalTimer);
  if (animationFrame) cancelAnimationFrame(animationFrame);

  state = {
    assignments: [],
    remaining: [...players],
    isSpinning: false,
    isReleasing: false,
    modalPending: false,
    modalOpen: false,
    latestSlotKey: null,
  };
  localStorage.removeItem(storageKey);
  closeResultModal();
  releaseVisual = null;
  render();
}

function rowsForExport() {
  const bySlot = assignmentMap();
  return slots.map((slot) => {
    const assignment = bySlot.get(slotKey(slot));
    return {
      group: `${slot.group}组`,
      position: slotKey(slot),
      flag: slot.team.flag,
      team: slot.team.zh,
      player: assignment ? assignment.player.name : "",
    };
  });
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawPoster() {
  if (state.assignments.length < slots.length) return;

  const canvas = document.createElement("canvas");
  canvas.width = 1800;
  canvas.height = 2400;
  const ctx = canvas.getContext("2d");
  const bySlot = assignmentMap();

  ctx.fillStyle = "#fbf6ec";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#dcefe5";
  ctx.beginPath();
  ctx.arc(210, 180, 130, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ffe1d8";
  ctx.beginPath();
  ctx.arc(1608, 210, 160, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f3c852";
  ctx.beginPath();
  ctx.arc(1488, 2232, 150, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#232323";
  ctx.font = "900 82px Microsoft YaHei, PingFang SC, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("企鹅世界杯Fantasy分组结果", canvas.width / 2, 165);

  const marginX = 115;
  const top = 275;
  const gapX = 28;
  const gapY = 30;
  const cardW = (canvas.width - marginX * 2 - gapX * 2) / 3;
  const cardH = 455;

  groups.forEach((group, groupIndex) => {
    const col = groupIndex % 3;
    const row = Math.floor(groupIndex / 3);
    const x = marginX + col * (cardW + gapX);
    const y = top + row * (cardH + gapY);

    ctx.save();
    ctx.fillStyle = "#fffdf8";
    roundRect(ctx, x, y, cardW, cardH, 28);
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#232323";
    ctx.stroke();

    ctx.fillStyle = "#147d63";
    roundRect(ctx, x, y, cardW, 74, 24);
    ctx.fill();
    ctx.fillStyle = "#fffdf8";
    ctx.textAlign = "left";
    ctx.font = "900 42px Microsoft YaHei, PingFang SC, sans-serif";
    ctx.fillText(`${group.letter}组`, x + 28, y + 50);

    group.teams.forEach((team, teamIndex) => {
      const slot = { group: group.letter, position: teamIndex + 1, team };
      const assignment = bySlot.get(slotKey(slot));
      const rowY = y + 112 + teamIndex * 82;

      ctx.fillStyle = teamIndex % 2 === 0 ? "#f6f1e8" : "#fffdf8";
      roundRect(ctx, x + 20, rowY - 42, cardW - 40, 64, 18);
      ctx.fill();

      ctx.fillStyle = "#147d63";
      ctx.font = "900 27px Microsoft YaHei, PingFang SC, sans-serif";
      ctx.fillText(slotKey(slot), x + 38, rowY);

      ctx.font = "28px Segoe UI Emoji, Apple Color Emoji, sans-serif";
      ctx.fillText(team.flag, x + 103, rowY);

      ctx.fillStyle = "#232323";
      ctx.font = "900 28px Microsoft YaHei, PingFang SC, sans-serif";
      ctx.fillText(team.zh, x + 154, rowY);

      ctx.textAlign = "right";
      ctx.fillStyle = "#ef725f";
      ctx.font = "900 28px Microsoft YaHei, PingFang SC, sans-serif";
      ctx.fillText(assignment?.player.name || "", x + cardW - 34, rowY);
      ctx.textAlign = "left";
    });

    ctx.restore();
  });

  canvas.toBlob((blob) => {
    if (!blob) return;
    downloadBlob(blob, "企鹅世界杯Fantasy分组结果.png");
  }, "image/png");
}

function cellRef(colIndex, rowIndex) {
  let value = "";
  let index = colIndex + 1;
  while (index > 0) {
    const mod = (index - 1) % 26;
    value = String.fromCharCode(65 + mod) + value;
    index = Math.floor((index - mod) / 26);
  }
  return `${value}${rowIndex}`;
}

function sheetXML(rows) {
  const rowXML = rows
    .map((row, rowIndex) => {
      const cells = row
        .map((cell, colIndex) => {
          const ref = cellRef(colIndex, rowIndex + 1);
          return `<c r="${ref}" t="inlineStr"><is><t>${escapeXML(cell)}</t></is></c>`;
        })
        .join("");
      return `<row r="${rowIndex + 1}">${cells}</row>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${rowXML}</sheetData></worksheet>`;
}

function workbookFiles(rows) {
  return {
    "[Content_Types].xml":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>',
    "_rels/.rels":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
    "xl/workbook.xml":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="分组结果" sheetId="1" r:id="rId1"/></sheets></workbook>',
    "xl/_rels/workbook.xml.rels":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>',
    "xl/worksheets/sheet1.xml": sheetXML(rows),
  };
}

const crcTable = Array.from({ length: 256 }, (_, index) => {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  return value >>> 0;
});

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function u16(value) {
  const bytes = new Uint8Array(2);
  new DataView(bytes.buffer).setUint16(0, value, true);
  return bytes;
}

function u32(value) {
  const bytes = new Uint8Array(4);
  new DataView(bytes.buffer).setUint32(0, value, true);
  return bytes;
}

function concatBytes(chunks) {
  const total = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const output = new Uint8Array(total);
  let offset = 0;
  chunks.forEach((chunk) => {
    output.set(chunk, offset);
    offset += chunk.length;
  });
  return output;
}

function createZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const modTime = 0;
  const modDate = 0x5b7a;

  Object.entries(files).forEach(([name, content]) => {
    const nameBytes = encoder.encode(name);
    const data = encoder.encode(content);
    const crc = crc32(data);
    const localHeader = concatBytes([
      u32(0x04034b50),
      u16(20),
      u16(0x0800),
      u16(0),
      u16(modTime),
      u16(modDate),
      u32(crc),
      u32(data.length),
      u32(data.length),
      u16(nameBytes.length),
      u16(0),
      nameBytes,
    ]);

    localParts.push(localHeader, data);

    const centralHeader = concatBytes([
      u32(0x02014b50),
      u16(20),
      u16(20),
      u16(0x0800),
      u16(0),
      u16(modTime),
      u16(modDate),
      u32(crc),
      u32(data.length),
      u32(data.length),
      u16(nameBytes.length),
      u16(0),
      u16(0),
      u16(0),
      u16(0),
      u32(0),
      u32(offset),
      nameBytes,
    ]);

    centralParts.push(centralHeader);
    offset += localHeader.length + data.length;
  });

  const centralDirectory = concatBytes(centralParts);
  const endRecord = concatBytes([
    u32(0x06054b50),
    u16(0),
    u16(0),
    u16(Object.keys(files).length),
    u16(Object.keys(files).length),
    u32(centralDirectory.length),
    u32(offset),
    u16(0),
  ]);

  return concatBytes([...localParts, centralDirectory, endRecord]);
}

function exportExcel() {
  if (state.assignments.length < slots.length) return;

  const rows = [
    ["组别", "席位", "国旗", "球队", "玩家"],
    ...rowsForExport().map((row) => [
      row.group,
      row.position,
      row.flag,
      row.team,
      row.player,
    ]),
  ];
  const zipBytes = createZip(workbookFiles(rows));
  const blob = new Blob([zipBytes], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  downloadBlob(blob, "企鹅世界杯Fantasy分组结果.xlsx");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

els.startBtn.addEventListener("click", startDraw);
els.releaseBtn.addEventListener("click", releaseBall);
els.autoBtn.addEventListener("click", completeRandomGroups);
els.resetBtn.addEventListener("click", resetDraw);
els.posterBtn.addEventListener("click", drawPoster);
els.excelBtn.addEventListener("click", exportExcel);
els.closeModalBtn.addEventListener("click", closeResultModal);
els.resultModal.addEventListener("click", (event) => {
  if (event.target === els.resultModal) closeResultModal();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeResultModal();
});

restoreState();
render();
