const countPlayer1 = 0;
const countPlayer2 = 0;
const player1Time = document.getElementById("player1-time");
const player2Time = document.getElementById("player2-time");
const startGame = document.getElementById("start-button");
const scoreGame = document.getElementById("save-score");
const winText = document.getElementById("overlay-text");
const speed = 3;
let playGame = true;
let player1Interval;
let player2Interval;
let position1 = 0;
let position2 = 0;
let keyIsPressed = false;
let count1 = 0;
let count2 = 0;
let timeCount1 = 0;
let timeCount2 = 0;
// win condition is count = 21
//  --------------------- global var box ----------------------------------------

// Move car functions only allow movement if respective counts are <= 21.
function moveCar1() {
  if (count1 <= 21) {
    position1 += speed;
    playerOneCar.style.left = position1 + "vw";
    count1++;
  } else {
    clearInterval(player1Interval);
  }
}

function moveCar2() {
  if (count2 <= 21) {
    position2 += speed;
    playerTwoCar.style.left = position2 + "vw";
    count2++;
  } else {
    clearInterval(player2Interval);
  }
}

// timer function updates player times on screen.
function timeHandler() {
  player1Interval = setInterval(function timeInterval() {
    timeCount1++;
    player1Time.textContent = `${timeCount1} sec`;
    player1Time.style = "font-size:xx-large";
  }, 1000);
  player2Interval = setInterval(function timeInterval() {
    timeCount2++;
    player2Time.textContent = `${timeCount2} sec`;
    player2Time.style = "font-size:xx-large";
  }, 1000);
}

// Save time to local storage and update scoreboard
function saveTime() {
  localStorage.setItem("player1-time", timeCount1);
  localStorage.setItem("player2-time", timeCount2);
  updateHighScoreBoard();
}

document.getElementById("save-score").addEventListener("click", saveTime);
//--------------------------------------------------
// Enables event listers while true,
function gameLoop() {
  // keyPress event listeners
  if (playGame) {
    if (count1 < 21 && count2 < 21) {
      document.addEventListener("keydown", function (event) {
        if (event.key === "a" && !keyIsPressed) {
          keyIsPressed = true;
          moveCar1();
        }
      });

      document.addEventListener("keyup", function (event) {
        if (event.key === "a") {
          keyIsPressed = false;
        }
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "l" && !keyIsPressed) {
          keyIsPressed = true;
          moveCar2();
        }
      });

      document.addEventListener("keyup", function (event) {
        if (event.key === "l") {
          keyIsPressed = false;
        }
      });
    }
    //Game over check set at an interval of one second
    const checkGameOver = setInterval(function () {
      if (count1 >= 21 && count2 >= 21) {
        playGame = false;
        clearInterval(checkGameOver);
        console.log("Game over.");

        // Winner banner conditional update
        if (timeCount1 < timeCount2) {
          //player one wins
          winText.textContent = `${playerNames[0]} is the Winner!`;
        } else if (timeCount2 < timeCount1) {
          //player two wins
          winText.textContent = `${playerNames[1]} is the Winner!`;
        }
        winText.style.display = "block"; // make it visable
      }
    }, 1000);
  }
}

//Game event listener.
startGame.setAttribute("style", "z-index: 3;");
startGame.addEventListener("click", function () {
  timeHandler();
  gameLoop();
}); // when start is clicked the game loop starts
