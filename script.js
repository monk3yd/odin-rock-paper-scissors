// DOM
const div = document.querySelector("#buttons");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorBtn.textContent = "Scissors";

rockBtn.addEventListener('click', e => {
    let choice = e.target.innerText;
    startRound(choice, computerPlay);
});
paperBtn.addEventListener('click', e => {
    let choice = e.target.innerText;
    startRound(choice, computerPlay);
});
scissorBtn.addEventListener('click', e => {
    let choice = e.target.innerText;
    startRound(choice, computerPlay)
});

div.appendChild(rockBtn);
div.appendChild(paperBtn);
div.appendChild(scissorBtn);

results = document.querySelector("#results");

playerResult = document.createElement("p");
computerResult = document.createElement("p");

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
function startRound(playerSelection, computerPlay) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerPlay().toLowerCase();

    // Clean older result
    playerResult.textContent = '';
    computerResult.textContent = '';

    // Fill displayed result with player/computer choices
    playerResult.textContent = `Player makes: ${playerChoice}`;
    computerResult.textContent = `Computer makes: ${computerChoice}`;

    // Show results
    results.appendChild(playerResult);
    results.appendChild(computerResult);
    
    // Check for winner
    if (playerChoice === computerChoice) {
        // Draw
        return 0;
    } else if (playerChoice === "rock" && computerChoice === "scissor"  || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissor" && computerChoice === "paper") {
        // Player win
        return 1;
    } else {
        // PC win
        return 2;
    };
};

// Start game (series of rounds)
function gameOn() {
    // Counter score variables
    let playerScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    // for (let i = 0; i < 5; i++) {
    roundWinner = startRound(playerSelection, computerPlay);
    // console.log(roundWinner);
    
    if (roundWinner === 0) {  // draw
        console.log(`Round ${i + 1} is a draw`);
    } else if (roundWinner === 1) {  // player wins
        playerScore++;
        console.log(`Player wins round ${i + 1}`);
    } else {  // computer wins
        computerScore++;
        console.log(`Computer wins round ${i + 1}`);
    };
    // Announce winnner
    if (playerScore > computerScore) {
        console.log(`Player wins with a score of ${playerScore}/5`);
    } else {
        console.log(`Computer wins with a score of ${computerScore}/5`);
    };
};
