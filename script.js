// Our random number generator
function randomNum(max) {
    return Math.floor(Math.random() * max);
}

// Run the game over and over until you run out of guesses
function guessingGame() {


    let maxGuesses = prompt("How many Guesses Would you like?");
    // create a random number and store it in variable correctAnswer
    const correctAnswer = randomNum(100);
    // Max Points 
    let maxPoints = maxGuesses * 10;
    // Log the correct answer for our eyes
    console.log("Correct Answer: ", correctAnswer);

    for (i = 0; i < maxGuesses; i++) {
        // Ask user for their guess and store it in userAnswer
        let userAnswer = prompt("Guess a number 0 - 100");

        // If userAnswer is equal to the correctAnswer then alert them that they have won!
        if (parseInt(userAnswer) === correctAnswer) {
            alert("Congratulations, Your answer is correct!");
            break;
        }
        
        // Alert user when they've used up all their guesses
        if (i + 1 >= maxGuesses) {
            alert("You've run out of guesses!");
            maxPoints -= 10;
            break;
        }

        // If userAnswer does not equal correctAnswer tell them why
        if (parseInt(userAnswer) !== correctAnswer) {
            // If userAnswer less than correctAnswer tell the user to go higher
            if (userAnswer < correctAnswer) {
                alert("Go Higher!");
            // If userAnswer is greater than correctAnswer tell the user to go lower
            } else if (userAnswer > correctAnswer) {
                alert("Go Lower!");
            }
            // Deduct 10 points for every incorrect guess
            maxPoints -= 10;
        }
        
    }
    
    console.log("Total Points: ", maxPoints, " out of ", maxGuesses * 10);

    const score = document.getElementById("score");
    const highestPossible = document.getElementById("highestPossible");

    score.textContent = `Score: ${maxPoints}`;
    highestPossible.textContent = `Highest Possible Score: ${maxGuesses * 10}`
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", guessingGame);