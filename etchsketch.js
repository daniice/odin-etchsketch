// create first landing grid
newGrid(16);

//create a grid with the specified number of squares
const butt = document.querySelector('#submit');
butt.addEventListener('click', (event) => {
    event.preventDefault();
    let num = document.getElementById('newNumberSquares').value;
    if (num>100) alert('More than 100 squares is impractical and dumb. Try again.')
    else { const container = document.querySelector('#container');
    container.innerHTML = '';
    newGrid(num);
    // num = null; - how to get number to leave the textbox after entry?
    } 
});

//function to create grid and hover effect
function newGrid(num) {
const container = document.querySelector('#container');

for (i=1; i<=num; i++) {
    const squareRow = document.createElement('div');
for (j=1; j<=num; j++) {
    const square = document.createElement('div');
    square.setAttribute('style', squareSide(num));
    square.classList.add('grid');
    squareRow.appendChild(square);
}
    container.appendChild(squareRow);
}

const squares = Array.from(document.getElementsByClassName('grid'));
squares.forEach(square => {
    square.addEventListener('mouseover', (event) => {
        let opa = Number(event.target.style.opacity);
        let newOpa = opa + 0.2;
        if (opa>0.2 && opa<1) { event.target.style.opacity = `${newOpa}`;
    }   else if (opa===1) { event.target.style.backgroundColor = 'black';
    }   else { 
            //have it randomly choose different color palettes?
            event.target.style.backgroundColor = `rgb(0, ${color()}, ${color()})`;
            event.target.style.opacity = '0.4';
}})});
}

//function to return random color
function color() {
    let colorNum = Math.round((Math.random()*255));
    return colorNum;
}

//function to find width/height of squares
function squareSide(num) {
    let width = (window.innerWidth + 16) / num;
    console.log('width' + width);
    let height = window.innerHeight / 1.55 / num;
    console.log('height' + height);
    //ideally this would be live responding to user resizing window
    if (window.innerWidth<=(window.innerHeight/1.55)) {
        return `width: ${width}px; height: ${width}px; opacity: 0.2;`
    }
    else {
        return `width: ${height}px; height: ${height}px; opacity: 0.2;`
    }
}