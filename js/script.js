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

