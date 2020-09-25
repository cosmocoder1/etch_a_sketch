
const clearGrid = () => {
  let grid = document.getElementsByClassName('grid')[0];
  grid.remove();
  let footer = document.getElementsByClassName('footer')[0];
  footer.remove();
  let newGrid = parseInt(window.prompt('How many squares per side would you like your new grid to be?')) ** 2;
  startGrid(newGrid);
}

const clearGridFP = () => {
  let grid = document.getElementsByClassName('grid')[0];
  grid.remove();
  let footer = document.getElementsByClassName('footer')[0];
  footer.remove();
  let newGrid = parseInt(window.prompt('How many squares per side would you like your new grid to be?')) ** 2;
  fruityPebbles(newGrid);
}

const startGrid = (cells) => {
  
  
  let body = document.querySelector('body');
  let grid = document.createElement('div');
  let cell = document.createElement('div');
  let footer = document.createElement('div');


  grid.classList.add("grid");                        
  grid.style.gridTemplateRows = `repeat(${Math.floor(Math.sqrt(cells))}, ${(1 / Math.floor(Math.sqrt(cells))) * 100}%)`; 
  grid.style.gridTemplateColumns = `repeat(${Math.floor(Math.sqrt(cells))}, ${(1 / Math.floor(Math.sqrt(cells))) * 100}%)`; 
  
  footer.style.background = 'rgba(240, 0, 0, .9)';
  footer.style.height = '3em';
  footer.classList.add("footer");

  body.appendChild(grid);
  grid.appendChild(cell);
  body.appendChild(footer);


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

const fruityPebbles = (cells) => {
  
  
  let body = document.querySelector('body');
  let grid = document.createElement('div');
  let cell = document.createElement('div');
  let footer = document.createElement('div');

  grid.classList.add("grid");                        
  grid.style.gridTemplateRows = `repeat(${Math.floor(Math.sqrt(cells))}, ${(1 / Math.floor(Math.sqrt(cells))) * 100}%)`; 
  grid.style.gridTemplateColumns = `repeat(${Math.floor(Math.sqrt(cells))}, ${(1 / Math.floor(Math.sqrt(cells))) * 100}%)`; 
  
  footer.style.background = 'rgba(240, 0, 0, .9)';
  footer.style.height = '3em';
  footer.classList.add("footer");

  body.appendChild(grid);
  grid.appendChild(cell);
  body.appendChild(footer);

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
}

const runGame = () => {


  let header = document.createElement('div');
  let button = document.createElement('button');
  let button2 = document.createElement('button');
  let body = document.querySelector('body');

  header.classList.add('header');
  header.style.background = 'rgba(240, 0, 0, .9)';
  header.style.height = '3em';
  
  button.style.margin = '12px';
  button.style.fontFamily = 'Baloo Tammudu 2';
  button.innerHTML = 'Clear';
  button.classList.add('button');

  button2.classList.add('button2');
  button2.classList.add('button');
  button2.innerHTML = 'fruity pebbles';
  button2.style.fontFamily = 'Baloo Tammudu 2';


  body.appendChild(header);
  header.appendChild(button);
  header.appendChild(button2);
  

  document.querySelector('button').addEventListener('click', function() {

    clearGrid();

  });
  

  document.getElementsByClassName('button2')[0].addEventListener('click', function() {

    clearGridFP();

  });

}



runGame();
startGrid(16000);




