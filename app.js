const clearGrid = () => {
  let newGrid = parseInt(window.prompt('How many squares per side would you like your new grid to be?'));
  startGrid(newGrid);
}

const startGrid = (cells) => {
  let button = document.createElement('button');
  let body = document.querySelector('body');
  let grid = document.createElement('div');
  let cell = document.createElement('div');

  button.innerHTML = 'Clear';
  grid.classList.add("grid");
  
  body.appendChild(button);
  body.appendChild(grid);
  grid.appendChild(cell);

  document.querySelector('button').addEventListener('click', clearGrid);

  for (let i = 2; i <= cells; i++) {
      let newCell = document.createElement('div');  
      newCell.class = `newCell${i}`;
      newCell.classList.add(`unit`);
      newCell.addEventListener('mouseenter', function() {
        newCell.style.background = 'black';
      });
      grid.appendChild(newCell);
  }
}


startGrid(16384);