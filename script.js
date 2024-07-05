let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanSelection, computerSelection) {}

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

function getHumanChoice() {
	let result = prompt(
		"Yo dog - what is your choice? Rock, paper or scissors?"
	).toLowerCase;

	const resultCheck =
		result === "rock" || result === "paper" || result === "scissors";

	if (!resultCheck) {
		return console.log("Wrong input!");
	}

	return result;
}
