let display = document.getElementById("display");
const operator = "+-÷x";
let operators = [];
let numbers = [];

function number(digit){
    if (display.innerText.startsWith('0')){
        display.textContent = ''
        display.textContent += digit;
    }
    else{
        display.textContent += digit;
    }    
}
document.addEventListener("keydown",(event) =>{
    const num = "1234567890";
    const newOperator = "+-*/";
    if (num.includes(event.key)){
        number(event.key);
    }
    else if (event.key === "Backspace") del();
    else if (newOperator.includes(event.key)){
        let temp = "";
        if ("*/".includes(event.key)){
            temp = ("*".includes(event.key)) ? event.key.replace("*", "×"):event.key.replace("/", "÷");
        }
        else{
            temp = event.key;
        }
        operation(temp);
    }
    else if (event.key === "Enter") equals();
})

function del(){
    const temp = display.textContent;
    display.textContent = '';
    if (temp.length > 0){
        if (!operator.includes(temp[temp.length-1]) || !operator.includes(temp[temp.length-1])){
            operators.pop();
            numbers.pop();
        }
        if (temp.length === 1){
            display.textContent = '0';
        }

        for (let i=0; i<temp.length-1; i++){
            display.textContent += temp[i];
        }
    }
}

function clearAll(){
    display.textContent = '0';
    operators = [];
    numbers = [];
}


function operation(opt){
    const textView = display.innerText;
    let tempNum = '';
    const totalLength = numbers.reduce((accum, str) => accum+str.length, 0)+operators.length;
    if (!operator.includes(textView[textView.length-1]) && !textView.startsWith('0')){
        if (!operators.length == 0){
            for (let i=totalLength;i<textView.length;i++){
                tempNum += textView[i];
            }
            console.log(`numbers: ${numbers}\n operators: ${operators}`)
            if (tempNum.length > 0) numbers.push(tempNum);
            
        }
        else{
            numbers.push(display.innerText);
        }
        operators.push((opt.startsWith('0')) ? opt.splice(0,0):opt);
        display.textContent += opt;
    }
}

function equals(){
    const textView = display.innerText;
    let tempNum = '';
    const totalLength = numbers.reduce((accum, str) => accum+str.length, 0)+operators.length;
    if (!operators.length == 0){
        for (let i=totalLength;i<textView.length;i++){
            tempNum += textView[i];
        }
        numbers.push(tempNum);
    }
    console.log(numbers);

    const result = numbers.reduce((accum,num,index) =>{
        if (index === 0) return Number(accum);
        let op = operators[index-1];
        switch(op){
            case '+': return Number(accum) + Number(num);
            case '-': return Number(accum) - Number(num);
            case '×': return Number(accum) * Number(num);
            case '÷': return Number(accum) / Number(num);
        }
    });
    numbers = [];
    operators = [];
    display.textContent = result;
}