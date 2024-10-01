//Create a variable that selects the form element.
const formElement = document.getElementById("form");
const playerOneName = document.querySelector("#playerOneName");
const playerTwoName = document.querySelector("#playerTwoName");

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
        let players = [playerOne,playerTwo];
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