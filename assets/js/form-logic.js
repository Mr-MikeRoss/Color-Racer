//Create variable that selects the form element.
const formElement = document.getElementById("form");
const playerOneName = document.querySelector("#playerOneName");
const playerTwoName = document.querySelector("#playerTwoName");
const selection = document.querySelector("#selection");
const playerOneCar = document.querySelector("#player1-car");
const playerTwoCar = document.querySelector("#player2-car");
const playerOneSelection = document.querySelector(
  ".player1-settings #selection"
);
const playerTwoSelection = document.querySelector(
  ".player2-settings #selection"
);
//Time variables
const playerOneHeader = document.getElementById("player-1");
const playerTwoHeader = document.getElementById("player-2");
const playerOneClock = document.getElementById("player1-clock");
const playerTwoClock = document.getElementById("player2-clock");
//Create variable for each car options:
const lamborghini = document.querySelector("#lamborghini");
const ferrari = document.querySelector("#ferrari");
const jaguar = document.querySelector("#jaguar");
const ford = document.querySelector("#ford");
//High Score variables
const highScoreNames = [
  document.getElementById("highscore1-name"),
  document.getElementById("highscore2-name"),
  document.getElementById("highscore3-name"),
];
const highScoreTimes = [
  document.getElementById("highscore1-time"),
  document.getElementById("highscore2-time"),
  document.getElementById("highscore3-time"),
];

let playerNames;

// -----var box above-----------------------------------------------------------------

//Create a function that handles the form submission, grabs the data submitted and saves to cache (localStorage).
function formResponse(event) {
  event.preventDefault();

  // If statement to check if form fields are complete, then save to storage.
  if (playerOneName.value && playerTwoName.value) {
    // Two player objects created for scalability.
    const playerOne = {
      name: playerOneName.value,
      time: JSON.parse(localStorage.getItem("player1-time")), //Get p1 time from local storage.
    };
    const playerTwo = {
      name: playerTwoName.value,
      time: JSON.parse(localStorage.getItem("player2-time")), //Get p2 time from local storage.
    };

    // Get and update players objects array.
    let players = JSON.parse(localStorage.getItem("players")) || [];
    players.push(playerOne);
    players.push(playerTwo);
    localStorage.setItem("players", JSON.stringify(players));

    //Update the player names on the screen.
    playerOneHeader.textContent = playerOne.name;
    playerTwoHeader.textContent = playerTwo.name;
    playerOneClock.textContent = `${playerOne.name}'s Time:`;
    playerTwoClock.textContent = `${playerTwo.name}'s Time:`;

    //Update high score board from local storage
    updateHighScoreBoard();

    // Force close the modal since default action is prevented.
    const modalElement = document.getElementById("staticBackdrop");
    const modal = bootstrap.Modal.getInstance(modalElement); // method gets bootstrap modal - https://getbootstrap.com/docs/5.3/components/buttons/#methods
    // Find backdrop div element created by bootstrap when modal is rendered in the DOM.
    const backdrop = document.querySelector(".modal-backdrop");
    if (modal && backdrop) {
      modal.hide();
      backdrop.remove();
    }
  }
  playerNames = [playerOneName.value, playerTwoName.value];
  console.log(playerNames);
}

//Add an event listener to the form on submit.
formElement.addEventListener("submit", formResponse);

//updateHighScoreBoard function
function updateHighScoreBoard() {
  let players = JSON.parse(localStorage.getItem("players")) || [];

  // takes each player and updates them with time and rewrites new array using map
  players = players.map(function (player) {
    if (player.name === playerOneName.value) {
      let playerOneTime =
        JSON.parse(localStorage.getItem("player1-time")) || null;
      player.time = playerOneTime;
    } else if (player.name === playerTwoName.value) {
      let playerTwoTime =
        JSON.parse(localStorage.getItem("player2-time")) || null;
      player.time = playerTwoTime;
    }
    return player;
  });

  // clear times froom local storage
  localStorage.removeItem("player1-time");
  localStorage.removeItem("player2-time");

  // Save the updated players back to local storage
  localStorage.setItem("players", JSON.stringify(players));

  // Sort players by time, handle null or undefined times
  players.sort((a, b) => {
    if (a.time === null || a.time === undefined) return 1; // Push null/undefined to the end https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    if (b.time === null || b.time === undefined) return -1;
    return a.time - b.time;
  });

  // Get top 3 players
  const topPlayers = players.slice(0, 3); // No need for the fallback slice

  // Fill with N/A if less than 3 players.
  while (topPlayers.length < 3) {
    topPlayers.push({ name: "N/A", time: "N/A" });
  }

  // Update high score board display
  for (let i = 0; i < topPlayers.length; i++) {
    // Handle missing player names or times
    if (topPlayers[i]) {
      highScoreNames[i].textContent = topPlayers[i].name || "N/A";
      if (topPlayers[i].time !== null && topPlayers[i].time !== undefined) {
        highScoreTimes[i].textContent = topPlayers[i].time;
      } else {
        highScoreTimes[i].textContent = "N/A";
      }
    } else {
      highScoreNames[i].textContent = "N/A";
      highScoreTimes[i].textContent = "N/A";
    }
  }
}

//Show the modal on page load
window.addEventListener("load", function () {
  const modalForm = new bootstrap.Modal(
    document.getElementById("staticBackdrop")
  ); // creates new modal on page load. - https://getbootstrap.com/docs/5.3/getting-started/javascript/#css-selectors-in-constructors
  modalForm.show();
});

// car appearance function for each choice
// player 1 options
const carImages = {
  "Lamborghini (Urus)": "./assets/car-pics/Lamborghini.png",
  "Ferrari (458)": "./assets/car-pics/Ferrari.png",
  "Porsche (718 Boxster)": "./assets/car-pics/Jaguar.png", // Caution: Modified to porsche!!
  "Ford (GT40)": "./assets/car-pics/Ford.png",
};

// Event listener for Player 1 car selection
playerOneSelection.addEventListener("change", function (event) {
  const selectedCar = event.target.value; // Get the selected option value for P1

  let img = playerOneCar.querySelector("img");
  if (!img) {
    img = document.createElement("img");
    img.style.width = "100px"; //modify size of the img here
    img.style.height = "auto";
    if (window.matchMedia("(max-width: 375px)").matches) {
      img.style.width = "70px";
    }
    playerOneCar.appendChild(img); // Append the image to playerOneCar
  } 
  // Update the img src based on the selected car
  img.src = carImages[selectedCar] || "";
});

// Event listener for Player 2 car selection
playerTwoSelection.addEventListener("change", function (event) {
  const selectedCar = event.target.value; // Get the selected option value for P2

  let img = playerTwoCar.querySelector("img");
  if (!img) {
    img = document.createElement("img");
    img.style.width = "100px"; //modify size of the img here
    img.style.height = "auto";
    if (window.matchMedia("(max-width: 375px)").matches) {
      img.style.width = "70px";
    }
    playerTwoCar.appendChild(img); // Append the image to playerTwoCar
  }

  // Update the img src based on the selected car
  img.src = carImages[selectedCar] || "";
});
//------Let the game begin!-----------------------------------------
