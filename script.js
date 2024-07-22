const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
let humanScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
	playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
	playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
	playRound("scissors", getComputerChoice());
});

function playRound(humanSelection, computerSelection) {
	if (humanSelection === computerSelection) {
		result.textContent =
			"This round is a draw!" + currentScore(humanScore, computerScore);
	}

	if (humanSelection === "rock") {
		if (computerSelection === "scissors") {
			roundForHuman();
		} else if (computerSelection === "paper") {
			roundForComputer();
		}
	}

	if (humanSelection === "paper") {
		if (computerSelection === "rock") {
			roundForHuman();
		} else if (computerSelection === "scissors") {
			roundForComputer();
		}
	}

	if (humanSelection === "scissors") {
		if (computerSelection === "paper") {
			roundForHuman();
		} else if (computerSelection === "rock") {
			roundForComputer();
		}
	}

	if (humanScore === 5) {
		humanScore = 0;
		computerScore = 0;
		result.textContent = "Congratulations, you won!";
	} else if (computerScore === 5) {
		humanScore = 0;
		computerScore = 0;
		result.textContent = "Unfortunatelly, computer won :(";
	}
}

function roundForComputer() {
	computerScore++;
	result.textContent =
		"You lost this round!" + currentScore(humanScore, computerScore);
}

function roundForHuman() {
	humanScore++;
	result.textContent =
		"You won this round!" + currentScore(humanScore, computerScore);
}

function getComputerChoice() {
	let generateVariable = Math.random();
	let rock = "rock";
	let paper = "paper";
	let scissors = "scissors";

	if (generateVariable < 0.33) {
		return rock;
	} else if (generateVariable < 0.66) {
		return paper;
	} else {
		return scissors;
	}
}

function currentScore(humanScore, computerScore) {
	return " Human: " + humanScore + " Computer: " + computerScore;
}

// function getHumanChoice() {
// 	let result = prompt("Yo dog - what is your choice? Rock, paper or scissors?");
// 	result = result.toLocaleLowerCase();
// 	console.log(result);

// 	const resultCheck =
// 		result === "rock" || result === "paper" || result === "scissors";

// 	if (!resultCheck) {
// 		console.log("Wrong input! Try again");
// 		getHumanChoice();
// 	}

// 	return result;
// }
