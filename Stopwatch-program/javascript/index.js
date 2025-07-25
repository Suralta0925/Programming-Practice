let display = document.getElementById("stopWatch");
let startBtn = document.getElementById("start");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startBtn.textContent = "Stop";
        startBtn.style.background = "red"
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    else{
        startBtn.textContent = "Start";
        startBtn.style.background = "green";
        clearInterval(timer);
        isRunning = false;
    }
}


function stop(){
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
    }
    
}

function reset(){
    if (!isRunning){
        clearInterval(timer);
        isRunning = false;
        elapsedTime = 0;
        startTime = 0;
        display.textContent = "00:00:00:00";
    }
    
}





function update(){  

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime/ (1000*60 * 60)).toString().padStart(2,0);
    let minutes = Math.floor(elapsedTime/ (1000*60) % 60).toString().padStart(2,0);
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2,0);
    let milleseconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2,0);

    display.textContent = `${hours}:${minutes}:${seconds}:${milleseconds}`
}