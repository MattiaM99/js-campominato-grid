const container = document.querySelector('.container');
const listNumber = [];
const btn = document.querySelector("#start");
const scegli = document.querySelector("#select");

btn.addEventListener("click", function(){

  let difficulty ;

  let valoreSelect = scegli.value;

  if (valoreSelect == "easy"){
    difficulty = 'easy';
    console.log(difficulty);
    
  } else if (valoreSelect == "hard"){
    difficulty = 'hard';
    console.log(difficulty);
    
  }else if (valoreSelect == "crazy"){
    difficulty= 'crazy';
    console.log(difficulty);
  }
});


function init(difficulty){
  for (let i = 0; i < difficulty; i++){
    const square = createSquare(container);
    square.innerHTML = i + 1;
    square.addEventListener("click", function(){
      this.classList.add("block");
      if(difficulty < 50){
        this.classList.add("crazy");
      }else if(difficulty < 82 && difficulty > 49){
        this.classList.add("hard");
      }else {
        this.classList.add("easy");
      }
    });
  }
}

function createSquare(target){
  const square = document.createElement('div');
  square.className = "square";
  target.append(square);
  return square;
}
