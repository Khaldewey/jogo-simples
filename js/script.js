const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");


var sec = 0;
var min = 0;
var hra = 0; 
var interval; 

function refresh(){
    location.reload();
}

// CRONÔMETRO 

function doisDigitos(digito){
    if(digito < 10){
        return('0'+digito);
    }else{
        return(digito);
    }
}

function start(){
    watch();
    interval = setInterval(watch,10);
}  

function stop(){
    sec = 0;
    min = 0; 
    clearInterval(interval);
    document.getElementById('watch').innerText='00:00:00';
} 

function watch(){
sec++;
if(sec==60){
    min++;
    sec=0;
    if(min == 60){
        hra++;
        min = 0;
    }
}
document.getElementById('score').innerText=doisDigitos(hra)+':'+doisDigitos(min)+':'+doisDigitos(sec);
} 


// COMPORTAMENTOS 

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
    
} 



const loop = setInterval(() =>{
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

//console.log(marioPosition);
//console.log(pipePosition);

if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
    pipe.style.animation = 'none';
    pipe.style.left = pipePosition+'px'; 

    mario.style.animation = 'none';
    mario.style.bottom = marioPosition+'px'; 

    mario.src = './img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px'; 
    stop();
    
    clearInterval(loop); 

}


},10) 

start();
document.addEventListener('keydown',jump);