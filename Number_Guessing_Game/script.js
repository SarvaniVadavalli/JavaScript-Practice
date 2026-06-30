const minNum=0;
const maxNum=1000;
const ans=Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts=0;

const guessInput=document.getElementById('guessInput');
const guessButton=document.getElementById('guessButton');
const feedback=document.getElementById('feedback');
const attemptsDisplay=document.getElementById('attempts');

guessButton.onclick = function () {
    const guess = Number(guessInput.value);

    if(guessInput.value === '') {
        feedback.textContent = 'Please enter a number.';
        return;
    }
    if(isNaN(guess)) {
        feedback.textContent = 'Please enter a valid number.';
        return;
    }
    if(guess < minNum || guess > maxNum) {
        feedback.textContent = `Please enter a number between ${minNum} and ${maxNum}.`;
        return;
    }
    attempts++;
    attemptsDisplay.textContent = attempts;
    if(guess < ans) {
        feedback.textContent = 'Too low! Try again.';
    } else if(guess > ans) {
        feedback.textContent = 'Too high! Try again.';
    } else {
        feedback.textContent = `Congratulations! You guessed the number ${ans} in ${attempts} attempts.`;
        guessButton.disabled = true;
        guessInput.disabled = true;
    }
    guessInput.value = '';
    guessInput.focus();
};
