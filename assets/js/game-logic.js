const gameMusic = new Audio("./assets/sounds/Initial-D.mp3");

// Game control variables
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
// win condition is count = 75
//  --------------------- global var box ----------------------------------------

// Move car functions only allow movement if respective counts are <= 21.
function moveCar1() {
  if (count1 <= 19) {
    position1 += speed;
    playerOneCar.style.left = position1 + "%";
    count1++;
  } else {
    clearInterval(player1Interval);
  }
}

function moveCar2() {
  if (count2 <= 19) {
    position2 += speed;
    playerTwoCar.style.left = position2 + "%";
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
  }, 1000);
  player2Interval = setInterval(function timeInterval() {
    timeCount2++;
    player2Time.textContent = `${timeCount2} sec`;
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
    if (count1 < 19 && count2 < 19) {
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
    // Enable touch events for player 1 and player 2 movement

    // Player 1 touch event (left side of the screen)
    document.addEventListener("touchstart", function (event) {
      // Check if the touch is on the left side of the screen
      // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
      // https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches
      // Client X is a read-only property that returns the X coordinate of the touch point relative to viewport
      //, not including scroll offset https://developer.mozilla.org/en-US/docs/Web/API/Touch/clientX
      if (event.touches[0].clientX < window.innerWidth / 2 && !keyIsPressed) {
        keyIsPressed = true;
        moveCar1();
      }
    });

    document.addEventListener("touchend", function (event) {
      // Release the touch to stop the movement
      keyIsPressed = false;
    });

    // Player 2 touch event (right side of the screen)
    document.addEventListener("touchstart", function (event) {
      // Check if the touch is on the right side of the screen
      if (event.touches[0].clientX >= window.innerWidth / 2 && !keyIsPressed) {
        keyIsPressed = true;
        moveCar2();
      }
    });

    document.addEventListener("touchend", function (event) {
      // Release the touch to stop the movement
      keyIsPressed = false;
    });
    //Game over check set at an interval of one second
    const checkGameOver = setInterval(function () {
      if (count1 >= 19 && count2 >= 19) {
        playGame = false;
        clearInterval(checkGameOver);
        console.log("Game over.");

        // Stop audio at race finish
        gameMusic.pause();

        // Winner banner conditional update
        if (timeCount1 < timeCount2) {
          //player one wins
          winText.textContent =
            `${playerNames[0]} is the Winner!` || "Player 1 is the Winner!";
        } else if (timeCount2 < timeCount1) {
          //player two wins
          winText.textContent =
            `${playerNames[1]} is the Winner!` || "Player 2 is the Winner!";
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

  gameMusic.play();
  gameMusic.loop = true;
}); // when start is clicked the game loop starts
