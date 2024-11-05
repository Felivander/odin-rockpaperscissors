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

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(human, computer) {
    if (human == "rock" && computer == "paper") {
      computerScore++;
    }
    if (human == "paper" && computer == "rock") {
      humanScore++;
    }
    if (human == "paper" && computer == "scissors") {
      computerScore++;
    }
    if (human == "scissors" && computer == "paper") {
      humanScore++;
    }
    if (human == "rock" && computer == "scissors") {
      humanScore++;
    }
    if (human == "scissors" && computer == "rock") {
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log("Round number:", i + 1);

    playRound(humanChoice, computerChoice);

    console.log("Human score: ", humanScore);
    console.log("Computer score: ", computerScore);
    if (humanScore > computerScore) {
      console.log("Human wins the round!");
    } else if (computerScore > humanScore) {
      console.log("Computer wins the round!");
    } else {
      console.log("It's a Tie!");
    }
  }
}

playGame();

console.clear();
console.log("Final Scores:");
console.log("Computer: ", computerScore);
console.log("Human: ", humanScore);

if (humanScore > computerScore) {
  console.log("Human wins!");
} else if (computerScore > humanScore) {
  console.log("Computer wins");
} else {
  console.log("It's a Tie!");
}
