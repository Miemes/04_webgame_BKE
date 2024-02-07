// POPUP CODE
let popup = document.getElementById("popup");

      function openPopup(){
        popup.classList.add("open-popup");
      }
      function closePopup(){
        popup.classList.remove("open-popup");
      }


			//PLAYER 1
const numberOfDice = 1;
const diceContainer = document.querySelector(".dice-container");

function randomizeDice(diceContainer, numberOfDice) {
  diceContainer.innerHTML = ""; //1st step is to clear out any existing dice START HIERRR

  for (let i = 0; i < numberOfDice; i++) { //we get numberOfDice ammount of loop itterations
    const random = Math.floor((Math.random() * 6) + 1) //generate the random number
    const dice = createDice(random); //this links it to the dot-index

    diceContainer.appendChild(dice); //this puts the dice into the container 'diceContainer'
  }
}

//deze matrix laat zien waar de dots staan gebaseerd op welk nummer is gegooid. zoals je ziet staan een 1 in het midden en een 2 met 2 hoeken bezet
//de cijfers zijn procenten en laten weten waar de dots staan
function createDice(number) { //this function is called create dice with a parameter that's a number, linked to line 61. random gives it the number.
  const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
};

  const dice = document.createElement("div"); //makes one new div for the dice

  dice.classList.add("dice"); //this adds the class of dice

  for (const dotPosition of dotPositionMatrix[number]) { //it will choose the array corresponding to the number in the [] to loop over
    const dot = document.createElement("div"); //creates new divs for dots

    dot.classList.add("dice-dot"); //adds the class dice-dot to the newly created dot-div
    dot.style.setProperty("--top", dotPosition[0] + "%");
    dot.style.setProperty("--left", dotPosition[1] + "%");
    dice.appendChild(dot);
  }

  return dice;
}

const btnRollDice = document.querySelector(".btn-roll-dice");

btnRollDice.addEventListener("click", () => { 
  const interval = setInterval(() => {
		randomizeDice(diceContainer, numberOfDice);
	}, 50); //thats 50 ms
	
	setTimeout(() => clearInterval(interval), 1000);

	console.log(randomizeDice(random));
}); //when the button gets clicked on its gonna call randomizeDice, diceContainer and NUMBER_OF_DICE


//Lichaamsdelen code lijst player 1













//THIS IS THE CODE FOR PLAYER 2
const diceContainer2 = document.querySelector(".dice-container2");

function randomizeDice2(diceContainer2, numberOfDice) {
  diceContainer2.innerHTML = ""; //1st step is to clear out any existing dice START HIERRR

  for (let i = 0; i < numberOfDice; i++) { //we get numberOfDice ammount of loop itterations
    const random = Math.floor((Math.random() * 6) + 1) //generate the random number
    const dice = createDice2(random); //this links it to the dot-index

    diceContainer2.appendChild(dice); //this puts the dice into the container 'diceContainer'
  }
}

//deze matrix laat zien waar de dots staan gebaseerd op welk nummer is gegooid. zoals je ziet staan een 1 in het midden en een 2 met 2 hoeken bezet
//de cijfers zijn procenten en laten weten waar de dots staan
function createDice2(number) { //this function is called create dice with a parameter that's a number, linked to line 61. random gives it the number.
  const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
};

  const dice = document.createElement("div"); //makes one new div for the dice

  dice.classList.add("dice2"); //this adds the class of dice

  for (const dotPosition of dotPositionMatrix[number]) { //it will choose the array corresponding to the number in the [] to loop over
    const dot = document.createElement("div"); //creates new divs for dots

    dot.classList.add("dice-dot2"); //adds the class dice-dot to the newly created dot-div
    dot.style.setProperty("--top", dotPosition[0] + "%");
    dot.style.setProperty("--left", dotPosition[1] + "%");
    dice.appendChild(dot);
  }

  return dice;
}

const btnRollDice2 = document.querySelector(".btn-roll-dice2");

btnRollDice2.addEventListener("click", () => { 
  const interval = setInterval(() => {
		randomizeDice2(diceContainer2, numberOfDice);
	}, 50); //thats 50 ms
	
	setTimeout(() => clearInterval(interval), 1000);
}); //when the button gets clicked on its gonna call randomizeDice, diceContainer and NUMBER_OF_DICE



