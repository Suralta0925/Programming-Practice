const choices = ['rock', 'paper', 'scissor'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerScoreDisplay = 0;
let computerScoreDisplay = 0;

function playerChoice(choice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let results = '';
    if (choice === computerChoice){
        results = "IT'S A TIE";
    }
    else{
        switch (computerChoice){

            case "rock":
                results = (choice === "scissor") ? "YOU LOSE":"YOU WIN";
                break;
            case "paper":
                results = (choice === "rock") ? "YOU LOSE":"YOU WIN";
                break;
            case "scissor":
                results = (choice === "paper") ? "YOU LOSE":"YOU WIN";
                break;
        }
    }
    resultDisplay.textContent = results;
    resultDisplay.classList.remove('win','lose')
    if (results === "YOU WIN"){
        resultDisplay.classList.add("win");
        playerScoreDisplay++;
    } 
    else if(results === "YOU LOSE"){
        resultDisplay.classList.add("lose");
        computerScoreDisplay++;
    } 

    

    playerDisplay.innerText = `PLAYER: ${choice}`;
    computerDisplay.innerText = `COMPUTER: ${computerChoice}`;

    playerScore.textContent = `Player Score: ${playerScoreDisplay}`;
    computerScore.textContent = `Computer Score: ${computerScoreDisplay}`;
}