
let gridSize = 16;
const container = document.querySelector('.container');

<<<<<<< HEAD
for(i=1; i<=(16*16); i++){
    let gridSquare = document.createElement('div');
=======
function generateGrid(){
    for(i=1; i<=(gridSize*gridSize); i++){
    const gridSquare = document.createElement('div');
>>>>>>> resetfunction
    // gridSquare.className = gridSquare;
    gridSquare.setAttribute('class', 'gridSquare');
    // gridSquare.textContent =[i];
    container.appendChild(gridSquare);
};

const gridSq = document.querySelectorAll('.gridSquare');
console.log(gridSq)
/*******eventlistener for each square********/
gridSq.forEach((square) => {
    square.addEventListener('mouseenter', changeColor);
});

/*******change color function********/
let randClr = Math.floor(Math.random() * 360)
function changeColor(e) {
    e.target.style.backgroundColor = `hsl(${randClr}, 100%, 50%)`;
    

    
    /*******reset color for each square********/
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 5500);
};
};

generateGrid();

function reset() {
    let answer = parseInt(window.prompt("choose a grid size:", "1-100"));
    console.log(answer)
     if (answer > 100 || answer < 1) {
         alert('the number passed in needs to be in the 1-100 range');
     } else {
        gridSize = answer;
        container.style.setProperty('--grid-size', `${answer}`)
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        generateGrid();
    }
}