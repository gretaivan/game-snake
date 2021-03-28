
let  grid = document.querySelector("#grid");

function createGrid() {
    for(let i = 0; i < 100; i++){
        let square = document.createElement('div'); 
        square.className = "square";
        grid.appendChild(square);
    }    
}

createGrid();