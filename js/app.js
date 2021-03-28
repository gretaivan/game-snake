
let  grid = document.querySelector("#grid");

function createGrid() {
    for(let i = 0; i < 100; i++){
        let square = document.createElement('div'); 
        square.className = "square";
        grid.appendChild(square);
    }    
}

createGrid();

document.addEventListener('DOMContentLoader', () => {
    const squares = document.querySelectorAll('.square'); 
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    let currentIndex = 0; 
    let goalIndex = 0; 
    let snake = [2, 1, 0];
});