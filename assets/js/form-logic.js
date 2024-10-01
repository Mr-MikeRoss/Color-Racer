//Create a variable that selects the form element.
const formElement = document.getElementById("form");
const playerOneName = document.querySelector("#playerOneName");
const playerTwoName = document.querySelector("#playerTwoName");
const selection = document.querySelector('#selection');
const playerOneCar = document.querySelector('#player1-car');
const playerTwoCar = document.querySelector('#player2-car');
const playerOneSelection = document.querySelector('.player1-settings #selection')
const playerTwoSelection = document.querySelector('.player2-settings #selection')
//Create variable for each car options:
const lamborghini = document.querySelector('#lamborghini');
const ferrari = document.querySelector('#ferrari');
const jaguar = document.querySelector('#jaguar');
const ford = document.querySelector('#ford');


// -----var box above-----------------------------------------------------------------

//Create a function that handles the form submission, grabs the data submitted and saves to cache (localStorage).
function formResponse(event) {
    event.preventDefault();
    // Two player objects created for scalability.
    const playerOne = {
        name: playerOneName.value,
    };

    const playerTwo = {
        name: playerTwoName.value,
    };

    // If statement to check if fields are complete, then save to storage. Temporarily hardcoded.
    if (playerOne.name && playerTwo.name) {
        let players = [playerOne, playerTwo];
        localStorage.setItem("players", JSON.stringify(players));

        // Force close the modal since default action is prevented.
        const modalElement = document.getElementById('staticBackdrop');
        const modal = bootstrap.Modal.getInstance(modalElement); // method gets bootstrap modal - https://getbootstrap.com/docs/5.3/components/buttons/#methods
        // Find backdrop div element created by bootstrap when modal is rendered in the DOM.
        const backdrop = document.querySelector('.modal-backdrop');
        if (modal && backdrop) {
            modal.hide();
            backdrop.remove();
        }
    }
}

//Add an event listener to the form on submit.
formElement.addEventListener('submit', formResponse);

//Show the modal on page load
window.addEventListener('load', function () {
    const modalForm = new bootstrap.Modal(document.getElementById('staticBackdrop')); // creates new modal on page load. - https://getbootstrap.com/docs/5.3/getting-started/javascript/#css-selectors-in-constructors
    modalForm.show();
});


// car appearance function for each choice
// player 1 options

playerOneSelection.addEventListener('change', function (event) {
    const selectedCar = event.target.value; // Get the selected option value
    if (selectedCar === 'Lamborghini') {
        playerOneCar.textContent = '🚗 Lamborghini'; // Display Lamborghini in player2-car
    } else if (selectedCar === 'Ferrari') {
        playerOneCar.textContent = '🚗 Ferrari';
    } else if (selectedCar === 'Jaguar') {
        playerOneCar.textContent = '🚗 Jaguar';
    } else if (selectedCar === 'Ford') {
        playerOneCar.textContent = '🚗 Ford';
    } else {
        playerOneCar.textContent = ''; // Clear the display if another car is selected
    }
});

// player 2 options

playerTwoSelection.addEventListener('change', function (event) {
    const selectedCar = event.target.value; // Get the selected option value
    if (selectedCar === 'Lamborghini') {
        playerTwoCar.textContent = '🚗 Lamborghini'; // Display Lamborghini in player2-car
    } else if (selectedCar === 'Ferrari') {
        playerTwoCar.textContent = '🚗 Ferrari';
    } else if (selectedCar === 'Jaguar') {
        playerTwoCar.textContent = '🚗 Jaguar';
    } else if (selectedCar === 'Ford') {
        playerTwoCar.textContent = '🚗 Ford';
    } else {
        playerTwoCar.textContent = ''; // Clear the display if another car is selected
    }
});