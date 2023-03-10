const container = document.querySelector('#container');
const gridButton = document.querySelector('#gridButton');
const clearButton = document.querySelector('#clearButton');
const rainbowButton = document.querySelector('#rainbowButton');
var squares = 16;
var rainbow = false;
var color = 000;

gridButton.addEventListener('click', () => {
    squares = prompt('Choose a number between 1 and 64: ', '');
    if(squares > 64 || squares < 1){
        alert('We only accept numbers between 1 and 64');
    }else if (squares < 65 && squares > 0){
        calcSquareSize(squares);       
        container.innerHTML = ''
        createGrid(squares);
    }else{
        alert('Please type a number');
    }   
})

clearButton.addEventListener('click', () => {
    container.innerHTML = ''
    createGrid(squares);
})

rainbowButton.addEventListener('click', () => {
    rainbow = true;
})

function calcSquareSize(squares){
    var size = 350;
    for(;size * squares > 350; size = size - 1){}
    container.style.setProperty('--size', size + 'px');
    container.style.setProperty('--size', size + 'px'); 
    document.getElementById("container").style.gridTemplateColumns = "repeat(var(--grid-cols), var(--size))";
    document.getElementById("container").style.gridTemplateRows = "repeat(var(--grid-cols), var(--size))";
}

function createGrid(cols){
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', cols); 

    
    
    let squareSize = document.getElementById('container').clientWidth / cols;
    for(x = 1; x <= (cols * cols); x++) {
        const color = Math.floor(Math.random()*16777215).toString(16);   
        const board = document.createElement('div');
        board.className = "board";
        container.appendChild(board);
        board.addEventListener('mouseover', () => {
            if(rainbow){
                board.style.backgroundColor = "#" + color;
            }  
            else{
                board.style.backgroundColor = 'black';
            }
        })
    }
}

createGrid (16);
