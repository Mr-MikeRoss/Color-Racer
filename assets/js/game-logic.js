const countPlayer1 = 0;
const countPlayer2 = 0;
const player1Time = document.getElementById("player1-time");
const player2Time = document.getElementById("player2-time");
const startGame = document.getElementById("start-button");
const scoreGame = document.getElementById("save-score");
const speed = 10;
let player1Interval;
let player2Interval;
let position1 = 0;
let position2 = 0;
let keyIsPressed = false;
let count1 = 0;
let count2 = 0;
// win condition is count = 106 ~ 127;
let playGame = true;
//  --------------------- global var box ----------------------------------------

// Move car functions

function moveCar1() {
  position1 += speed;
  playerOneCar.style.left = position1 + "px";
  count1++;
  console.log(count1);
}

function moveCar2() {
  position2 += speed;
  playerTwoCar.style.left = position2 + "px";
  count2++;
  console.log(count2);
}

// timer function
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

// gameLoop
function gameLoop() {
  // -------------game variables------------------------

  // keyPress event listeners
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

  // timer function event listener.
  if (count1 === 126) {
    clearInterval(player1Interval);
    //pause timer, say player 1 won
  } else if (count2 === 126) {
    clearInterval(player2Interval);
    //pause timer, say player 2 won
  } else if (count1 === 126 && count2 === 126) {
    playGame = false;
  }
}

// game event listener.
startGame.addEventListener("click", function () {
  timeHandler();
  gameLoop();
}); // when start is clicked the game loop starts
