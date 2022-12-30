function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if(rand === 0) {
        return "rock";
    }
    if(rand === 1) {
        return "paper";
    }
    return "scissors";
}

function playRound(playerSelection, computerSelection) {
    let play = playerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose!";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose!";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose!";
    }
    else if(play === computerSelection) {
        return "You Tied!"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win!";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win!";
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You Win!";
    }
    else {
        return "Not a valid input";

    }
    
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let choice = prompt("Rock, Paper, or Scissors");
        let outcome = playRound(choice, getComputerChoice());
        if(outcome === "You Lose!") {
            console.log("You Lost Round " + (i + 1));
            computerScore++;
            console.log("The score is " + playerScore + " to " + computerScore);
        }
        else if(outcome === "You Win!") {
            console.log("You Won Round " + (i + 1));
            playerScore++;
            console.log("The score is " + playerScore + " to " + computerScore);
        }
        else if(outcome === "You Tied!") {
            console.log("You Tied Round " + (i + 1));
            console.log("The score is " + playerScore + " to " + computerScore);
        }
    }
    if(playerScore > computerScore) {
        return "You Won!"
    }
    else if(playerScore < computerScore) {
        return "You Lost!"
    }
    else {
        return "You Tied!"
    }

}