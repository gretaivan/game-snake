
let  grid = document.querySelector("#grid");

function createGrid() {
    for(let i = 0; i < 100; i++){
        let square = document.createElement('div'); 
        square.className = "square";
        grid.appendChild(square);
    }    
}

createGrid();

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square'); 
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    let currentIndex = 0; 
    let goalIndex = 0; 
    let snake = [2, 1, 0];

    let direction = 1; 
    let score = 0; 
    speed = 0.9; 
    let interavalTime = 0; 
    let interval = 0; 
    
//start/restart game

function startGame() {
    snake.forEach(index => squares[i].classList.remove('snake'));
    squares[goalIndex].classList.remove('apple');
    clearInterval(interval);
    //generateApple(); 
    direction = 1;
    scoreDisplay.innerText = score;
    interavalTime = 1000;
    snake = [2, 1, 0];
    currentIndex = 0; 
    snake.forEach(index => squares[index].classList.add('snake')); 
    interval = setInterval(moveOutcome, interavalTime);
    console.log()
};


//commands
function control(e) {
    squares[currentIndex].classList.remove('snake'); 

    if(e.keyCode === 39){ //39 right btn
        console.log("right")
        direction = 1;
    } else if (e.keyCode === 38){ //up btn
        console.log("up")
        direction = -width; 
    } else if (e.keyCode === 37){ //left btn
        console.log("left")
        direction--;
    } else if (e.keyCode === 40){ //down btn
        console.log("down")
        direction = +width; 
    } 
}

document.addEventListener('keyup', control);


});
