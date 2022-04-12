
const container = document.querySelector('.container');

for(i=1; i<=(16*16); i++){
    const gridSquare = document.createElement('div');
    gridSquare.className = gridSquare;
    gridSquare.setAttribute('class', 'gridSquare');
    gridSquare.textContent =[i];
    container.appendChild(gridSquare);
};

let gridSq = document.querySelectorAll('.gridSquare');

gridSq.forEach((square) => {
    square.addEventListener('mouseenter', changeColor);
});

function changeColor(e) {
    e.target.style.backgroundColor = "black";
    setTimeout()
};

setTimeout(function(e) {
    e.target.style.backgroundColor = "";
  }, 500);