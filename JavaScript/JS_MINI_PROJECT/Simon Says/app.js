// Creating containers to store color sequence

let gameSeq =[];
let userSeq = [];
let started =false; //Detects if game started or not 
let level =0; //Tracking levels
let h2 = document.querySelector('h2');
let btns =["pink","blue","yellow","purple"];
let highestScore =0;


//Step 1 : Start the game by any key press anywhere on the entire document
document.addEventListener("keypress",()=>{
    if(!started){
        console.log("Game started !");
        started=true;
        gameSeq=[];
        level=0;
        levelUp();
    }
});

//Step 2: Starting level  and button flashing

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },250);
}
function bgFlash(){
    document.querySelector('body').classList.add('bgFlash');
    setTimeout(()=>{
        document.querySelector('body').classList.remove('bgFlash');
    },250)
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randBtn = document.querySelector(`.${btns[randIdx]}`);
    gameSeq.push(btns[randIdx]);
    gameFlash(randBtn);
}

function matchSeq(idx){
    if(gameSeq[idx] == userSeq[idx]){
        if(idx == level-1){ // If end of gameSeq
            setTimeout(()=>{},1000);
            levelUp();
        }
    } else{
        highestScore = highestScore<level ? level : highestScore;
        h2.innerText=`Game Over ! Your Current Score : ${level} \n Your Highest Score : ${highestScore} , Press any key to restart`;
        bgFlash();  
        started= false;
    }
}

//Step 3 : User pressing button 
function btnPress(){
    // console.log(this);
    let pressedBtn = this;
    userFlash(pressedBtn);
    userSeq.push(pressedBtn.getAttribute('id'));
    matchSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(button of allBtns){
    button.addEventListener('click',btnPress);
}