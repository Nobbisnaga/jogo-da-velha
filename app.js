const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");

let ifCircleTurn;

const starGame = () => {
    for(const cell of cellElements) {
        cell.addEventListener('click', handleClick, { once: true });
    }
    ifCircleTurn = false;
    board.classList.add('x');
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
};
/////////////////////////////////////////////////////////////
const swapTurns = () => {
    ifCircleTurn = !ifCircleTurn

    board.classList.remove('circle');
    board.classList.remove('x');

    if(ifCircleTurn) {
        board.classList.add('circle')
    }else{
        board.classList.add('x')
    }
};
/////////////////////////////////////////////////////////////
const handleClick = (e) => {

    const cell = e.target;
    const classToAdd = ifCircleTurn ? 'circle' : 'x';

    placeMark(cell, classToAdd);

    swapTurns();
};

startGame();