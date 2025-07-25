let peso = 1000;
peso = peso.toLocaleString('en-US', {style:'currency', currency:'PHP'})
let fruits = ["apple",'banana', 'durian'];
fruits.forEach(capitalize)
fruits.forEach(print)
function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(arr){
    console.log(arr);
}
//array.reduce(callback) method
console.log("This the array.reduce(callback) method")
let prices = [5,10,15,20,25];
let total = prices.reduce(checkOut);
console.log(`The total is:$${total}`);
function checkOut(total, element){
    console.log(total,element)
    return total + element;
}
//array.sort(callback) method
console.log("This the array.sort(callback) method");
let grades = [100,50,90,60,80,70];
grades = grades.sort(descendingSort)
grades.forEach(print)
function descendingSort(x,y){
    console.log(y-x)
    return y-x;
}