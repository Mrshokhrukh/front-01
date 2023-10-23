'strict mode'

let gameTypes = ['rock', 'paper', 'scissors'];


let player = document.querySelector('.player_side h1')
let comp = document.querySelector('.comp_side h1');
let plScore = document.querySelector('.player');
let cmScore = document.querySelector('.comp');
let draw = document.querySelector('.draw');

function gameStart(playerOpt) {
    let randomNum = Math.floor(Math.random() * 3);
    player.innerHTML = playerOpt;
    comp.innerHTML = gameTypes[randomNum]

    checkWin(gameTypes[randomNum], playerOpt)
}

let computerScore = 0;
let playerScore = 0;

function checkWin(comp, player) {
    if (comp == 'rock' && player == 'scissors') {
        computerScore++
    } else if (comp == 'scissors' && player == 'paper') {
        computerScore++
    } else if (comp == 'paper' && player == 'rock') {
        computerScore++
    }
    else if (comp == 'paper' && player == 'scissors ') {
        playerScore++
    } else if (comp == 'rock' && player == 'paper') {
        playerScore++
    }
    else if (comp == 'scissors' && player == 'rock') {
        playerScore++
    }
    if (player == comp) {
        draw.innerHTML = 'draw'
    } else {
        draw.innerHTML = ''
    }
    plScore.innerHTML = `player : ${playerScore}`
    cmScore.innerHTML = `computer : ${computerScore}`
};

