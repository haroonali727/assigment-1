// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to update the attempts count
function updateAttempts() {
    document.getElementById('attempts').innerText = attempts;
}

// Function to check the user's guess
function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.innerText = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        result.innerText = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('guessButton').setAttribute('disabled', 'disabled');
    } else if (guess < randomNumber) {
        result.innerText = 'Too low! Try again.';
    } else {
        result.innerText = 'Too high! Try again.';
    }

    updateAttempts();
}

// Event listener for the guess button
document.getElementById('guessButton').addEventListener('click', checkGuess);