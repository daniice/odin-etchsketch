// create first landing grid
const container = document.querySelector('#container');
for (i=1; i<=256; i++) {
    const square = document.createElement('div');
    square.classList.add('firstGrid');
    container.appendChild(square);
}

const squares = Array.from(document.getElementsByClassName('firstGrid'));
squares.forEach(square => {
    square.addEventListener('mouseover', square.classList.add('firstGridHover'));
});

//for (i=0; i<(numberSquares+1); i++)