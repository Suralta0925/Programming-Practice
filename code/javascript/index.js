let box = document.getElementById('box');
const maxWidth = window.innerWidth - box.clientWidth;
const maxHeight = Math.floor((window.innerHeight * 0.95) - box.clientHeight);
const moveAmount = box.clientHeight;
let x = 0;
let y = 0;

document.addEventListener("keydown", async function(event){
    if (event.key.startsWith("Arrow")){
        switch(event.key){
            case ("ArrowUp"):{
                const move = (y-moveAmount >= 0) ? moveAmount:0;
                
                box.style.transform = `translate(${x}px,${y-(move/2)}px)`;
                box.style.backgroundColor = "hsl(180, 91%, 71%)";
                await new Promise(resolve => setTimeout(resolve, 50));
                y -= move;
                box.style.backgroundColor = "aqua";
                break;
            }
                
            case ("ArrowDown"):{
                const move = (y+moveAmount <= maxHeight) ? moveAmount:0;
                y += move;
                break;
            }
            case ("ArrowRight"):{
                const move = (x+moveAmount <= maxWidth) ? moveAmount:0;
                x += move;
                break;
            }
            case ("ArrowLeft"):{
                console.log(maxWidth);
                const move = (x-moveAmount >= 0) ? moveAmount:0;
                x -= move;
                break;
            }
                
        }
    }
    box.style.transform = `translate(${x}px, ${y}px)`;
    console.log(`x: ${x}\ny: ${y}`)
})