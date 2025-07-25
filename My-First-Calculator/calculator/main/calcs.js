let num = document.getElementById("ans");
let num2 = document.getElementById("ans2");
let dark = document.getElementById("orientation");
let img = document.getElementById("img")
let device = document.querySelector(".device");
let buttons = document.querySelectorAll(".nums")
let ans = document.querySelector("#ans")
let body = document.querySelector("body")
let factorials = document.querySelector("factorial");
let isOpen = true;
function operators(int){
    if (num.innerText.endsWith('+') || num.innerText.endsWith('-') || num.innerText.endsWith('×') || num.innerText.endsWith('÷')){
        del();
        a = num.innerText;
        num.innerText += int;
        if (num.innerText[0]=='+'){num2.innerText='Error'}
    }
    else{
        num.innerText += int;
    }
    if ((num.innerText[0]=='+' || num.innerText[0]=='-' || num.innerText[0]=='×' || num.innerText[0]=='÷') && num.innerText.length==1){num2.innerText='Error'}
}
function append(int){
    if (Number(num.innerText.length) < 15){
            try {
                num.innerText += int;
                operator(); 
            } catch (SyntaxError){}
    }
    else{
        alert("Reached the maximum number of digits(15)")
    }
}
function del(){
    let del = num.innerText.length-1;
    if(num.innerText[del] =='('){isOpen=true;}else if (num.innerText[del] ==')'){isOpen=false}
    let temp = num.innerText;
    num.innerText ="";
    for (let i=0;i<del;i++){
        num.innerText += temp[i];
    }
    if(num.innerText.length==0){num2.innerText=""}
    if (num.innerText.length > 0){try {operator()} catch (SyntaxError) {}}
}
function del_all(){
    isOpen=true;
    num.innerText = " ";
    num2.innerText=""
}
function equals(){
    let temp = num.innerText;
    temp = temp.replaceAll("×","*");
    temp = temp.replaceAll("÷","/");
    temp = temp.replaceAll("%","/100");
    temp = temp.replaceAll(")(","*");
    num.innerText = eval(temp);
}
function factorial(n){
    if (n == 0 || n == 1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
function operator(){
    try{
        let a = num.innerText;
        let b = num2.innerText;
        if (a.endsWith('+') || a.endsWith('-') || a.endsWith('×') || a.endsWith('÷')){
            b = eval(a.slice(0,a.length-1));
            num2.textContent = eval(a.slice(0,a.length-1));
            if (eval(a.slice(0,a.length-1))===undefined){num2.textContent="Error";}
        }
        else{
            let temp = num.innerText;
            temp = temp.replaceAll("×","*");
            temp = temp.replaceAll("÷","/");
            temp = temp.replaceAll("%","/((100))");
            temp = temp.replaceAll(")(","*");
            temp = temp.replaceAll("^","**");
            while (temp.includes("!")) {
                const startIndex = temp.lastIndexOf('!');
                const endIndex = startIndex + 1;
                let numBeforeFactorial = "";
                let i = startIndex - 1;
                while (i >= 0 && /[0-9.]/.test(temp[i])) {
                    numBeforeFactorial = temp[i] + numBeforeFactorial;
                    i--;
                }
                const factorialResult = factorial(Number(numBeforeFactorial));
                temp = temp.substring(0, i + 1) + factorialResult + temp.substring(endIndex);
            }
            if(!(isOpen)){temp+=')'}
            try{
                let c = eval(temp);
                num2.innerText = c;
                if(c===undefined){
                    num2.innerText="Error"
                }
                if (num2.innerText.includes(".")){num2.innerText = c.toFixed(2);}
                if (num2.innerText.includes("%")){num2.innerText = c.toFixed(3);}
            }
            catch(SyntaxError){
                num2.innerText="Error"
            }
        }
    }
    catch(SyntaxError){}
}
function parenthesis(){
    operator();
    if (isOpen){
        num.innerText += '(';
        isOpen = false;
    }
    else{
        num.innerText += ')';
        isOpen = true;
    }
}
function mode() {
    if (!dark.checked) {
    img.src = "images/moon.png";
    ans.style.color = "white";
    device.style.backgroundColor = "black";
    body.style.backgroundColor = "black";
    buttons.forEach(button => {
        button.classList.add("change")
        button.classList.remove("nums")
    })
}
else {
        img.src = "images/sun.png";
        ans.style.color = "black";
        device.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        buttons.forEach(button => {
            button.classList.add("nums")
            button.classList.remove("change")
            button.style.color = "black";
        });
    }
}
dark.addEventListener("change", mode);
mode();