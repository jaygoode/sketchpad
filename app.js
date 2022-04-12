
const container = document.querySelector('.container');

for(i=1; i<=(16*16); i++){
    const gridSquare = document.createElement('div');
    gridSquare.className = gridSquare;
    gridSquare.setAttribute('class', 'gridSquare');
    gridSquare.textContent =[i];
    container.appendChild(gridSquare);
};

const gridSq = document.querySelectorAll('.gridSquare');

/*******eventlistener for each square********/
gridSq.forEach((square) => {
    square.addEventListener('mouseenter', changeColor);
});

/*******change color function********/
function changeColor(e) {
    e.target.style.backgroundColor = "black";
    

/*******reset color for each square********/
setTimeout(function() {
    e.target.style.backgroundColor = "";
  }, 1500);
};

function reset() {
    let answer = window.prompt("choose a grid size:", "1-100");
     
}