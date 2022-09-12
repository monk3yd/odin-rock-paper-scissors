// DOM ---
// Choice Results
const resultsContainer = document.querySelector("#results");
const paraPlayerResult = document.createElement("p");
const paraComputerResult = document.createElement("p");

// Score
const scoreContainer = document.querySelector("#score-container");
const paraScore = document.createElement("p");

// Computers turn
function computerPlay() {
    // Array of possible NPC plays
    let playsPossible = ["Rock", "Paper", "Scissor"];

    // Get random number between 0 and 2 inclusive
    const random = Math.floor(Math.random() * playsPossible.length);
    
    // console.log(random, playsPossible[random]);

    // Return random computer play 
    return playsPossible[random];
};

// Start a round (1 move each player)
function startRound(playerChoice, computerPlay) {
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = computerPlay().toLowerCase();

    // Clean older result
    paraPlayerResult.textContent = '';
    paraComputerResult.textContent = '';

    // Fill displayed result with player/computer choices
    paraPlayerResult.textContent = `Player makes: ${playerChoice}`;
    paraComputerResult.textContent = `Computer makes: ${computerChoice}`;

    // Show results
    resultsContainer.appendChild(paraPlayerResult);
    resultsContainer.appendChild(paraComputerResult);
    
    // Check for winner
    if (playerChoice === computerChoice) {
        // Draw
        return 0;
    } else if (playerChoice === "rock" && computerChoice === "scissor"  || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissor" && computerChoice === "paper") {
        // Player win
        return 1;
        // console.log(`Player wins round ${i + 1}`);
    } else {
        // PC win
        return 2;
        // console.log(`Computer wins round ${i + 1}`);
    };
};

function calcScore(roundWinner, playerScore, computerScore) {
    if (roundWinner === 1) {
        playerScore++;
    } else if (roundWinner === 2) {
        computerScore++;
    } else {
        return "Draw.";
    }
    paraScore.textContent = ``;
    paraScore.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    scoreContainer.appendChild(paraScore);
    return [playerScore, computerScore];
};

function checkEndGame(roundCounter) {
    if (roundCounter > 5) {
        // Announce winnner
        if (playerScore > computerScore) {
            console.log(`Player wins with a score of ${playerScore}/5`);
        } else {
            console.log(`Computer wins with a score of ${computerScore}/5`);
        };
    }
};

// Counter score variables
let playerScore = 0;
let computerScore = 0;

// Round counter variable
let roundCounter = 0;

// Attach events to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let choice = e.target.innerText;
        let roundWinner = startRound(choice, computerPlay);
        let scores = calcScore(roundWinner, playerScore, computerScore);
        playerScore = scores[0];
        computerScore = scores[1];
        roundCounter++;
        checkEndGame(roundCounter);
    });
});

// Play 5 rounds
console.log(`Round: ${roundCounter}`);
