


//  --------------------- var box ----------------------------------------

// keyPressHandler - using l and a

function keyPressHandlerL (event) {
    event.preventDefault();

    if (event.key === "l"){
        playerOneCar.setAttribute('left','20px');
    }

};
// function keyPressHandlerA (event) {
//     event.preventDefault();

//     if (event.key === "a"){

//     }

// };


window.addEventListener('keydown', keyPressHandlerL);
// window.addEventListener('keydown', keyPressHandlerA);

