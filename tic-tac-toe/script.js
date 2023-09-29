let Elements = document.querySelectorAll('[data_item]')
let turn = document.querySelector('.turn')
let X_TURN = 'X';
let CIRCLE_TURN = 'O';
let currentTurn;
let winningTextClass = document.querySelector('.winning_text');
let winningText = document.querySelector('.winning_text h2');
let playerTurn = X_TURN;


let winningCominations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
]

startGame();

function startGame() {
    Elements.forEach(v => {
        winningTextClass.classList.remove('show');
        v.classList.remove(X_TURN)
        v.classList.remove(CIRCLE_TURN)
        v.innerHTML = ''
        v.addEventListener('click', handleClick, { once: true });
    })
}

function handleClick(e) {
    turn.innerHTML = `${playerTurn} turn`
    playerTurn = playerTurn === X_TURN ? CIRCLE_TURN : X_TURN;
    let clickedBox = e.target;
    selected(clickedBox, playerTurn);
    currentTurn = currentTurn == X_TURN ? CIRCLE_TURN : X_TURN

    if (isWon()) {
        gameOver(currentTurn)
    } else {
        if (isDraw()) {
            turn.innerHTML = `draw`
            winningText.innerHTML = `draw`
            winningTextClass.classList.add('show');
        }
    }
}

function isDraw() {
    return winningCominations.every((v, i) => {
        return Elements[i].classList.contains(X_TURN) || Elements[i].classList.contains(CIRCLE_TURN)
    })
}

function gameOver(won) {
    if (won) {
        winningText.innerHTML = `${currentTurn} is won`
        winningTextClass.classList.add('show');
    }
}

function selected(box, playerTurn) {
    box.classList.add(playerTurn);
    box.innerText = playerTurn;
}

function isWon() {
    return winningCominations.some((v) => {
        return v.every((index) => {
            return Elements[index].classList.contains(playerTurn)
        })
    })
}