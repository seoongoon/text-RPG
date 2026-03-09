// 게임 시작 버튼 요소 가져오기
const startBtn = document.getElementById("startBtn");

// 시작 화면 영역 가져오기
const startScreen = document.getElementById("start-screen");

// 게임 화면 영역 가져오기
const gameScreen = document.getElementById("game-screen");


// 게임 시작 버튼 클릭 이벤트
startBtn.addEventListener("click", function(){

    // 시작 화면 숨기기
    startScreen.style.display = "none";

    // 게임 화면 보이기
    gameScreen.style.display = "block";

    // 배경 이미지를 마을 이미지로 변경
    // images 폴더 안에 있는 village.png 사용
    document.body.style.backgroundImage = "url('images/village.png')";

});