let Elements = document.querySelectorAll('[data_item]')

let X_TURN = 'X';
let CIRCLE_TURN = 'O';

let playerTurn;

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
        v.addEventListener('click', handleClick, { once: true });
    })
}

function handleClick(e) {
    playerTurn = playerTurn === X_TURN ? CIRCLE_TURN : X_TURN;
    let clickedBox = e.target;
    selected(clickedBox, playerTurn);

    if (isWon()) {
        console.log('asd,,,');
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