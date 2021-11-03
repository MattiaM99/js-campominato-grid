document.getElementById('start').addEventListener('click', function() {
  start()
});

function start(){
  const levels = parseInt(document.getElementById('select').value);
  const gridLevels = [100,81,49];
  const numeroCelle = gridLevels[levels-1];
  const cellClasses = ['easy', 'hard', 'crazy'];
  const cellClass = cellClasses[levels-1];
  const cellsPerRow = Math.sqrt(numeroCelle);
  const BOMBS_NUMBER = 16;
  const bombs = generateBombs();
  console.log(cellsPerRow);
  console.log(bombs);
  console.log(numeroCelle);
  console.log(cellClass);
  document.querySelector('main').innerHTML ='';
  generatePlayGround();

  // funzione che genera la griglia
  function generatePlayGround(){
    const griglia = document.createElement('div');
    griglia.className = 'griglia';
    for (let i = 0; i < numeroCelle; i++) {
      const cella = document.createElement('div');
      cella.className = 'cella';        
      cella.innerHTML = `<span>${i}</span>`;                
      const cellSize = `calc(100% / ${cellsPerRow})`;   
      cella.style.width = cellSize;
      cella.style.height = cellSize;
      cella.addEventListener('click',function(){
        this.classList.add('clicked');
      })

      griglia.append(cella);

    }

    document.querySelector('main').append(griglia);
  }

  // funzione che genera le bombe
  function generateBombs(){
    const bombs = [];
    console.log('bombs number', BOMBS_NUMBER);
    while(bombs.length < BOMBS_NUMBER){
      const bomb = getRandomInt(1, numeroCelle);
      if(!bombs.includes(bomb)) bombs.push(bomb);
    }
    return bombs;
  }
};

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}