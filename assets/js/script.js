// Declarations

const selections = ['rock', 'paper', 'scissors'];

const player = document.getElementById("player");
const computer = document.getElementById("computer");
const outcome = document.getElementById("outcome");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


// function that accept one argument
function gameOn(selectOn) {

// Generate a Random Number for Rock, Paper and Scissors
    const computerSelect = selections[Math.floor(Math.random() * 3)];
    let result = "";

    if(selectOn === computerSelect){
        result = "DRAW";
    }
    else {
        // Use Switch Case Statement to handle the conditions
        switch(selectOn) {
            case "rock":
            result = (computerSelect === "scissors") ? "WIN!" : "LOSE!";
            break;
            case "paper":
            result = (computerSelect === "rock") ? "WIN!" : "LOSE!";
            break;
            case "scissors":
            result = (computerSelect === "paper") ? "WIN!" : "LOSE!";
            break;
        }
    }

    player.textContent = `PLAYER: ${selectOn}`;
    computer.textContent = `COMPUTER: ${computerSelect}`;
    outcome.textContent = result;

    outcome.classList.remove("blueScore", "redScore");

    switch(result){
        case "WIN!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            outcome.classList.add("blueScore");
        break;
        case "LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            outcome.classList.add("redScore");
            break;

    }


}