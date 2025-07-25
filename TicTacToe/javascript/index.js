"use strict";
const startBtn = document.getElementById("startBtn");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".closeBtn");
startBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});
