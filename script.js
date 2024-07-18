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
  return str;
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
        console.log("Please select the correct option.")
      break;
  }
  return str;
}
console.log(getHumanChoice());
