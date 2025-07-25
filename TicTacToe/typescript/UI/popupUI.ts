const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
const closeBtn = document.getElementById("close") as HTMLButtonElement;
const popup = document.getElementById("popup") as HTMLDivElement;

startBtn.addEventListener("click", (): void => {
    popup.classList.remove("hidden")
})

closeBtn.addEventListener("click", (): void => {
    popup.classList.add("hidden");
})
