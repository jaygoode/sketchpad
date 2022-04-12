
const container = document.querySelector('.container');

for(i=0; i<=(16*16); i++){
    let gridSquare = document.createElement('div');
    gridSquare.className = gridSquare;
    gridSquare.setAttribute('class', 'gridSquare')
    gridSquare.textContent =[i];
    container.appendChild(gridSquare);
};
