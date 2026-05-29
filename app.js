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

const tierColors = ["#f6cf58", "#6fbea4", "#8fb7ff", "#ff9e8f"];
const tierDarkColors = ["#e5b836", "#47a983", "#6b96dc", "#e47f70"];

function makePlayers(names) {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    tier: Math.floor(index / 12) + 1,
  }));
}

const regionConfigs = [
  {
    key: "arctic",
    label: "北极赛区",
    players: makePlayers([
      "francistasy",
      "DDDD",
      "andy",
      "大猫与火炮",
      "AVG",
      "511",
      "Enzo Wang",
      "LAD",
      "丢屁",
      "antonius",
      "LeoDing",
      "Kimi",
      "ZHIYU",
      "nbw",
      "海笛",
      "GreyIi",
      "糕灬福特",
      "青森山田",
      "Yemon",
      "Loki7_7",
      "小火龙",
      "Steven",
      "GaelClichy",
      "嘉进®平安",
      "东马",
      "Nagimenz",
      "英国人画像",
      "fitz",
      "Acidboy",
      "Verydisco",
      "拙言",
      "Dannyyyyy",
      "Shuo",
      "蒂亚鸽",
      "比尔",
      "Kevin",
      "Clark Sim",
      "狗蛋kk",
      "乳酸君",
      "香香软软的big b",
      "星喵",
      "联曼",
      "Qunny",
      "珍惜眼前人❤️",
      "Havertz scores again",
      "Maxlee",
      "鸡米",
      "TK City",
    ]),
  },
  {
    key: "antarctic",
    label: "南极赛区",
    players: makePlayers([
      "笨笨是大骗子",
      "Dr. Mongodmundsson",
      "小新Jerry",
      "座山雕",
      "Conan Joe",
      "128",
      "Summerfan",
      "轻狂",
      "喝呀",
      "remember",
      "zcnai",
      "小绿",
      "Bad K",
      "Ethan",
      "橘",
      "BA",
      "ocean欧巡",
      "进藤光",
      "第一边锋萨默维尔",
      "halfbrain",
      "蒂兰基尔尼",
      "软糖",
      "kusuri",
      "Baros15",
      "Pluto",
      "Jackiegu",
      "企鹅",
      "Team Name",
      "垫底超人00",
      "Chelsea mata",
      "SEAWUWU",
      "沙洛系咁队",
      "Gladiator Mississippi",
      "fpl中搁浅的哲学家",
      "Eva",
      "diogo",
      "AnonTokyo",
      "可乐",
      "紫葱酱",
      "面条",
      "Yeehc111",
      "鬼嗨",
      "patience",
      "Micky VDV",
      "开半天猪耳朵",
      "SSU-FAIAA",
      "X Team",
      "镜落",
    ]),
  },
];

const slots = Array.from({ length: 4 }, (_, positionIndex) =>
  groups.map((group) => ({
    group: group.letter,
    position: positionIndex + 1,
    team: group.teams[positionIndex],
  }))
).flat();

const storageKey = "world-cup-player-draw-mvp";
const releaseDuration = 2300;
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

