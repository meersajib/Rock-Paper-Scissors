let humanScore = 0;
let computerScore = 0;
const checkChoice = (choice) => {
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      window.location.reload();
  }
};

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  return checkChoice(choice);
};

const getHumanChoice = () => {
  const choice = prompt(
    "Enter choices between 'rock'/'paper'/'scissors' :"
  ).toLocaleLowerCase();
  return checkChoice(
    choice === "rock"
      ? 0
      : choice === "paper"
      ? 1
      : choice === "scissors"
      ? 2
      : undefined
  );
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice !== computerChoice) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log("You won!");
    humanScore++;
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    if (humanSelection !== undefined) {
      playRound(getHumanChoice(), getComputerChoice());
    } else {
      break;
    }
  }
};
playGame();

const getWinner = () => {
  if (computerScore > humanScore) {
    console.log(`Final Round: You lose!`);
  } else if (computerScore < humanScore) {
    console.log("Final Round: You won");
  } else {
    console.log("Final Round: Draw!");
  }
  alert(`Scores: [Human: ${humanScore}, Computer: ${computerScore}]`);
};
humanSelection !== undefined && getWinner();
