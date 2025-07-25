"use strict";
const startBtn = document.getElementById("startBtn");
const closeBtn = document.getElementById("close");
const popup = document.getElementById("popup");
startBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});
