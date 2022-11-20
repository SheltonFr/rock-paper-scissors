const btns = document.querySelectorAll('.play');
const result = document.querySelector('.result');
const h3 = result.firstElementChild;

const pScore = document.querySelector('#player');
const cScore = document.querySelector('#computer');




let playerScore = 0;
let computerScore = 0;

pScore.textContent = playerScore;
cScore.textContent = computerScore;

function getComputerSelection() {
    const weapons = ['rock', 'paper', 'scissors'];
    let x = Math.round(Math.random() * 2);
    return weapons[x];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return `Draw. Both choosed the same weapons, ${player}!`;
    } else if (player === 'rock' && computer === 'paper') {
        computerScore++;
        return 'Computer win! Paper beats rock!';
    } else if (player === 'rock' && computer === 'scissors') {
        playerScore++;
        return 'You win! rock beats scissors!';
    } else if (player === 'scissors' && computer === 'rock') {
        computerScore++;
        return 'Computer win! rock beats scissors';
    } else if (player === 'scissors' && computer === 'paper') {
        playerScore++;
        return 'You win! Scissors beats paper'
    } else if (player === 'paper' && computer === 'rock') {
        playerScore++;
        return 'You win! Paper beats rock!';
    } else if (player === 'paper' && computer === 'scissors') {
        computerScore++;
        return 'Computer win! Scissors beat rock!';
    }

}


const displayResult  = function(roundResult) {
    h3.textContent = roundResult;
}

const updateScores = function() {
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

const getWinner = function() {
    if(playerScore == 5 || computerScore == 5) {
        let winner = (playerScore == 5) ? 'Player' : 'Computer';
        alert(`${winner} have won the game!!!`);

        playerScore = 0;
        computerScore = 0;
        updateScores();
    } 
}

function game(playerSelection) {
    const computerSelection = getComputerSelection();
    let roundResult = playRound(playerSelection, computerSelection);
    displayResult(roundResult);
    updateScores();
    getWinner();
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        game(btn.getAttribute('id'));
    })
})

