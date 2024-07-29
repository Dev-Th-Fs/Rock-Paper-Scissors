function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const compChoice = Math.floor(Math.random() * 3);
  const result = choices[compChoice];
  return result;
}

let humanScore = 0;
let compScore = 0;

const playerScore = document.querySelector("#score");
console.log(humanScore);
playerScore.textContent = `Your score: ${humanScore}\nComp score: ${compScore} `;

function playRound(humanChoice, compChoice) {
  const winningConditions = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (humanChoice === compChoice) {
    return `It's a tie\n\n`;
  } else if (winningConditions[humanChoice] === compChoice) {
    humanScore++;
    return `You win! ${humanChoice} beats ${compChoice}\n\n`;
  } else if (winningConditions[compChoice] === humanChoice) {
    compScore++;
    return `You lose! ${compChoice} beats ${humanChoice}`;
  } else {
    return `No result\n\n`;
  }
}

const btns = document.querySelectorAll("button");
const gameWinner = document.querySelector("#final-winner");

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (humanScore < 5 && compScore < 5) {
      const humanChoice = e.target.textContent.toLowerCase();
      const winner = playRound(humanChoice, getComputerChoice());
      console.log(winner);
      const winPlayer = document.querySelector("#winner");
      winPlayer.textContent = winner;
      playerScore.textContent = `Your score: ${humanScore} | Comp score: ${compScore} `;

      if (humanScore == 5 || compScore == 5) {
        if (humanScore > compScore) {
          gameWinner.textContent = `You are the winner`;
        } else {
          gameWinner.textContent = `Computer is the winner`;
        }
        btns.forEach((button) => {
          button.disabled = true;
        });
      }
    }
  });
});
