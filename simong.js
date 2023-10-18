let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game is started");
    started = true;
    levelup();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
      btn.classList.remove("userflash");
    }, 250);
  }

function levelup() {
  userSeq =[];
  level++;
  h2.innerText = `Level ${level}`;
  
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameflash(randBtn);
}
function checkans(idx){

     
    // let idx = level -1;


    if(userSeq[idx] === gameSeq[idx]){
         if(userSeq.length == gameSeq.length){
        setTimeout(levelup, 1000);
        }

     } else{
        h2.innerHTML = `Game over ! Your score was <b>${level}.</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red" ;
        setTimeout( function(){
          document.querySelector("body").style.backgroundColor = "white" ;
        }, 150);

        
        reset();
     }
}

function btnpress (){
    // console.log(this);
    let btn = this;
    userflash(btn);
    usercolor =  btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
    

}

let allbtns = document.querySelectorAll(".button");
for (button of allbtns) {
    button.addEventListener("click", btnpress );

}

function reset(){
  started = false
  gameSeq = [];
  userSeq = [];
  level = 0;
}
