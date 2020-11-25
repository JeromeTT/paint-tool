const base = document.querySelector('body');

// Add edit button
const btn = document.createElement('button');
btn.classList.add('edit')
btn.setAttribute('style', 'width: 100px; height: 50px;')
btn.textContent = "Change Dimensions";
base.appendChild(btn);

// Add Clear All
const clearAll = document.createElement('button');
clearAll.classList.add('clear');
clearAll.setAttribute('style', 'width: 100px; height: 50px;')
clearAll.textContent = 'Clear All';
base.appendChild(clearAll)

// Add container div
const container = document.createElement('div');
container.classList.add('container');
container.setAttribute('ondragstart', 'return false;')
base.appendChild(container);

// Add 16x16 grid
createGrid(16, 16)

// Clear All Functionality
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    let chdlist = container.children
    for (i = 0; i < chdlist.length; i++) {
        chdlist[i].style["background-color"] = "white"; 
    }
});

// Edit Button functionality
const editBtn = document.querySelector('.edit');
editBtn.addEventListener('click', function(e) {
    let xnum = window.prompt('How many columns? (max 100)');
    let ynum = window.prompt('How many rows? (max 100)');
    if (xnum > 100) {
        xnum = 100;
    };
    if (ynum > 100) {
        ynum = 100;
    };   
    // Removing the old grid
    const grid = document.querySelector('.container');
    grid.innerHTML = ''; 
    // Creating new grid
    createGrid(xnum, ynum);
});

// Grid Function
// Creates a grid of divs with specificed x,y in the container class.
function createGrid(x,y) {
    for (i = 0; i < x*y; i ++) {
        const box = document.createElement('div');
        box.classList.add('square');
        box.setAttribute('style', 'width:'+1000/x+'px; height:'+1000/x+'px;');
        document.querySelector('.container').append(box); 
    };
    refreshDraw()
};

// Draw Function
// Event listener for hovering.

function refreshDraw() {
    const squares = document.querySelectorAll('.square');
    let held = false;

    // mousedown and mouseup need a variable to store whether it is being held.
    squares.forEach((square) => {
        square.addEventListener('mousedown', function(e) {
            held = true;
            e.target.style.background = 'red';
        });
    });

    squares.forEach((square) => {
        square.addEventListener('mouseup', function(e) {
            held = false;
        });
    });
    // adds some dragging ability
    squares.forEach((square) => {
        square.addEventListener('mousemove', function(e) {
            if (held == true) {
                e.target.style.background = 'red';
            };
        });
    });
};