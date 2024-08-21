// Declare

const selections = ['rock', 'paper', 'scissors'];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const outcome = document.getElementById("outcome");

// function that accept one argument
function gameOn(selectOn) {

// Generate a Random Number for Rock, Paper and Scissors
    const computerSelect = selections[Math.floor(Math.random() * 3)];
    let outcome = "";

    if (gameOn === computerSelect){
        outcome = "Draw";
    }
    else {
        switch (gameOn) {
            case "rock":
            outcome = (computerSelect === "scissors") ? "WIN!" : "LOSE!";
            break;
            case "paper":
            outcome = (computerSelect === "rock") ? "WIN!" : "LOSE!";
            break;
            case "scissors":
            outcome = (computerSelect === "paper") ? "WIN!" : "LOSE!";
            break;
        }
    }


}