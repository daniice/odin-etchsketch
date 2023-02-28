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
let widthVw = 1/num * 90;
for (i=1; i<=(num*num); i++) {
    const square = document.createElement('div');
    square.setAttribute('style', `width: ${widthVw}vw; height: ${widthVw}vw; opacity: 0.2`);
    square.classList.add('grid');
    container.appendChild(square);
}

const squares = Array.from(document.getElementsByClassName('grid'));
squares.forEach(square => {
    square.addEventListener('mouseover', (event) => {
        let opa = Number(event.target.style.opacity);
        console.log(opa);
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