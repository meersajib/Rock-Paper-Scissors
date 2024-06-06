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
      return "Please write carefully";
      break;
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
  return checkChoice(choice === "rock" ? 0 : choice === "paper" ? 1 : 2);
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

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
};
playGame();

if (computerScore > humanScore) {
  console.log(`You lose!`);
} else {
  console.log("You won!");
}

console.log(`Scores: [Human: ${humanScore}, Computer: ${computerScore}]`);
