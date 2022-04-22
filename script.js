// Computer selection
const computerSelection = null;

// Button rock
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("rock", computerSelection);
});

// Button paper
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound("paper", computerSelection);
});

// Button scissors
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound("scissors", computerSelection);
});

// Div for appending results message, the divScore
const choices = document.querySelector("#choices");

// Scores
let userScore = 0;
let computerScore = 0;

function showScore() {
    const userScr = document.querySelector("#userScr");
    userScr.textContent = userScore;

    const computerScr = document.querySelector("#computerScr");
    computerScr.textContent = computerScore;
}

function endOfGame() {
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = "PLAY AGAIN";
    choices.appendChild(playAgainButton);
    playAgainButton.addEventListener("click", function (event) {
        playAgain();
    });
}

function playAgain() {
    document.location.reload();
}

// Main function of playing 
function playRound(userSelection, computerSelection) {

    // The playing goes while user or computer don't reach 5 points
    if (userScore < 5 && computerScore < 5) {

        computerSelection = computerPlays();

        if (userSelection == "rock") {
            if (computerSelection == "paper") {
                computerScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You lose! Paper beats rock."
                choices.appendChild(divScore);
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                    endOfGame();
                }
                // return "User lose"
            } else if (computerSelection == "scissors") {
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You win! Rock beats scissors."
                choices.appendChild(divScore);
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                    endOfGame();
                }
                // return "User win"
            } else {
                computerScore += 1;
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = `Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`
                choices.appendChild(divScore);
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                    endOfGame();
                }
                // return "Tie"
            }
        } else if (userSelection == "paper") {
            if (computerSelection == "rock") {
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You win! Paper beats rock."
                choices.appendChild(divScore);
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                    endOfGame();
                }
                // return "User win"
            } else if (computerSelection == "scissors") {
                computerScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You lose! Scissors beats paper."
                choices.appendChild(divScore);
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                    endOfGame();
                }
                // return "User lose"
            } else {
                computerScore += 1;
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = `Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`
                choices.appendChild(divScore);
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                    endOfGame();
                }
                // return "Tie"
            }
        } else if (userSelection == "scissors") {
            if (computerSelection == "rock") {
                computerScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You lose! Rock beats scissors."
                choices.appendChild(divScore);
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                    endOfGame();
                }
                // return "User lose"
            } else if (computerSelection == "paper") {
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You win! Scissors beats paper."
                choices.appendChild(divScore);
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                    endOfGame();
                }
                // return "User win"
            } else {
                computerScore += 1;
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = `Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`
                choices.appendChild(divScore);
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                    endOfGame();
                }
                // return "Tie"
            }
        }

    }

}

// Function for ramdom choice of the computer 
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
