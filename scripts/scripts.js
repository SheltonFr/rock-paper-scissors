let playerScore = 0;
let computerScore = 0;

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

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerSelection();
        const playerSelection = window.prompt('Rock Paper or Scissors?');
        console.log(playRound(playerSelection, computerSelection));
    }

    alert(`player: ${playerScore} - computer: ${computerScore}`);
}

game();
