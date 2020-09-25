const clearGrid = () => {
  let newGrid = parseInt(window.prompt('How many squares per side would you like your new grid to be?')) ** 2;
  startGrid(newGrid);
}

const clearGridFP = () => {
  let newGrid = parseInt(window.prompt('How many squares per side would you like your new grid to be?')) ** 2;
  fruityPebbles(newGrid);
}


const startGrid = (cells) => {

  
  let header = document.createElement('div');
  let button = document.createElement('button');
  let button2 = document.createElement('button');
  let body = document.querySelector('body');
  let grid = document.createElement('div');
  let cell = document.createElement('div');
  let footer = document.createElement('div');

  header.classList.add('header');
  header.style.background = 'rgba(240, 0, 0, .9)';
  footer.style.background = 'rgba(240, 0, 0, .9)';
 

  header.style.height = '3em';
  footer.style.height = '3em';

  button.style.margin = '12px';
  button.style.fontFamily = 'Baloo Tammudu 2';
  button.innerHTML = 'Clear';

  button2.classList.add('button2');
  button2.innerHTML = 'fruity pebbles';
  button2.style.fontFamily = 'Baloo Tammudu 2';

  grid.classList.add("grid");                                                     
  grid.style.gridTemplateRows = `repeat(${Math.floor(Math.sqrt(cells))}, ${(1 / Math.floor(Math.sqrt(cells))) * 100}%)`; 
  grid.style.gridTemplateColumns = `repeat(${Math.floor(Math.sqrt(cells))}, ${(1 / Math.floor(Math.sqrt(cells))) * 100}%)`; 
  
  body.appendChild(header);
  header.appendChild(button);
  header.appendChild(button2);
  body.appendChild(grid);
  body.appendChild(footer);
  grid.appendChild(cell);



  for (let i = 2; i <= cells; i++) {
      let newCell = document.createElement('div');  
      newCell.class = `newCell${i}`;
      newCell.classList.add(`unit`);
      newCell.addEventListener('mouseenter', function() {
        newCell.style.background = 'black';
      });
      grid.appendChild(newCell);
  }

  

  document.querySelector('button').addEventListener('click', function() {
    grid.remove();
    button.remove();
    button2.remove();
    body.removeChild(header);   
    clearGrid();
  });
  

  document.getElementsByClassName('button2')[0].addEventListener('click', function() {
    
    grid.remove();
    button.remove();
    button2.remove();
    body.removeChild(header);
    clearGridFP();
  });

}


const fruityPebbles = (cells) => {
  
  let header = document.createElement('div');
  let button = document.createElement('button');
  let button2 = document.createElement('button');
  let body = document.querySelector('body');
  let grid = document.createElement('div');
  let cell = document.createElement('div');
  let footer = document.createElement('div');


  header.style.background = 'rgba(240, 0, 0, .9)';
  footer.style.background = 'rgba(240, 0, 0, .9)';

  header.style.height = '3em';
  footer.style.height = '3em';

  button.style.margin = '12px';
  button.style.fontFamily = 'Baloo Tammudu 2';
  button.innerHTML = 'Clear';

  button2.classList.add('button2');
  button2.innerHTML = 'fruity pebbles';
  button2.style.fontFamily = 'Baloo Tammudu 2';

  grid.classList.add("grid");                        
  grid.style.gridTemplateRows = `repeat(${Math.floor(Math.sqrt(cells))}, ${(1 / Math.floor(Math.sqrt(cells))) * 100}%)`; 
  grid.style.gridTemplateColumns = `repeat(${Math.floor(Math.sqrt(cells))}, ${(1 / Math.floor(Math.sqrt(cells))) * 100}%)`; 
  
  body.appendChild(header);
  header.appendChild(button);
  header.appendChild(button2);
  body.appendChild(grid);
  body.appendChild(footer);
  grid.appendChild(cell);

const colorArray = ['FF0099', '66FF66', 'FFFF00', 'FF660', 'FF0033', '0099FF', 'FF9900']

  for (let i = 2; i <= cells; i++) {
      let newCell = document.createElement('div');  
      newCell.class = `newCell${i}`;
      newCell.classList.add(`unit`);
      newCell.addEventListener('mouseenter', function() {
      newCell.style.background = `#${colorArray[Math.floor(Math.random() * 7)]}`;
      });
      grid.appendChild(newCell);
  }

  

  document.querySelector('button').addEventListener('click', function() {
    
    grid.remove();
    button.remove();
    button2.remove();
    body.removeChild(header);
    clearGrid();
  });
  
  document.getElementsByClassName('button2')[0].addEventListener('click', function() {
    
    grid.remove();
    button.remove();
    button2.remove();
    body.removeChild(header);
    clearGridFP();
  });

  
}



startGrid(16000);