const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

startBtn.addEventListener("click", function(){

startScreen.style.display = "none";
gameScreen.style.display = "block";

});