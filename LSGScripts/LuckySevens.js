/*
	Name: Jose Ezequiel Marquez
	Date Created: December 3rd 2019
	Most Recent Revision: December 7th 2019
	
	JavaScript for Lucky Sevens Game
*/

function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function playSevens() {
	var initWager = Number(document.forms["LSG"]["wager"].value);
	var cash = initWager;
	var firstDie;
	var secondDie;
	var diceRoll;
	var maxEarnings = 0;
	var rolls = 0;
	var rollsAtMax = 0;
	
	if (cash <= 0) {
		alert("Your wager needs to be greater than $0.00 in order to play!");
	}
	else {
		while(cash > 0) {
			firstDie = rollDice();
			secondDie = rollDice();
			diceRoll = firstDie + secondDie;
			rolls++;
			if(diceRoll != 7) {
				cash--;
				console.log("L");
			}
			else {
				cash += 4;
				if(cash > maxEarnings) {
					maxEarnings += (cash-maxEarnings);
					rollsAtMax =  rolls;
				}
				console.log("W");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("restartButton").innerText = "Play Again?";
	document.getElementById("iWager").innerText = initWager;
	document.getElementById("totRolls").innerText = rolls;
	document.getElementById("maxBet").innerText = maxEarnings;
	document.getElementById("rollsAtMax").innerText = rollsAtMax;
	return false;
}