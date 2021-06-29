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

console.log(userPlay());

function computerPlay() {
	const a = Math.floor(Math.random() * 3) + 1;
	let b = a.toString();
	if (a === 1) {
		return (b = 'rock');
	} else if (a === 2) {
		return (b = 'paper');
	} else {
		return (b = 'scissors');
	}
}

console.log(computerPlay());

function playRound(userSelection, computerSelection) {
	const userSelection = userPlay();
	const computerSelection = computerPlay();

	//tie game condition result
	if (computerSelection === userSelection) {
		return 'Tie game!';

		//Rock outcomes
	} else if (computerSelection === 'rock' && userSelection === 'paper') {
		return 'User wins!';
		//Paper outcomes
	} else if (computerSelection === 'paper' && userSelection === 'scissors') {
		//Scissors outcomes
	} else if (computerSelection === 'scissors' && userSelection === 'paper') {
	}
}
