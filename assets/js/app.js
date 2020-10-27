let game = {
  numberToGuess: 0,
};

window.onload = function () {
  initGame();

  const btnGuess = document.getElementById("btn-guess");

  btnGuess.addEventListener("click", guessNumber);
};

function generateRandomNumber() {
  return Math.round(Math.random() * 100 + 1);
}

function showError() {
  const error = document.getElementById("error");

  error.style = "display: block";

  error.innerText = "You must enter a number!!!";
}

function hideError() {
  const error = document.getElementById("error");

  error.style = "display: none";
}

function guessNumber() {
  const inputNumber = document.getElementById("input-number").value;

  if (inputNumber) {
    hideError();

    console.log(inputNumber);
  } else {
    showError();
  }
}

function initGame() {
  game.numberToGuess = generateRandomNumber();
}
