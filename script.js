let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (guess === secretNumber) {
        document.getElementById("result").textContent = "Congratulations! You guessed it in " + attempts + " attempts.";
    } else if (guess < secretNumber) {
        document.getElementById("result").textContent = "Too low! Try again.";
    } else {
        document.getElementById("result").textContent = "Too high! Try again.";
    }
}