const scheduleMatches = [
  { no: 1, date: "06.11", time: "19:00", group: "A", home: "A1", away: "A2", city: "Mexico City" },
  { no: 2, date: "06.12", time: "02:00", group: "A", home: "A3", away: "A4", city: "Guadalajara" },
  { no: 25, date: "06.18", time: "16:00", group: "A", home: "A4", away: "A2", city: "Atlanta" },
  { no: 28, date: "06.19", time: "01:00", group: "A", home: "A1", away: "A3", city: "Guadalajara" },
  { no: 53, date: "06.25", time: "01:00", group: "A", home: "A4", away: "A1", city: "Mexico City" },
  { no: 54, date: "06.25", time: "01:00", group: "A", home: "A2", away: "A3", city: "Monterrey" },
  { no: 3, date: "06.12", time: "19:00", group: "B", home: "B1", away: "B2", city: "Toronto" },
  { no: 8, date: "06.13", time: "19:00", group: "B", home: "B3", away: "B4", city: "San Francisco Bay Area" },
  { no: 26, date: "06.18", time: "19:00", group: "B", home: "B4", away: "B2", city: "Los Angeles" },
  { no: 27, date: "06.18", time: "22:00", group: "B", home: "B1", away: "B3", city: "Vancouver" },
  { no: 51, date: "06.24", time: "19:00", group: "B", home: "B4", away: "B1", city: "Vancouver" },
  { no: 52, date: "06.24", time: "19:00", group: "B", home: "B2", away: "B3", city: "Seattle" },
  { no: 7, date: "06.13", time: "22:00", group: "C", home: "C1", away: "C2", city: "New York/New Jersey" },
  { no: 5, date: "06.14", time: "01:00", group: "C", home: "C3", away: "C4", city: "Boston" },
  { no: 30, date: "06.19", time: "22:00", group: "C", home: "C4", away: "C2", city: "Boston" },
  { no: 29, date: "06.20", time: "00:30", group: "C", home: "C1", away: "C3", city: "Philadelphia" },
  { no: 49, date: "06.24", time: "22:00", group: "C", home: "C4", away: "C1", city: "Miami" },
  { no: 50, date: "06.24", time: "22:00", group: "C", home: "C2", away: "C3", city: "Atlanta" },
  { no: 4, date: "06.13", time: "01:00", group: "D", home: "D1", away: "D2", city: "Los Angeles" },
  { no: 6, date: "06.14", time: "04:00", group: "D", home: "D3", away: "D4", city: "Vancouver" },
  { no: 32, date: "06.19", time: "19:00", group: "D", home: "D1", away: "D3", city: "Seattle" },
  { no: 31, date: "06.20", time: "03:00", group: "D", home: "D4", away: "D2", city: "San Francisco Bay Area" },
  { no: 59, date: "06.26", time: "02:00", group: "D", home: "D4", away: "D1", city: "Los Angeles" },
  { no: 60, date: "06.26", time: "02:00", group: "D", home: "D2", away: "D3", city: "San Francisco Bay Area" },
  { no: 10, date: "06.14", time: "17:00", group: "E", home: "E1", away: "E2", city: "Houston" },
  { no: 9, date: "06.14", time: "23:00", group: "E", home: "E3", away: "E4", city: "Philadelphia" },
  { no: 33, date: "06.20", time: "20:00", group: "E", home: "E1", away: "E3", city: "Toronto" },
  { no: 34, date: "06.21", time: "00:00", group: "E", home: "E4", away: "E2", city: "Kansas City" },
  { no: 55, date: "06.25", time: "20:00", group: "E", home: "E2", away: "E3", city: "Philadelphia" },
  { no: 56, date: "06.25", time: "20:00", group: "E", home: "E4", away: "E1", city: "New York/New Jersey" },
  { no: 11, date: "06.14", time: "20:00", group: "F", home: "F1", away: "F2", city: "Dallas" },
  { no: 12, date: "06.15", time: "02:00", group: "F", home: "F3", away: "F4", city: "Monterrey" },
  { no: 35, date: "06.20", time: "17:00", group: "F", home: "F1", away: "F3", city: "Houston" },
  { no: 36, date: "06.21", time: "04:00", group: "F", home: "F4", away: "F2", city: "Monterrey" },
  { no: 57, date: "06.25", time: "23:00", group: "F", home: "F2", away: "F3", city: "Dallas" },
  { no: 58, date: "06.25", time: "23:00", group: "F", home: "F4", away: "F1", city: "Kansas City" },
  { no: 16, date: "06.15", time: "19:00", group: "G", home: "G1", away: "G2", city: "Seattle" },
  { no: 15, date: "06.16", time: "01:00", group: "G", home: "G3", away: "G4", city: "Los Angeles" },
  { no: 39, date: "06.21", time: "19:00", group: "G", home: "G1", away: "G3", city: "Los Angeles" },
  { no: 40, date: "06.22", time: "01:00", group: "G", home: "G4", away: "G2", city: "Vancouver" },
  { no: 63, date: "06.27", time: "03:00", group: "G", home: "G2", away: "G3", city: "Seattle" },
  { no: 64, date: "06.27", time: "03:00", group: "G", home: "G4", away: "G1", city: "Vancouver" },
  { no: 14, date: "06.15", time: "16:00", group: "H", home: "H1", away: "H2", city: "Atlanta" },
  { no: 13, date: "06.15", time: "22:00", group: "H", home: "H3", away: "H4", city: "Miami" },
  { no: 38, date: "06.21", time: "16:00", group: "H", home: "H1", away: "H3", city: "Atlanta" },
  { no: 37, date: "06.21", time: "22:00", group: "H", home: "H4", away: "H2", city: "Miami" },
  { no: 65, date: "06.27", time: "00:00", group: "H", home: "H2", away: "H3", city: "Houston" },
  { no: 66, date: "06.27", time: "00:00", group: "H", home: "H4", away: "H1", city: "Guadalajara" },
  { no: 17, date: "06.16", time: "19:00", group: "I", home: "I1", away: "I2", city: "New York/New Jersey" },
  { no: 18, date: "06.16", time: "22:00", group: "I", home: "I3", away: "I4", city: "Boston" },
  { no: 42, date: "06.22", time: "21:00", group: "I", home: "I1", away: "I3", city: "Philadelphia" },
  { no: 41, date: "06.23", time: "00:00", group: "I", home: "I4", away: "I2", city: "New York/New Jersey" },
  { no: 61, date: "06.26", time: "19:00", group: "I", home: "I4", away: "I1", city: "Boston" },
  { no: 62, date: "06.26", time: "19:00", group: "I", home: "I2", away: "I3", city: "Toronto" },
  { no: 19, date: "06.17", time: "01:00", group: "J", home: "J1", away: "J2", city: "Kansas City" },
  { no: 20, date: "06.17", time: "04:00", group: "J", home: "J3", away: "J4", city: "San Francisco Bay Area" },
  { no: 43, date: "06.22", time: "17:00", group: "J", home: "J1", away: "J3", city: "Dallas" },
  { no: 44, date: "06.23", time: "03:00", group: "J", home: "J4", away: "J2", city: "San Francisco Bay Area" },
  { no: 69, date: "06.28", time: "02:00", group: "J", home: "J2", away: "J3", city: "Kansas City" },
  { no: 70, date: "06.28", time: "02:00", group: "J", home: "J4", away: "J1", city: "Dallas" },
  { no: 23, date: "06.17", time: "17:00", group: "K", home: "K1", away: "K2", city: "Houston" },
  { no: 24, date: "06.18", time: "02:00", group: "K", home: "K3", away: "K4", city: "Mexico City" },
  { no: 47, date: "06.23", time: "17:00", group: "K", home: "K1", away: "K3", city: "Houston" },
  { no: 48, date: "06.24", time: "02:00", group: "K", home: "K4", away: "K2", city: "Guadalajara" },
  { no: 71, date: "06.27", time: "23:30", group: "K", home: "K4", away: "K1", city: "Miami" },
  { no: 72, date: "06.27", time: "23:30", group: "K", home: "K2", away: "K3", city: "Atlanta" },
  { no: 22, date: "06.17", time: "20:00", group: "L", home: "L1", away: "L2", city: "Dallas" },
  { no: 21, date: "06.17", time: "23:00", group: "L", home: "L3", away: "L4", city: "Toronto" },
  { no: 45, date: "06.23", time: "20:00", group: "L", home: "L1", away: "L3", city: "Boston" },
  { no: 46, date: "06.23", time: "23:00", group: "L", home: "L4", away: "L2", city: "Toronto" },
  { no: 67, date: "06.27", time: "21:00", group: "L", home: "L4", away: "L1", city: "New York/New Jersey" },
  { no: 68, date: "06.27", time: "21:00", group: "L", home: "L2", away: "L3", city: "Philadelphia" },
];

