//Create a variable that selects the form element.
const formElement = document.getElementById("form");
const playerOneName = document.querySelector("#playerOneName");
const playerTwoName = document.querySelector("#playerTwoName");
const selection = document.querySelector('#selection');
const playerOneCar = document.querySelector('#player1-car');
const playerTwoCar = document.querySelector('#player2-car');
const playerOneSelection = document.querySelector('.player1-settings #selection');
const playerTwoSelection = document.querySelector('.player2-settings #selection');
// const playerOneHeader = document.getElementById("player-1");
// const playerTwoHeader = document.getElementById("player-2");
// const playerOneTime = docuemnt.getElementById("player1-time");
// const playerTwoTime = document.getElementById("player2-time");
//Create variable for each car options:
const lamborghini = document.querySelector('#lamborghini');
const ferrari = document.querySelector('#ferrari');
const jaguar = document.querySelector('#jaguar');
const ford = document.querySelector('#ford');
// the game
const startGame = document.getElementById("start-button");
const scoreGame = document.getElementById("save-score");

// -----var box above-----------------------------------------------------------------

//Create a function that handles the form submission, grabs the data submitted and saves to cache (localStorage).
// function formResponse(event) {
//     event.preventDefault();
//     // Two player objects created for scalability.
//     const playerOne = {
//         name: playerOneName.value,
//     };

//     const playerTwo = {
//         name: playerTwoName.value,
//     };

    // If statement to check if fields are complete, then save to storage. Temporarily hardcoded.
    if (playerOne.name && playerTwo.name) {
        let players = [playerOne, playerTwo];
        localStorage.setItem("players", JSON.stringify(players));

        //TODO: Update the player names on the screen.
        

//         // Force close the modal since default action is prevented.
//         const modalElement = document.getElementById('staticBackdrop');
//         const modal = bootstrap.Modal.getInstance(modalElement); // method gets bootstrap modal - https://getbootstrap.com/docs/5.3/components/buttons/#methods
//         // Find backdrop div element created by bootstrap when modal is rendered in the DOM.
//         const backdrop = document.querySelector('.modal-backdrop');
//         if (modal && backdrop) {
//             modal.hide();
//             backdrop.remove();
//         }
//     }
// }

//Add an event listener to the form on submit.
// formElement.addEventListener('submit', formResponse);

//Show the modal on page load
// window.addEventListener('load', function () {
//     const modalForm = new bootstrap.Modal(document.getElementById('staticBackdrop')); // creates new modal on page load. - https://getbootstrap.com/docs/5.3/getting-started/javascript/#css-selectors-in-constructors
//     modalForm.show();
// });


// car appearance function for each choice
// player 1 options
const carImages = {
    "Lamborghini (Urus)": './assets/car-pics/Lamborghini.png',
    "Ferrari (458)": './assets/car-pics/Ferrari.png',
    "Porsche (718 Boxster)": './assets/car-pics/Jaguar.png', // Caution: Modified to porsche!!
    "Ford (GT40)": './assets/car-pics/Ford.png'
};

// Event listener for Player 1 car selection
playerOneSelection.addEventListener('change', function (event) {
    const selectedCar = event.target.value; // Get the selected option value for P1

    let img = playerOneCar.querySelector('img');
    if (!img) {
        img = document.createElement('img');
        img.style.width = "100px";   //modify size of the img here
        img.style.height = "auto";
        playerOneCar.appendChild(img); // Append the image to playerOneCar
    }

    // Update the img src based on the selected car
    img.src = carImages[selectedCar] || '';
});

// Event listener for Player 2 car selection
playerTwoSelection.addEventListener('change', function (event) {
    const selectedCar = event.target.value; // Get the selected option value for P2

    let img = playerTwoCar.querySelector('img');
    if (!img) {
        img = document.createElement('img');
        img.style.width = "100px"; //modify size of the img here
        img.style.height = "auto";
        playerTwoCar.appendChild(img); // Append the image to playerTwoCar
    }

    // Update the img src based on the selected car
    img.src = carImages[selectedCar] || '';
});




//------Let the game begin!-----------------------------------------
