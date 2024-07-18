function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3 + 1);
  let str;
  switch (compChoice) {
    case 1:
      str = "Rock";
      break;
    case 2:
      str = "Paper";
      break;
    case 3:
      str = "Scissors";
      break;

    default:
      break;
  }
  let result = str.toString().toLowerCase();
  console.log("Computer: "+result);
  return result;
}

function getHumanChoice() {
  console.log("Choose 1 for Rock, 2 for Paper, and 3 for Scissors");
  let userChoice = parseInt(prompt("Your Choice: "));

  let str;
  switch (userChoice) {
    case 1:
      str = "Rock";
      break;
    case 2:
      str = "Paper";
      break;
    case 3:
      str = "Scissors";
      break;
    default:
      str = "Please select the correct option.";
      break;
  }

  let result = str.toString().toLowerCase();
  console.log("Player: "+result);
  return result;
}

let humanScore = 0;
let compScore = 0;

function playRound(humanChoice, compChoice) {
  let result;
  if (
    (humanChoice === "rock" && compChoice === "scissors") ||
    (humanChoice === "scissors" && compChoice === "paper") ||
    (humanChoice === "paper" && compChoice === "rock")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${compChoice}\n\n`;
  } else if (
    (compChoice === "rock" && humanChoice === "scissors") ||
    (compChoice === "scissors" && humanChoice === "paper") ||
    (compChoice === "paper" && humanChoice === "rock")
  ) {
    compScore++;
    result = `You lose! ${compChoice} beats ${humanChoice}\n\n`;
  } else if (
    (humanChoice === "rock" && compChoice === "rock") ||
    (humanChoice === "scissors" && compChoice === "scissors") ||
    (humanChoice === "paper" && compChoice === "paper")
  ) {
    result = `It's a tie\n\n`;
  }else{
    result = `no result\n\n`
  }
  
  return result;
}

let winner = function () {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const compChoice = getComputerChoice();
    console.log(playRound(humanChoice, compChoice));
  }
  if(humanScore > compScore){
    console.log(`Congragulations! You win. \nYour score ${humanScore}\nOpponent score ${compScore}`);
  }else if(compScore > humanScore){
    console.log(`Better luck next time! You lost. \nYour score ${humanScore} \nOpponent score ${compScore}`);
  }else{
    console.log(`It's a tie!\nYour score ${humanScore} \nOpponent score ${compScore}`);
  }
};

console.log(winner());
