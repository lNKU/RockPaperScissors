function userPlay() {
	let userChoice = prompt(
		'Please enter your move! (Rock, Paper, or Scissors)'
	).toLowerCase();
	userInt = 0;
	if (userChoice === 'rock') {
		userInt = 1;
	} else if (userChoice === 'paper') {
		userInt = 2;
	} else if (userChoice === 'scissors') {
		userInt = 3;
	} else {
		userInt;
	}
	return userChoice;
}

// console.log(userPlay());

function computerPlay() {
	let a = Math.floor(Math.random() * 3) + 1;

	if (a === 1) {
		return (a = 'rock');
	} else if (a === 2) {
		return (a = 'paper');
	} else if (a === 3) {
		return (a = 'scissors');
	}
}

// console.log(computerPlay());

function playRound(userSelection, computerSelection) {
	//Rock outcomes
	if (computerSelection == 'rock' && userSelection == 'paper') {
		return 'Player wins!';
	} else if (userSelection == 'rock' && computerSelection == 'paper') {
		return 'Computer wins!';

		//Paper outcomes
	} else if (computerSelection == 'paper' && userSelection == 'scissors') {
		return 'Player wins!';
	} else if (userSelection == 'paper' && computerSelection == 'scissors') {
		return 'Computer wins!';

		//Scissors outcomes
	} else if (computerSelection == 'scissors' && userSelection == 'rock') {
		return 'Player wins!';
	} else if (userSelection == 'scissors' && computerSelection == 'rock') {
		return 'Computer wins!';
	} else if (computerSelection == userSelection) {
		return 'Tie game!';
	}
}

const userSelection = userPlay();
const computerSelection = computerPlay();

console.log(`Player chose ${userSelection}!`);
console.log(`Computer chose ${computerSelection}!`);
console.log(playRound(userSelection, computerSelection));
