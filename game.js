var previousGuesses = [];
var numGuesses = 1;
var playGame = true;
var randomNumber = parseInt((Math.random() * 100) + 1);
if (playGame) {
  /*document.querySelector(".GuessSubmit").addEventListener("click", function(e)*/
  $(".guessSubmit").click(function(e) {
    e.preventDefault();
    var guess = document.querySelector(".guessField").value;
    if (playGame) {
      validate(guess);
    }
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else {
    previousGuesses.push(guess);
    if (numGuesses <= 11) {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }

}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage("You guessed correctly!");
    endGame();
  } else if (numGuesses == 11) {
    displayMessage("You lose!! the correct number is " + randomNumber);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Your guess is low! Try again!");
  } else if (guess > randomNumber) {
    displayMessage("Your guess is high! Try again!");
  }
}

function displayMessage(message) {
  document.querySelector(".lowOrHi").innerHTML = message;
}

function displayGuesses(guess) {
  document.querySelector(".guessField").value = " ";
  document.querySelector(".guesses").innerHTML += " " + guess;
  numGuesses++;
  /*document.querySelector(".LastResult").innerHTML = 11 - numGuesses;*/
  $(".lastResult").text(11 - numGuesses);
}

function endGame() {
  playGame = false;
  /*Play Again*/
  document.querySelector(".guessSubmit").value = "    Play Again   ";
  document.querySelector(".guessSubmit").addEventListener("click", function() {
    location.reload();
  });


}
