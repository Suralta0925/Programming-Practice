// let a = document.getElementById("orientation");
// let css = document.getElementById("decide")
// function decide(){
//     css.href = a.checked ? "landscape.css":"portrait.css"
// }
// a.addEventListener("change", decide);
// decide()
console.log("hello world")
function changeColor() {
    var textElement = document.getElementById('changeColorText');

    // Toggle between normal and active color classes
    if (textElement.classList.contains('normal-color')) {
      textElement.classList.remove('normal-color');
      textElement.classList.add('active-color');
    } else {
      textElement.classList.remove('active-color');
      textElement.classList.add('normal-color');
    }
  }