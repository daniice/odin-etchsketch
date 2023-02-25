// create first landing grid
newGrid(16);

//create a grid with the specified number of squares
const butt = document.querySelector('#submit');
butt.addEventListener('click', (event) => {
    event.preventDefault();
    let num = document.getElementById('newNumberSquares').value;
    console.log('hi');
    const container = document.querySelector('#container');
    container.innerHTML = '';
    newGrid(num);
});

//function to create grid
function newGrid(num) {
const container = document.querySelector('#container');
let widthVw = 1/num * 90;
for (i=1; i<=(num*num); i++) {
    const square = document.createElement('div');
    square.setAttribute('style', `width: ${widthVw}vw; height: ${widthVw}vw;`);
    square.classList.add('grid');
    container.appendChild(square);
}

const squares = Array.from(document.getElementsByClassName('grid'));
squares.forEach(square => {
    square.addEventListener('mouseover', (event) => {
        event.target.classList.add('gridHover');
    })});
}