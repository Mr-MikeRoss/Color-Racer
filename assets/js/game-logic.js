const countPlayer1 = 0;
const countPlayer2 = 0;
const player1Time = document.getElementById("player1-time");
const player2Time = document.getElementById("player2-time");
const startGame = document.getElementById("start-button");
const scoreGame = document.getElementById("save-score");
//  --------------------- var box ----------------------------------------

// keyPressHandler - using l and a

// -------------------------------
let position = 0;
const speed = 10;
let keyIsPressed = false;

function moveCar1() {
position += speed;
playerOneCar.style.left = position + 'px';
};

document.addEventListener('keydown', function(event) {
  if (event.key === "a" && !keyIsPressed) {
    keyIsPressed = true;
    moveCar1();
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key === "a") {
    keyIsPressed = false;
  }
});

function moveCar2() {
  position += speed;
  playerTwoCar.style.left = position + 'px';
  };
  
  document.addEventListener('keydown', function(event) {
    if (event.key === "l" && !keyIsPressed) {
      keyIsPressed = true;
      moveCar2();
    }
  });
  
  document.addEventListener('keyup', function (event) {
    if (event.key === "l") {
      keyIsPressed = false;
    }
  });

// -------------------------------

// function keyPressHandlerL(event) {
// //   event.preventDefault();
//   while (countPlayer1 < 100) {
//     if (event.key === "l") {
//       playerOneCar.style.left += "5px";
//       countPlayer1++;
//     }
    
//   }
// }

// function keyPressHandlerA(event) {
//   event.preventDefault();

//   if (event.key === "a") {
//   }
//   countPlayer2++;
// }

// key press event listeners
// window.addEventListener("keydown", keyPressHandlerL);
// window.addEventListener("keydown", keyPressHandlerA);

// timer function
function timeHandler(event) {
  let timeCount1 = 0;
  setInterval(function timeInterval() {
    timeCount1++;
    console.log(timeCount1);
    player1Time.textContent = timeCount1;
  }, 1000);
  let timeCount2 = 0;
  setInterval(function timeInterval() {
    timeCount2++;
    console.log(timeCount2);
    player2Time.textContent = timeCount2;
  }, 1000);
}

// timer function event listener.
startGame.addEventListener("click", function () {
  timeHandler();
});
