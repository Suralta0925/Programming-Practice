let a = document.getElementById("ans");
let operator = " ";
let num = [];
let total = 0;
let temp_num = [];
let compress = "";

function del(){
    let del = a.innerText.length-1;
    let temp = a.innerText;
    a.innerText ="";
    for (let i=0;i<del;i++){
        a.innerText += temp[i];
    }

}
function del_all(){
    a.innerText = " ";
}
function nine(){
    a.innerText = a.innerText+9;
}
function eight(){
    a.innerText = a.innerText+8;
}
function seven(){
    a.innerText = a.innerText+7;
}
function six(){
    a.innerText = a.innerText+6;
}
function five(){
    a.innerText = a.innerText+5;
}
function four(){
    a.innerText = a.innerText+4;
}
function three(){
    a.innerText = a.innerText+3;
}
function two(){
    a.innerText = a.innerText+2;
}
function one(){
    a.innerText = a.innerText+1;
}
function zero(){
    a.innerText += 0;
}

function add(){
    if (num.length >= 1){
        let val = a.innerText.lastIndexOf("+");
        //num[num.length] = Number(a.textContent[val+1]);
        let j = Number(0);
        for (let i=val;i<a.innerText.length-1;i++){
            temp_num[j] = a.textContent[i+1];
            j +=1;
            //console.log(temp_num);
            //console.log(a.textContent[i+1]);
            //console.log(j);

        }
        for (let i=0;i<temp_num.length;i++){
            compress+=temp_num[i];
        }
        num[num.length] = Number(compress);

        compress = "";
    }
    else{
        num[num.length] = Number(a.textContent);
    }
    a.innerText = a.innerText+"+";
    console.log(num);
    operator="add";
}
function equals(){
    if (num.length > 0){
        let val = a.innerText.lastIndexOf("+");
        num[num.length] = Number(a.textContent[val+1]);
    }
    else{
        num[num.length] = Number(a.textContent);
    }
    for (let nums of num){
        total += nums;
    }
    console.log(total);
    a.innerText = total;
    num =[];
    total =0;
}
