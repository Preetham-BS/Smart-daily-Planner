// Generate random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guess = document.getElementById("guessInput").value;
    const message = document.getElementById("message");

    if (guess === "") {
        message.textContent = "⚠ Please enter a number";
        return;
    }

    if (guess == randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        message.style.color = "green";
    }
    else if (guess > randomNumber) {
        message.textContent = "⬆ Too High! Try again.";
        message.style.color = "red";
    }
    else {
        message.textContent = "⬇ Too Low! Try again.";
        message.style.color = "red";
    }
}