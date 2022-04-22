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

// Main function of playing 
function playRound(userSelection, computerSelection) {

    // The playing goes while user or computer don't reach 5 points
    if (userScore < 5 && computerScore < 5) {

        computerSelection = computerPlays();

        if (userSelection == "rock") {
            if (computerSelection == "paper") {
                const divScore = document.createElement('div');
                divScore.textContent = "You lose! Paper beats rock."
                choices.appendChild(divScore);
                computerScore += 1;
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                }
                // return "User lose"
            } else if (computerSelection == "scissors") {
                const divScore = document.createElement('div');
                divScore.textContent = "You win! Rock beats scissors."
                choices.appendChild(divScore);
                userScore += 1;
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                }
                // return "User win"
            } else {
                const divScore = document.createElement('div');
                divScore.textContent = `Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`
                choices.appendChild(divScore);
                computerScore += 1;
                userScore += 1;
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                }
                // return "Tie"
            }
        } else if (userSelection == "paper") {
            if (computerSelection == "rock") {
                const divScore = document.createElement('div');
                divScore.textContent = "You win! Paper beats rock."
                choices.appendChild(divScore);
                userScore += 1;
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                }
                // return "User win"
            } else if (computerSelection == "scissors") {
                const divScore = document.createElement('div');
                divScore.textContent = "You lose! Scissors beats paper."
                choices.appendChild(divScore);
                computerScore += 1;
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                }
                // return "User lose"
            } else {
                const divScore = document.createElement('div');
                divScore.textContent = `Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`
                choices.appendChild(divScore);
                computerScore += 1;
                userScore += 1;
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                }
                // return "Tie"
            }
        } else if (userSelection == "scissors") {
            if (computerSelection == "rock") {
                const divScore = document.createElement('div');
                divScore.textContent = "You lose! Rock beats scissors."
                choices.appendChild(divScore);
                computerScore += 1;
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                }
                // return "User lose"
            } else if (computerSelection == "paper") {
                const divScore = document.createElement('div');
                divScore.textContent = "You win! Scissors beats paper."
                choices.appendChild(divScore);
                userScore += 1;
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
                }
                // return "User win"
            } else {
                const divScore = document.createElement('div');
                divScore.textContent = `Tie! You and the computer chose ${userSelection}!\nBoth get 1 point.`
                choices.appendChild(divScore);
                computerScore += 1;
                userScore += 1;
                console.log("Computer Score: " + computerScore + "\nUser Score: " + userScore)
                if (userScore == 5 || computerScore == 5) {
                    const endOfPlay = document.createElement('div');
                    endOfPlay.textContent = "End of play!"
                    choices.appendChild(endOfPlay);
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
