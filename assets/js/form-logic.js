// TODO: Create a variable that selects the form element.
const formElement = document.getElementById("form");
const playerOneName = document.querySelector("#playerOneName");
const playerTwoName = document.querySelector("#playerTwoName");

//TODO: Create a function that handles the form submission, grabs the data submitted and saves to cache (localStorage).
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
        let players = [playerOne,playerTwo];
        console.log("")
        localStorage.setItem("players", JSON.stringify(players));
    }

}

//TODO: Add an event listener to the form on submit.
formElement.addEventListener('submit', formResponse);