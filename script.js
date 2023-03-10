const container = document.querySelector('#container');
const gridButton = document.querySelector('#gridButton');
const clearButton = document.querySelector('#clearButton');
const rainbowButton = document.querySelector('#rainbowButton');
var squares = 16;
var rainbow = false;
var color = 000;

//button to change the number of squares
gridButton.addEventListener('click', () => {
    let answer = prompt('Choose a number between 1 and 64: ', '');
    if(answer > 64 || answer < 1){
        alert('We only accept numbers between 1 and 64');     
    }else if (answer < 65 && answer> 0){
        squares = +answer;
        calcSquareSize(squares);       
        container.innerHTML = ''
        createGrid(squares);
    }else{
        alert('Please type a number');
    }   
})
//clear screen
clearButton.addEventListener('click', () => {
    container.innerHTML = ''
    createGrid(squares);
})

rainbowButton.addEventListener('click', () => {
    rainbow = true;
})

//function to adapt squares to screen size
function calcSquareSize(squares){
    var size = 400;
    for(;size * squares > 400; size = size - 0.1){}
    container.style.setProperty('--size', size + 'px');
    container.style.setProperty('--size', size + 'px'); 
}

//create and 'paint' squares
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
