// 시작 버튼 및 화면 요소
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");

// 플레이어 상태
const player = {
  name: "김성준",
  rank: "E급 헌터",
  hp: 100,
  atk: 10,
  energy: 0,
  archiveUnlocked: false
};

// 스토리 데이터
const story = {
  start: {
    text:
      "200년 전, 아비스 게이트의 출현 이후 세계는 완전히 바뀌었다.\n\n몬스터가 쏟아져 나오고, 그에 맞서는 헌터라는 존재가 등장했다.\n\n당신의 이름은 김성준.\n재능도, 배경도, 등급도 보잘것없는 E급 헌터다.\n오늘도 생계를 위해 소규모 게이트 탐사 임무에 참여했다.",
    choices: [
      { text: "어두운 통로 안쪽으로 이동한다", next: "gateDepth" },
      { text: "파티원들과 주변을 먼저 살핀다", next: "checkParty" }
    ],
    background: "images/gate.png"
  },

  checkParty: {
    text:
      "파티원들의 표정은 좋지 않다.\n선두에 선 강태민은 노골적으로 짜증을 내고 있었고, 최윤서는 불안한 눈빛으로 주변을 살폈다.\n지원 담당 박도현은 보수를 생각하면 이 정도 위험은 감수해야 한다며 대충 상황을 정리했다.\n\n잠시 숨을 고른 뒤, 당신은 다시 어두운 통로 쪽으로 발걸음을 옮긴다.",
    choices: [
      { text: "통로 안으로 들어간다", next: "gateDepth" }
    ],
    background: "images/gate.png"
  },

  gateDepth: {
    text:
      "게이트 깊숙한 곳으로 들어가자, 일반적인 던전에서는 느껴지지 않던 기묘한 진동이 발끝으로 전해졌다.\n\n벽면 한쪽에는 거대한 문양이 새겨진 정체불명의 구조물이 서 있었다.\n그것은 마치 오래전부터 당신을 기다리고 있었던 것처럼 희미한 빛을 내뿜고 있었다.",
    choices: [
      { text: "구조물을 조사한다", next: "investigate" },
      { text: "위험을 느끼고 뒤로 물러난다", next: "retreat" }
    ],
    background: "images/gate.png"
  },

  retreat: {
    text:
      "본능이 경고를 보낸다.\n이건 평범한 게이트 유물이 아니다.\n당신은 뒤로 물러나려 하지만, 구조물에서 뿜어져 나온 빛이 순식간에 시야를 뒤덮는다.\n\n도망치기엔 이미 늦었다.",
    choices: [
      { text: "빛을 견디며 눈을 뜬다", next: "systemBoot" }
    ],
    background: "images/gate.png"
  },

  investigate: {
    text:
      "구조물 표면에 손을 대는 순간, 차가운 감각이 팔을 타고 전신으로 퍼져 나갔다.\n\n귀 안쪽에서 기계음과도 같은 목소리가 울린다.\n[접속 대상 확인]\n[적합성 판정 중]\n[기록 매개체와 동기화 시작]",
    choices: [
      { text: "정체를 확인한다", next: "systemBoot" }
    ],
    background: "images/gate.png"
  },

  systemBoot: {
    text:
      "눈앞에 푸른 빛의 문자들이 떠오른다.\n\n[아스트라 시스템 활성화]\n[개체명: 김성준]\n[등급: E급 헌터]\n[동기화 성공]\n\n낯선 정보들이 머릿속으로 밀려든다.\n이 구조물은 단순한 유적이 아니다.\n차원을 연결하는 시험 구조물, 아스트라 타워와 이어진 핵심 장치였다.",
    choices: [
      { text: "시스템 메시지를 더 확인한다", next: "archiveInfo" },
      { text: "주변 상황을 파악한다", next: "forcedTransfer" }
    ],
    background: "images/system.png"
  },

  archiveInfo: {
    text:
      "[고유 권한 확인]\n[능력명: 아카이브 오브 아스트라]\n\n능력 기록\n능력 복제\n능력 흡수\n능력 조합\n\n설명을 전부 이해할 수는 없지만, 당신은 직감한다.\n이 힘이 자신의 인생을 완전히 바꿔 놓을 수도 있다는 것을.",
    choices: [
      { text: "손을 뻗어 시스템 창을 건드린다", next: "forcedTransfer" }
    ],
    background: "images/system.png"
  },

  forcedTransfer: {
    text:
      "지면이 무너지는 듯한 감각과 함께 시야가 뒤틀린다.\n멀리서 누군가의 목소리가 들린다.\n\n'적합자가 확인되었습니다.'\n'시험을 개시합니다.'\n\n다음 순간, 당신의 몸은 빛 속으로 빨려 들어간다.",
    choices: [
      { text: "정신을 붙잡는다", next: "towerEntrance" }
    ],
    background: "images/system.png"
  },

  towerEntrance: {
    text:
      "눈을 뜨자, 낡고 거대한 홀 중앙에 홀로 서 있었다.\n천장은 보이지 않을 만큼 높았고, 벽면에는 고대 문양과 함께 알 수 없는 장치들이 박혀 있었다.\n\n머릿속에서 다시 시스템 음성이 울린다.\n[아스트라 타워 1층]\n[생존을 증명하라]",
    choices: [
      { text: "주변을 탐색한다", next: "towerHall" },
      { text: "상태를 점검한다", next: "statusCheck" }
    ],
    background: "images/tower.png"
  },

  statusCheck: {
    text:
      `이름: ${player.name}\n등급: ${player.rank}\nHP: ${player.hp}\n공격력: ${player.atk}\n아스트라 에너지: ${player.energy}\n\n낯선 공간이지만 몸 상태는 멀쩡하다.\n다만, 시스템이 눈앞에 떠 있다는 사실만으로도 이곳이 현실과는 다른 장소임을 알 수 있다.`,
    choices: [
      { text: "주변을 탐색한다", next: "towerHall" }
    ],
    background: "images/tower.png"
  },

  towerHall: {
    text:
      "홀 정면에는 위층으로 이어지는 거대한 문이 닫혀 있었고, 좌측에는 부서진 석상들이 늘어서 있었다.\n우측 벽면에는 희미하게 빛나는 결정체가 박혀 있었다.\n\n어딘가에서 낮은 울음소리가 들려온다.\n1층의 시험은 이미 시작된 듯하다.",
    choices: [
      { text: "빛나는 결정체를 조사한다", next: "crystal" },
      { text: "울음소리가 들리는 쪽으로 이동한다", next: "firstEncounter" }
    ],
    background: "images/tower.png"
  },

  crystal: {
    text:
      "결정체에 손을 대자 아주 미세한 빛이 손끝으로 흘러 들어온다.\n[아스트라 에너지 +10]\n\n몸 안쪽 어딘가가 서서히 깨어나는 느낌이 든다.",
    choices: [
      { text: "홀 중앙으로 돌아간다", next: "towerHallAfterCrystal" }
    ],
    effect: function () {
      if (player.energy === 0) {
        player.energy += 10;
      }
    },
    background: "images/tower.png"
  },

  towerHallAfterCrystal: {
    text:
      `결정체의 에너지를 흡수했다.\n현재 아스트라 에너지: ${player.energy}\n\n홀 안쪽에서는 여전히 정체를 알 수 없는 존재의 기척이 느껴진다.`,
    choices: [
      { text: "울음소리가 들리는 쪽으로 이동한다", next: "firstEncounter" }
    ],
    background: "images/tower.png"
  },

  firstEncounter: {
    text:
      "어두운 통로 끝에서 검은 안개가 뭉치더니 작은 괴물이 모습을 드러냈다.\n붉은 눈동자가 당신을 향해 번뜩인다.\n\n[1층 시험 개체 확인]\n[타락한 하급체]\n\n전투는 아직 준비되지 않았지만, 물러설 곳도 없다.",
    choices: [
      { text: "무기를 고쳐 쥐고 맞선다", next: "prologueEnd" }
    ],
    background: "images/monster.png"
  },

  prologueEnd: {
    text:
      "김성준은 숨을 고르며 자세를 낮췄다.\n\n평범한 E급 헌터였던 자신의 삶은, 이 순간을 경계로 완전히 달라질 것이다.\n\n아스트라 타워 1층.\n진짜 시험이 지금부터 시작된다.\n\n[프롤로그 종료]\n[다음: 1층 전투 파트]",
    choices: [
      { text: "처음부터 다시 보기", next: "start" }
    ],
    background: "images/monster.png"
  }
};

// 시작 버튼 클릭
startBtn.addEventListener("click", function () {
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  showStory("start");
});

// 스토리 출력 함수
function showStory(storyKey) {
  const currentStory = story[storyKey];

  if (!currentStory) {
    storyText.innerText = "스토리 데이터를 찾을 수 없습니다.";
    choicesDiv.innerHTML = "";
    return;
  }

  if (typeof currentStory.effect === "function") {
    currentStory.effect();
  }

  storyText.innerText = currentStory.text;
  choicesDiv.innerHTML = "";

  if (currentStory.background) {
    document.body.style.backgroundImage = `url('${currentStory.background}')`;
  }

  currentStory.choices.forEach(function (choice) {
    const button = document.createElement("button");
    button.innerText = choice.text;

    button.addEventListener("click", function () {
      showStory(choice.next);
    });

    choicesDiv.appendChild(button);
  });
}