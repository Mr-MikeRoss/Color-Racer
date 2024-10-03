const countPlayer1 = 0;
const countPlayer2 = 0;
const player1Time = document.getElementById("player1-time");
const player2Time = document.getElementById("player2-time");
const startGame = document.getElementById("start-button");
const scoreGame = document.getElementById("save-score");
const speed = 10;
const playGame = true;
let player1Interval;
let player2Interval;
let position1 = 0;
let position2 = 0;
let keyIsPressed = false;
let count1 = 0;
let count2 = 0;
// win condition is count = 126
//  --------------------- global var box ----------------------------------------

// Move car functions only allow movement if respective counts are <= 126.
function moveCar1() {
  if (count1 <= 126) {
    position1 += speed;
    playerOneCar.style.left = position1 + "px";
    count1++;
    console.log(count1);
  } else {
    clearInterval(player1Interval);
  }
}

function moveCar2() {
  if (count2 <= 126) {
    position2 += speed;
    playerTwoCar.style.left = position2 + "px";
    count2++;
    console.log(count2);
  } else {
    clearInterval(player2Interval);
  }
}

// timer function updates player times on screen.
function timeHandler() {
  let timeCount1 = 0;
  player1Interval = setInterval(function timeInterval() {
    timeCount1++;
    console.log(timeCount1);
    player1Time.textContent = timeCount1;
  }, 1000);
  let timeCount2 = 0;
  player2Interval = setInterval(function timeInterval() {
    timeCount2++;
    console.log(timeCount2);
    player2Time.textContent = timeCount2;
  }, 1000);
}

// Enables event listers while true, 
function gameLoop() {
  // keyPress event listeners
  if (playGame) {
    if (count1 < 126 && count2 < 126) {
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
    //Game over condition.
    if (count1 >= 126 && count2 >= 126) {
      playGame = false;
      console.log("Game over.");
    }
  }
}

//Game event listener.
startGame.addEventListener("click", function () {
  timeHandler();
  gameLoop();
}); // when start is clicked the game loop starts
