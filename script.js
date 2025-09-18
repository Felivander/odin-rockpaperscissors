let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
const Game = document.getElementById("rps");
let humanChoiceElement = document.createElement("span");
let computerChoiceElement = document.createElement("span");
const score = document.getElementById("score");
let humanScoreElement = document.createElement("p");
let computerScoreElement = document.createElement("p");
let finalMessageElement = document.createElement("p");

let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;

const emojiMap = {
  rock: "🪨",
  paper: "🗒️",
  scissors: "✂️"
};

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
};

function playRound(human, computer) {
  if (human == "rock" && computer == "paper") computerScore++;
  if (human == "paper" && computer == "rock") humanScore++;
  if (human == "paper" && computer == "scissors") computerScore++;
  if (human == "scissors" && computer == "paper") humanScore++;
  if (human == "rock" && computer == "scissors") humanScore++;
  if (human == "scissors" && computer == "rock") computerScore++;
  humanScoreElement.textContent = `Human Score: ${humanScore}`;
  computerScoreElement.textContent = `Computer Score: ${computerScore}`;
  score.appendChild(humanScoreElement);
  score.appendChild(computerScoreElement);
  // Chequear ganador
  if (humanScore >= 5 || computerScore >= 5) {
    score.removeChild(humanScoreElement);
    score.removeChild(computerScoreElement);
    

    console.clear();


    console.log("Final Scores:");
    console.log("Computer:", computerScore);
    console.log("Human:", humanScore);

    if (humanScore > computerScore) {
      finalMessageElement.textContent = "Human Wins!";
    } else if (computerScore > humanScore) {
      finalMessageElement.textContent = "Computer Wins!";
    } else {
      finalMessageElement.textContent = "It's a Tie!";
    }
    score.appendChild(finalMessageElement);
    // Desactivar botones
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    return true; // 👈 avisamos que el juego terminó
  }

  return false; // 👈 todavía sigue
}


function playGame() {
  rock.addEventListener("click", function() {
  console.clear();
  computerChoice = getComputerChoice();
  humanChoice = "rock";
  let ended = playRound(humanChoice, computerChoice);
  humanChoiceElement.textContent = `${emojiMap[humanChoice]}`;
  computerChoiceElement.textContent = `${emojiMap[computerChoice]}`;
  Game.appendChild(humanChoiceElement);
  Game.appendChild(computerChoiceElement);
  


  if (!ended) { // 👈 solo loguea si la partida sigue
    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", computerChoice);
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
  }
});

  paper.addEventListener("click", function() {
  console.clear();
  computerChoice = getComputerChoice();
  humanChoice = "paper";
  let ended = playRound(humanChoice, computerChoice);
  humanChoiceElement.textContent = `${emojiMap[humanChoice]}`;
  computerChoiceElement.textContent = `${emojiMap[computerChoice]}`;
  Game.appendChild(humanChoiceElement);
  Game.appendChild(computerChoiceElement);

  if (!ended) { // 👈 solo loguea si la partida sigue
    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", computerChoice);
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
  }
});

  
  scissors.addEventListener("click", function() {
  console.clear();
  computerChoice = getComputerChoice();
  humanChoice = "scissors";
  let ended = playRound(humanChoice, computerChoice);
  humanChoiceElement.textContent = `${emojiMap[humanChoice]}`;
  computerChoiceElement.textContent = `${emojiMap[computerChoice]}`;
  Game.appendChild(humanChoiceElement);
  Game.appendChild(computerChoiceElement);

  if (!ended) { // 👈 solo loguea si la partida sigue
    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", computerChoice);
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
  }
});

}



playGame();




  