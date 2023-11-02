const MAX_SIZE = 1100;
const MIN_SIZE = 100;
const STEP = 100;

// FUNCIONS --------------------------------------------------
let decreaseBox = () => {
	if (currentWidth>MIN_SIZE){
		currentWidth-=STEP;
		box.style.width=currentWidth+'px';
		box.style.transition="all 0.5s";
	}
};

let increaseBox = () => {
	if (currentWidth<MAX_SIZE){
		currentWidth +=STEP;
		box.style.width=currentWidth+'px';
		box.style.transition="all 0.5s";	
	}
};

// MAIN --------------------------------------------------
let box = document.querySelector("#box");

// Initialize the size of the box (100 px at the begining)
let currentWidth = MIN_SIZE;
// box.style.width = currentWidth + "px";

// Add button functions
let btnDecrease = document.querySelector("#btn-decrease-width");
btnDecrease.addEventListener("click", decreaseBox);

let btnIncrease = document.querySelector("#btn-increase-width");
btnIncrease.addEventListener("click", increaseBox);

