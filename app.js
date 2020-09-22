

const startGrid = (cells) => {
  let body = document.querySelector('body');
  let grid = document.createElement('div');
  let cell = document.createElement('div');
  

  body.appendChild(grid);
  grid.appendChild(cell);

  for (let i = 0; i <= cells; i++) {
      let newCell = document.createElement('div');  
      newCell.class = `newCell${i}`;
      grid.appendChild(newCell);
  }
}


startGrid(256);