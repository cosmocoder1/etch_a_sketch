

const startGrid = (columns, rows) => {
  let body = document.querySelector('body');
  let newRow = document.createElement('div');

  body.appendChild(newRow);

  let id = 0

  for (let i = 0; i < columns; i++) {
    let newDiv = document.createElement('div');  
    newDiv = `newDiv${id}`;
    newRow.appendChild(`newDiv${id}`);
    id += 1;
  }
  
  }


startGrid(16, 0);