const container = document.querySelector('#container');
const gridButton = document.querySelector('#gridButton');
const clearButton = document.querySelector('#clearButton');
const rainbowButton = document.querySelector('#rainbowButton');
const eraserButton = document.querySelector('#eraserButton');
var squares = 16;
var rainbow = false;
var eraser = false;
var color = 000;

//button to change the number of squares
gridButton.addEventListener('click', () => {
    let answer = prompt('Choose a number between 1 and 64: ', '');
    if (answer > 64 || answer < 1) {
        alert('We only accept numbers between 1 and 64');
    } else if (answer < 65 && answer > 0) {
        squares = +answer;
        calcSquareSize(squares);
        container.innerHTML = ''
        createGrid(squares);
    } else {
        alert('Please type a number');
    }
    deactivateEraser();
});

//clear screen
clearButton.addEventListener('click', () => {
    container.innerHTML = ''
    createGrid(squares);
    deactivateEraser();
});

rainbowButton.addEventListener('click', () => {
    if (rainbow) {
        rainbow = false;
        rainbowButton.style.backgroundColor = 'aliceblue';
    } else {
        rainbowButton.style.backgroundColor = '#384558';
        rainbow = true;
        deactivateEraser();
    }
});

eraserButton.addEventListener('click', () => {
    if (eraser) {
        deactivateEraser();
    } else {
        eraserButton.style.backgroundColor = '#384558';
        eraser = true;
    }
});

function deactivateEraser() {
    eraser = false;
    eraserButton.style.backgroundColor = 'aliceblue';
}

//function to adapt squares to screen size
function calcSquareSize(squares) {
    if (window.innerWidth < 1000) {
        var size = ((window.innerWidth / squares) / 1.8);
    } else {
        var size = ((window.innerWidth / squares) / 3);
    }

    for (; size > window.innerWidth; size = size - 0.1) { }
    container.style.setProperty('--size', size + 'px');
};

//create and 'paint' squares
function createGrid(cols) {
    calcSquareSize(cols);

    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', cols);

    let squareSize = document.getElementById('container').clientWidth / cols;
    for (x = 1; x <= (cols * cols); x++) {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        const board = document.createElement('div');
        board.className = "board";

        container.appendChild(board);
        board.addEventListener('mouseover', () => {
            if (eraser) {
                board.style.backgroundColor = 'aliceblue';
            }
            else if (rainbow) {
                board.style.backgroundColor = "#" + color;
            }
            else {
                board.style.backgroundColor = 'black';
            }
        })
    }
}

createGrid(16);
