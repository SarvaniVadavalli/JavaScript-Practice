const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const countLabel = document.getElementById("count");

let count = 0;

incrementButton.addEventListener("click", () => {
    count++;
    countLabel.textContent = count;
});

decrementButton.addEventListener("click", () => {
    count--;
    countLabel.textContent = count;
});
resetButton.addEventListener("click", () => {
    count = 0;
    countLabel.textContent = count;
});