/*
Function the makes the computer chooses randomly a number
1 = rock
2 = paper
3 = scissors 
*/


const userSelection = null;
const computerSelection = null;


function computerPlays() {
    let randomChoice = Math.round(Math.random() * 2 + 1);
    switch (randomChoice) {
        case 1:
            computerChoice = "rock";
            break
        case 2:
            computerChoice = "paper";
            break
        case 3:
            computerChoice = "scissors";
    }
    return computerChoice;
}

function userPlays() {
    userChoice = (prompt("Rock-Paper-Scissors?")).toLowerCase();;
    return userChoice;
}

function playRound(userSelection, computerSelection) {

    userSelection = userPlays();
    computerSelection = computerPlays();

    if (userSelection == "rock") {
        if (computerSelection == "paper") {
            //console.log("You lose! Paper beats rock.");
            return "User lose"
        } else if (computerSelection == "scissors") {
            //console.log("You win! Rock beats scissors.");
            return "User win"
        } else {
            //console.log(`Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`);
            return "Tie"
        }
    } else if (userSelection == "paper") {
        if (computerSelection == "rock") {
            //console.log("You win! Paper beats rock.");
            return "User win"
        } else if (computerSelection == "scissors") {
            //console.log("You lose! Scissors beats paper.")
            return "User lose"
        } else {
            //console.log(`Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`);
            return "Tie"
        }
    } else if (userSelection == "scissors") {
        if (computerSelection == "rock") {
            //console.log("You lose! Rock beats scissors.")
            return "User lose"
        } else if (computerSelection == "paper") {
            //console.log("You win! Scissors beats paper.")
            return "User win"
        } else {
            //console.log(`Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`);
            return "Tie"
        }
    }

}


function game() {
    let computerScore = 0;
    let userScore = 0;
    for (let i = 0; i < 5; i++) {
        result = playRound(); // here we get the return values!
        if (result.includes("Tie")) {
            computerScore++
            userScore++
        } else if (result.includes("win")) {
            userScore++
        } else if (result.includes("lose")) {
            computerScore++
        }
        console.log(`SCORE\nYou: ${userScore}\nComputer: ${computerScore}`)
    }
    if (userScore > computerScore) {
        console.log("YOU WIN");
    } else if (userScore < computerScore) {
        console.log("YOU LOSE")
    } else {
        console.log("TIE")
    }
}
