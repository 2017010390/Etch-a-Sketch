const DEFALT_COLOR = '#333333';

let currentSize = 4;

const setSize = document.querySelector('#setSize');
const grid = document.querySelector('.container');

setSize.addEventListener('click', () => {
    const value = prompt("input size","4");
    if(value > 100) value = 100;
    changeSize(+value);
});

function createGrid(size)
{
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 1; i <= size*size; ++i)
    {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        grid.appendChild(gridElement);
    }
}

/**
 * set grid-element background color
 * @param {object} e 
 */
function changeColor(e)
{
    e.target.style.backgroundColor = DEFALT_COLOR;
}

function changeSize(size)
{
    setCurrentSize(size);
    updateGrid();
}

function setCurrentSize(newSize)
{
    currentSize = newSize;
}

function updateGrid()
{
    clearGrid();
    createGrid(currentSize);
}

function clearGrid()
{
    grid.innerHTML = '';
}
window.onload = () => {
    createGrid(4);
}