const els = {
  machine: document.querySelector("#machine"),
  machineCanvas: document.querySelector("#machineCanvas"),
  regionSwitch: document.querySelector("#regionSwitch"),
  startBtn: document.querySelector("#startBtn"),
  releaseBtn: document.querySelector("#releaseBtn"),
  autoBtn: document.querySelector("#autoBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  posterBtn: document.querySelector("#posterBtn"),
  schedulePosterBtn: document.querySelector("#schedulePosterBtn"),
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

function createDrawState(regionPlayers) {
  return {
    assignments: [],
    remaining: [...regionPlayers],
    isSpinning: false,
    isReleasing: false,
    modalPending: false,
    modalOpen: false,
    latestSlotKey: null,
  };
}

let activeRegionKey = "arctic";
let players = regionConfigs.find((region) => region.key === activeRegionKey).players;
const regionStates = Object.fromEntries(
  regionConfigs.map((region) => [region.key, createDrawState(region.players)])
);
let state = regionStates[activeRegionKey];

function activeRegion() {
  return regionConfigs.find((region) => region.key === activeRegionKey) || regionConfigs[0];
}

let animationFrame = null;
let releaseTimer = null;
let modalTimer = null;

const machineCtx = els.machineCanvas.getContext("2d");
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
  localStorage.removeItem(storageKey);
}

function saveState() {
  // 默认每次打开页面都是未开始状态，仅保留本次浏览会话内的赛区进度。
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
  const nextSlot = slots[state.assignments.length];
  const currentTier = nextSlot?.position || 1;
  const candidateIndexes = state.remaining
    .map((player, index) => ({ player, index }))
    .filter((item) => item.player.tier === currentTier);
  const source = candidateIndexes.length
    ? candidateIndexes
    : state.remaining.map((player, index) => ({ player, index }));
  const picked = source[Math.floor(Math.random() * source.length)];

  return {
    player: picked.player,
    randomIndex: picked.index,
  };
}

function playerTierColor(player) {
  return tierColors[(player.tier || 1) - 1] || tierColors[0];
}

function playerTierDarkColor(player) {
  return tierDarkColors[(player.tier || 1) - 1] || tierDarkColors[0];
}

function currentMachinePlayers() {
  const nextSlot = slots[state.assignments.length];
  if (!nextSlot) return [];

  return state.remaining.filter((player) => player.tier === nextSlot.position);
}

function renderRegionSwitch() {
  els.regionSwitch.innerHTML = regionConfigs
    .map(
      (region) => `
        <button
          class="region-tab ${region.key === activeRegionKey ? "active" : ""}"
          data-region="${region.key}"
          type="button"
        >
          ${region.label}
        </button>
      `
    )
    .join("");
}

function setActiveRegion(nextKey) {
  if (nextKey === activeRegionKey || !regionStates[nextKey]) return;

  clearTimeout(releaseTimer);
  clearTimeout(modalTimer);
  if (animationFrame) cancelAnimationFrame(animationFrame);
  state.isSpinning = false;
  state.isReleasing = false;
  state.modalPending = false;
  state.modalOpen = false;
  state.latestSlotKey = null;

  activeRegionKey = nextKey;
  players = activeRegion().players;
  state = regionStates[activeRegionKey];
  releaseVisual = null;
  els.resultModal.hidden = true;
  render();
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
  els.playerPool.innerHTML = [1, 2, 3, 4]
    .map((tier) => {
      const tierPlayers = players.filter((player) => player.tier === tier);
      const drawnCount = tierPlayers.filter((player) => !remainingIds.has(player.id)).length;
      const chips = tierPlayers
        .map((player) => {
          const isDrawn = !remainingIds.has(player.id);
          return `
            <span class="pool-chip ${isDrawn ? "drawn" : ""}" style="--tier-color:${playerTierColor(player)}">
              <strong>P${player.id}</strong>
              <span>${escapeHTML(player.name)}</span>
            </span>
          `;
        })
        .join("");

      return `
        <section class="pot-section" style="--tier-color:${tierColors[tier - 1]}">
          <div class="pot-head">
            <strong>POT ${tier}</strong>
            <span>${drawnCount}/12</span>
          </div>
          <div class="pot-grid">${chips}</div>
        </section>
      `;
    })
    .join("");
}

function updateMachineBalls() {
  const activePlayers = currentMachinePlayers();

  machineBalls = activePlayers.map((player, index) => {
    const count = Math.max(activePlayers.length, 1);
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
      size: 26 + (index % 3),
      fill: playerTierColor(player),
      darkFill: playerTierDarkColor(player),
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
  renderRegionSwitch();
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

function drawBall(x, y, size, label, fill = "#fffdf8", alpha = 1, darkFill = null) {
  machineCtx.save();
  machineCtx.globalAlpha = alpha;
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
  ballGradient.addColorStop(1, darkFill || "#dfeee5");
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
    drawBall(ball.x, ball.y, ball.size, ball.player.id, ball.fill, 1, ball.darkFill);
  });
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

function releasePoint(progress) {
  const p = Math.min(Math.max(progress, 0), 1);
  const curveEnd = 0.46;

  if (p <= curveEnd) {
    const t = p / curveEnd;
    const inv = 1 - t;
    const start = { x: 304, y: 402 };
    const control = { x: 306, y: 462 };
    const end = { x: 372, y: 462 };

    return {
      x: inv ** 2 * start.x + 2 * inv * t * control.x + t ** 2 * end.x,
      y: inv ** 2 * start.y + 2 * inv * t * control.y + t ** 2 * end.y,
    };
  }

  const t = (p - curveEnd) / (1 - curveEnd);

  return {
    x: 372 + (602 - 372) * t,
    y: 462,
  };
}

function drawReleaseBall(time) {
  if (!releaseVisual) return;

  const progress = (time - releaseVisual.startedAt) / releaseDuration;
  const eased = Math.min(progress, 1) < 0.55
    ? 2 * Math.min(progress, 1) ** 2
    : 1 - (-2 * Math.min(progress, 1) + 2) ** 2 / 2;
  const point = releasePoint(eased);
  const inPipeAlpha = eased < 0.9 ? 0.34 + eased * 0.32 : 1;
  drawBall(
    point.x,
    point.y,
    releaseVisual.size,
    releaseVisual.player.id,
    releaseVisual.color,
    inPipeAlpha,
    releaseVisual.darkColor
  );
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
  const sourceBall = machineBalls.find((ball) => ball.player.id === player.id);
  releaseVisual = {
    player,
    color: playerTierColor(player),
    darkColor: playerTierDarkColor(player),
    size: sourceBall?.size || 27,
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

  const startIndex = state.assignments.length;
  const remainingPool = [...state.remaining];

  slots.slice(startIndex).forEach((slot) => {
    const candidates = remainingPool
      .map((player, index) => ({ player, index }))
      .filter((item) => item.player.tier === slot.position);
    const source = candidates.length
      ? candidates
      : remainingPool.map((player, index) => ({ player, index }));
    const picked = source[Math.floor(Math.random() * source.length)];

    state.assignments.push({
      player: picked.player,
      slot,
    });
    remainingPool.splice(picked.index, 1);
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

  regionStates[activeRegionKey] = createDrawState(players);
  state = regionStates[activeRegionKey];
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

function groupedExcelRows() {
  const bySlot = assignmentMap();
  const rows = [];
  const merges = [];

  for (let start = 0; start < groups.length; start += 3) {
    const groupSet = groups.slice(start, start + 3);
    const headerRow = rows.length + 1;

    rows.push(
      groupSet.flatMap((group, groupOffset) => {
        const firstCol = groupOffset * 4;
        merges.push(`${cellRef(firstCol, headerRow)}:${cellRef(firstCol + 2, headerRow)}`);
        return [
          { value: `${group.letter}组`, style: 1 },
          { value: "", style: 1 },
          { value: "", style: 1 },
          "",
        ];
      })
    );
    rows.push(
      groupSet.flatMap(() => [
        { value: "席位", style: 2 },
        { value: "球队", style: 2 },
        { value: "玩家", style: 2 },
        "",
      ])
    );

    for (let teamIndex = 0; teamIndex < 4; teamIndex += 1) {
      rows.push(
        groupSet.flatMap((group) => {
          const team = group.teams[teamIndex];
          const slot = { group: group.letter, position: teamIndex + 1, team };
          const assignment = bySlot.get(slotKey(slot));

          return [
            { value: slotKey(slot), style: 3 },
            { value: team.zh, style: 4 },
            { value: assignment ? assignment.player.name : "", style: 5 },
            "",
          ];
        })
      );
    }

    if (start + 3 < groups.length) rows.push([]);
  }

  rows.merges = merges;
  rows.widths = [8, 18, 28, 3];
  return rows;
}

function scheduleExcelRows() {
  const bySlot = assignmentMap();
  const rows = [];
  const merges = [];

  scheduleByGameweek().forEach((section, sectionIndex) => {
    const titleRow = rows.length + 1;
    merges.push(`${cellRef(0, titleRow)}:${cellRef(4, titleRow)}`);
    rows.push([
      { value: `GW${section.gw}`, style: 1 },
      { value: "", style: 1 },
      { value: "", style: 1 },
      { value: "", style: 1 },
      { value: "", style: 1 },
    ]);
    rows.push([
      { value: "组别", style: 2 },
      { value: "场次", style: 2 },
      { value: "主队玩家", style: 2 },
      { value: "VS", style: 2 },
      { value: "客队玩家", style: 2 },
    ]);
    section.matches.forEach((match) => {
      rows.push([
        { value: `${match.group}组`, style: 3 },
        { value: `M${String(match.no).padStart(2, "0")}`, style: 4 },
        { value: playerNameForSlot(bySlot, match.home), style: 4 },
        { value: "VS", style: 3 },
        { value: playerNameForSlot(bySlot, match.away), style: 4 },
      ]);
    });

    if (sectionIndex < 2) rows.push([]);
  });

  rows.merges = merges;
  rows.widths = [8, 10, 28, 8, 28];
  return rows;
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

function fittedText(ctx, text, x, y, maxWidth, options = {}) {
  const {
    fontSize = 28,
    minFontSize = 18,
    weight = 900,
    color = "#232323",
    align = "left",
    family = "Microsoft YaHei, PingFang SC, sans-serif",
  } = options;
  let size = fontSize;
  let content = String(text || "");

  ctx.save();
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillStyle = color;

  while (size > minFontSize) {
    ctx.font = `${weight} ${size}px ${family}`;
    if (ctx.measureText(content).width <= maxWidth) break;
    size -= 1;
  }

  ctx.font = `${weight} ${size}px ${family}`;
  while (ctx.measureText(content).width > maxWidth && content.length > 1) {
    content = `${content.slice(0, -2)}…`;
  }

  ctx.fillText(content, x, y);
  ctx.restore();
}

const posterFlagCache = new Map();

function loadPosterFlag(team) {
  const url = flagUrl(team);
  if (posterFlagCache.has(url)) return posterFlagCache.get(url);

  const promise = new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = url;
  });

  posterFlagCache.set(url, promise);
  return promise;
}

function drawPosterFlag(ctx, image, team, x, y, width, height, strokeColor = "#26302b") {
  ctx.save();
  roundRect(ctx, x, y, width, height, 4);
  ctx.clip();

  if (image) {
    const imageRatio = image.width / image.height;
    const boxRatio = width / height;
    let drawWidth = width;
    let drawHeight = height;
    let drawX = x;
    let drawY = y;

    if (imageRatio > boxRatio) {
      drawWidth = height * imageRatio;
      drawX = x - (drawWidth - width) / 2;
    } else {
      drawHeight = width / imageRatio;
      drawY = y - (drawHeight - height) / 2;
    }

    ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  } else {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, width, height);
    fittedText(ctx, team.flag, x + width / 2, y + height / 2, width - 8, {
      align: "center",
      fontSize: 28,
      weight: 500,
      family: "Segoe UI Emoji, Apple Color Emoji, sans-serif",
    });
  }

  ctx.restore();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = strokeColor;
  roundRect(ctx, x, y, width, height, 4);
  ctx.stroke();
}

function posterAccent(index) {
  return ["#e63a2e", "#08745b", "#2454d9", "#f4c84f"][index % 4];
}

function drawPosterBackdrop(ctx, width, height, title, subtitle) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#07162f");
  gradient.addColorStop(0.58, "#08233d");
  gradient.addColorStop(1, "#061b2d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  const vignette = ctx.createRadialGradient(width / 2, 520, 90, width / 2, height / 2, 1400);
  vignette.addColorStop(0, "rgba(255, 244, 216, 0.10)");
  vignette.addColorStop(0.55, "rgba(255, 244, 216, 0.02)");
  vignette.addColorStop(1, "rgba(0, 0, 0, 0.24)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.08;
  ctx.strokeStyle = "#fff4d8";
  ctx.lineWidth = 2;
  for (let x = -height; x < width; x += 86) {
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(x + height, 0);
    ctx.stroke();
  }
  ctx.restore();

  ctx.fillStyle = "rgba(255, 244, 216, 0.04)";
  ctx.font = "950 440px Arial Black, Impact, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("2026", width / 2, 392);

  ctx.strokeStyle = "rgba(244, 200, 79, 0.62)";
  ctx.lineWidth = 4;
  roundRect(ctx, 58, 58, width - 116, height - 116, 34);
  ctx.stroke();

  ctx.fillStyle = "#fff4d8";
  ctx.textBaseline = "alphabetic";
  ctx.font = "950 82px Arial Black, Microsoft YaHei, PingFang SC, sans-serif";
  ctx.fillText(title, width / 2, 160);
  ctx.fillStyle = "#f4c84f";
  ctx.font = "900 28px Arial, Microsoft YaHei, sans-serif";
  ctx.fillText(subtitle, width / 2, 212);
}

function playerNameForSlot(bySlot, key) {
  return bySlot.get(key)?.player.name || key;
}

function matchGameweek(match) {
  const homePosition = Number(match.home.slice(1));
  const awayPosition = Number(match.away.slice(1));
  const pair = [homePosition, awayPosition].sort((a, b) => a - b).join("-");

  if (pair === "1-2" || pair === "3-4") return 1;
  if (pair === "1-3" || pair === "2-4") return 2;
  return 3;
}

function scheduleByGameweek() {
  return [1, 2, 3].map((gw) => ({
    gw,
    matches: scheduleMatches
      .filter((match) => matchGameweek(match) === gw)
      .sort((a, b) => a.group.localeCompare(b.group) || a.no - b.no),
  }));
}

async function drawPoster() {
  if (state.assignments.length < slots.length) return;

  const flagEntries = await Promise.all(
    groups.flatMap((group) =>
      group.teams.map(async (team) => [team.code, await loadPosterFlag(team)])
    )
  );
  const flagImages = new Map(flagEntries);
  const canvas = document.createElement("canvas");
  canvas.width = 1800;
  canvas.height = 2400;
  const ctx = canvas.getContext("2d");
  const bySlot = assignmentMap();

  drawPosterBackdrop(
    ctx,
    canvas.width,
    canvas.height,
    `企鹅世界杯Fantasy${activeRegion().label}分组结果`,
    "FANTASY GROUP DRAW RESULTS"
  );

  const marginX = 110;
  const top = 315;
  const bottom = 95;
  const gapX = 28;
  const gapY = 30;
  const cardW = (canvas.width - marginX * 2 - gapX * 2) / 3;
  const cardH = (canvas.height - top - bottom - gapY * 3) / 4;
  const headerH = 66;
  const cardPad = 20;
  const rowGap = 11;
  const rowH = (cardH - headerH - cardPad * 2 - rowGap * 3) / 4;

  groups.forEach((group, groupIndex) => {
    const col = groupIndex % 3;
    const row = Math.floor(groupIndex / 3);
    const x = marginX + col * (cardW + gapX);
    const y = top + row * (cardH + gapY);

    ctx.save();
    ctx.fillStyle = "rgba(255, 244, 216, 0.08)";
    roundRect(ctx, x, y, cardW, cardH, 20);
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(255, 244, 216, 0.82)";
    ctx.stroke();

    ctx.fillStyle = posterAccent(groupIndex);
    roundRect(ctx, x, y, cardW, headerH, 18);
    ctx.fill();
    fittedText(ctx, `${group.letter}组`, x + 28, y + 44, cardW - 56, {
      fontSize: 42,
      minFontSize: 34,
      color: groupIndex % 4 === 3 ? "#081b3a" : "#fff4d8",
    });

    group.teams.forEach((team, teamIndex) => {
      const slot = { group: group.letter, position: teamIndex + 1, team };
      const assignment = bySlot.get(slotKey(slot));
      const rowX = x + cardPad;
      const rowY = y + headerH + cardPad + teamIndex * (rowH + rowGap);
      const centerY = rowY + rowH / 2;

      ctx.fillStyle = teamIndex % 2 === 0 ? "rgba(255, 244, 216, 0.16)" : "rgba(255, 244, 216, 0.08)";
      roundRect(ctx, rowX, rowY, cardW - cardPad * 2, rowH, 12);
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255, 244, 216, 0.23)";
      ctx.stroke();

      fittedText(ctx, slotKey(slot), rowX + 20, centerY, 52, {
        fontSize: 28,
        color: "#f4c84f",
      });
      drawPosterFlag(ctx, flagImages.get(team.code), team, rowX + 70, centerY - 18, 50, 36, "#fff4d8");
      fittedText(ctx, team.zh, rowX + 140, centerY, 118, {
        fontSize: 29,
        minFontSize: 21,
        color: "#fff4d8",
      });
      fittedText(ctx, assignment?.player.name || "", rowX + cardW - cardPad * 2 - 14, centerY, 190, {
        fontSize: 27,
        minFontSize: 18,
        color: "#f4c84f",
        align: "right",
      });
    });

    ctx.restore();
  });

  canvas.toBlob((blob) => {
    if (!blob) return;
    downloadBlob(blob, `企鹅世界杯Fantasy${activeRegion().label}分组结果.png`);
  }, "image/png");
}

function drawSchedulePoster() {
  if (state.assignments.length < slots.length) return;

  const canvas = document.createElement("canvas");
  canvas.width = 1800;
  canvas.height = 2400;
  const ctx = canvas.getContext("2d");
  const bySlot = assignmentMap();

  drawPosterBackdrop(
    ctx,
    canvas.width,
    canvas.height,
    `企鹅世界杯Fantasy${activeRegion().label}赛程`,
    "GROUP STAGE PLAYER FIXTURES"
  );

  const marginX = 100;
  const top = 310;
  const bottom = 90;
  const gapY = 28;
  const bandW = canvas.width - marginX * 2;
  const bandH = (canvas.height - top - bottom - gapY * 2) / 3;
  const headerH = 64;
  const bandPad = 18;
  const colGap = 18;
  const rowGap = 8;
  const colW = (bandW - bandPad * 2 - colGap * 2) / 3;
  const rowH = (bandH - headerH - bandPad * 2 - rowGap * 7) / 8;

  scheduleByGameweek().forEach((section, sectionIndex) => {
    const x = marginX;
    const y = top + sectionIndex * (bandH + gapY);
    const accent = posterAccent(sectionIndex);

    ctx.save();
    ctx.fillStyle = "rgba(255, 244, 216, 0.08)";
    roundRect(ctx, x, y, bandW, bandH, 18);
    ctx.fill();
    ctx.lineWidth = 3.6;
    ctx.strokeStyle = "rgba(255, 244, 216, 0.78)";
    ctx.stroke();

    ctx.fillStyle = accent;
    roundRect(ctx, x, y, bandW, headerH, 16);
    ctx.fill();
    fittedText(ctx, `GW${section.gw}`, x + 28, y + 40, 110, {
      fontSize: 42,
      minFontSize: 34,
      color: "#fff4d8",
    });
    fittedText(ctx, "小组赛轮次", x + 150, y + 40, bandW - 180, {
      fontSize: 26,
      minFontSize: 20,
      color: "#fff4d8",
    });

    section.matches.forEach((match, matchIndex) => {
      const col = Math.floor(matchIndex / 8);
      const row = matchIndex % 8;
      const rowX = x + bandPad + col * (colW + colGap);
      const rowY = y + headerH + bandPad + row * (rowH + rowGap);

      ctx.fillStyle = matchIndex % 2 === 0 ? "rgba(255, 244, 216, 0.15)" : "rgba(255, 244, 216, 0.08)";
      roundRect(ctx, rowX, rowY, colW, rowH, 10);
      ctx.fill();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = "rgba(255, 244, 216, 0.22)";
      ctx.stroke();

      fittedText(ctx, `${match.group}组  M${String(match.no).padStart(2, "0")}`, rowX + 14, rowY + 17, 105, {
        fontSize: 17,
        minFontSize: 13,
        color: "#f4c84f",
      });
      fittedText(ctx, playerNameForSlot(bySlot, match.home), rowX + 14, rowY + rowH - 20, 174, {
        fontSize: 21,
        minFontSize: 14,
        color: "#fff4d8",
      });
      fittedText(ctx, "VS", rowX + colW / 2, rowY + rowH - 20, 42, {
        fontSize: 18,
        minFontSize: 15,
        color: accent,
        align: "center",
      });
      fittedText(ctx, playerNameForSlot(bySlot, match.away), rowX + colW - 14, rowY + rowH - 20, 174, {
        fontSize: 21,
        minFontSize: 14,
        color: "#fff4d8",
        align: "right",
      });
    });

    ctx.restore();
  });

  canvas.toBlob((blob) => {
    if (!blob) return;
    downloadBlob(blob, `企鹅世界杯Fantasy${activeRegion().label}赛程.png`);
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
  const widths = rows.widths || [8, 18, 28, 3];
  const columnCount = Math.max(
    widths.length,
    ...rows.map((row) => (Array.isArray(row) ? row.length : 0))
  );
  const colXML = Array.from({ length: columnCount }, (_, index) => {
    const width = widths[index % widths.length];
    return `<col min="${index + 1}" max="${index + 1}" width="${width}" customWidth="1"/>`;
  }).join("");
  const rowXML = rows
    .map((row, rowIndex) => {
      const cells = row
        .map((cell, colIndex) => {
          const ref = cellRef(colIndex, rowIndex + 1);
          const value = cell && typeof cell === "object" ? cell.value : cell;
          const style = cell && typeof cell === "object" ? ` s="${cell.style || 0}"` : "";
          return `<c r="${ref}"${style} t="inlineStr"><is><t>${escapeXML(value)}</t></is></c>`;
        })
        .join("");
      return `<row r="${rowIndex + 1}">${cells}</row>`;
    })
    .join("");
  const merges = rows.merges || [];
  const mergeXML = merges.length
    ? `<mergeCells count="${merges.length}">${merges
        .map((ref) => `<mergeCell ref="${ref}"/>`)
        .join("")}</mergeCells>`
    : "";

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols>${colXML}</cols><sheetData>${rowXML}</sheetData>${mergeXML}</worksheet>`;
}

function stylesXML() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="5"><font><sz val="11"/><name val="Microsoft YaHei"/></font><font><b/><sz val="11"/><name val="Microsoft YaHei"/></font><font><b/><sz val="13"/><color rgb="FFFFFFFF"/><name val="Microsoft YaHei"/></font><font><b/><sz val="11"/><color rgb="FF247760"/><name val="Microsoft YaHei"/></font><font><b/><sz val="11"/><color rgb="FFEF725F"/><name val="Microsoft YaHei"/></font></fonts><fills count="5"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF247760"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE4F4EA"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFFFFF"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color rgb="FF26302B"/></left><right style="thin"><color rgb="FF26302B"/></right><top style="thin"><color rgb="FF26302B"/></top><bottom style="thin"><color rgb="FF26302B"/></bottom><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="6"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf><xf numFmtId="0" fontId="1" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="3" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf><xf numFmtId="0" fontId="4" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`;
}

function workbookFiles(sheets) {
  const workbookSheets = Array.isArray(sheets) && sheets.every((sheet) => sheet && sheet.rows)
    ? sheets
    : [{ name: "分组结果", rows: sheets }];
  const sheetOverrides = workbookSheets
    .map(
      (_, index) =>
        `<Override PartName="/xl/worksheets/sheet${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`
    )
    .join("");
  const sheetList = workbookSheets
    .map(
      (sheet, index) =>
        `<sheet name="${escapeXML(sheet.name)}" sheetId="${index + 1}" r:id="rId${index + 1}"/>`
    )
    .join("");
  const sheetRelationships = workbookSheets
    .map(
      (_, index) =>
        `<Relationship Id="rId${index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${index + 1}.xml"/>`
    )
    .join("");
  const files = {
    "[Content_Types].xml":
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>${sheetOverrides}<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`,
    "_rels/.rels":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
    "xl/workbook.xml":
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${sheetList}</sheets></workbook>`,
    "xl/_rels/workbook.xml.rels":
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sheetRelationships}<Relationship Id="rId${workbookSheets.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`,
    "xl/styles.xml": stylesXML(),
  };

  workbookSheets.forEach((sheet, index) => {
    files[`xl/worksheets/sheet${index + 1}.xml`] = sheetXML(sheet.rows);
  });

  return files;
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

  const zipBytes = createZip(
    workbookFiles([
      { name: "分组结果", rows: groupedExcelRows() },
      { name: "赛程", rows: scheduleExcelRows() },
    ])
  );
  const blob = new Blob([zipBytes], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  downloadBlob(blob, `企鹅世界杯Fantasy${activeRegion().label}分组结果.xlsx`);
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
els.schedulePosterBtn.addEventListener("click", drawSchedulePoster);
els.excelBtn.addEventListener("click", exportExcel);
els.regionSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-region]");
  if (!button) return;
  setActiveRegion(button.dataset.region);
});
els.closeModalBtn.addEventListener("click", closeResultModal);
els.resultModal.addEventListener("click", (event) => {
  if (event.target === els.resultModal) closeResultModal();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeResultModal();
});

restoreState();
render();
