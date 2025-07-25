const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
const popup = document.getElementById("popup") as HTMLDivElement;
const closeBtn = document.querySelector(".closeBtn") as HTMLButtonElement;

startBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
