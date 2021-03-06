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
        document.location.reload();;
    });
}

function showWinner() {
    const endOfPlay = document.createElement('div');
    if (userScore > computerScore) {
        endOfPlay.textContent = "End of play! YOU WON!"
    } else if (userScore < computerScore) {
        endOfPlay.textContent = "End of play! The computer won!"
    } else {
        endOfPlay.textContent = "End of play! It's a TIE!"
    }
    choices.appendChild(endOfPlay);
    endOfGame();
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
                if (userScore == 5 || computerScore == 5) {
                    showWinner();
                }
            } else if (computerSelection == "scissors") {
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You win! Rock beats scissors."
                choices.appendChild(divScore);
                if (userScore == 5 || computerScore == 5) {
                    showWinner();
                }
            } else {
                computerScore += 1;
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = `Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`
                choices.appendChild(divScore);
                if (userScore == 5 || computerScore == 5) {
                    showWinner();
                }
            }
        } else if (userSelection == "paper") {
            if (computerSelection == "rock") {
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You win! Paper beats rock."
                choices.appendChild(divScore);                
                if (userScore == 5 || computerScore == 5) {
                    showWinner();
                }
            } else if (computerSelection == "scissors") {
                computerScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You lose! Scissors beats paper."
                choices.appendChild(divScore);                
                if (userScore == 5 || computerScore == 5) {
                    showWinner();
                }
            } else {
                computerScore += 1;
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = `Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`
                choices.appendChild(divScore);
                if (userScore == 5 || computerScore == 5) {
                    showWinner();
                }
            }
        } else if (userSelection == "scissors") {
            if (computerSelection == "rock") {
                computerScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You lose! Rock beats scissors."
                choices.appendChild(divScore);
                if (userScore == 5 || computerScore == 5) {
                    showWinner();
                }
            } else if (computerSelection == "paper") {
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = "You win! Scissors beats paper."
                choices.appendChild(divScore);
                if (userScore == 5 || computerScore == 5) {
                    showWinner();
                }
            } else {
                computerScore += 1;
                userScore += 1;
                showScore();
                const divScore = document.createElement('div');
                divScore.textContent = `Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`
                choices.appendChild(divScore);
                if (userScore == 5 || computerScore == 5) {
                    showWinner();
                }
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
