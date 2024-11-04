const rock = 1;
const paper = 2;
const scissors = 3;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";

    default:
      break;
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?");

  switch (humanChoice) {
    case "rock":
      return humanChoice;
    case "paper":
      return humanChoice;
    case "scissors":
      return humanChoice;
    default:
      let wrongChoice = getHumanChoice();
      return wrongChoice;
  }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(computerChoice);
console.log(humanChoice);
