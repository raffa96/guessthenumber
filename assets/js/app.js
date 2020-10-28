let game = {
  numberToGuess: 0,
  history: [],
};

window.onload = function () {
  initGame();

  const btnGuess = document.getElementById("btn-guess");

  btnGuess.addEventListener("click", guessNumber);

  const btnRestart = document.getElementById("btn-restart");

  btnRestart.addEventListener("click", restartGame);
};

function generateRandomNumber() {
  return Math.round(Math.random() * 100 + 1);
}

function showSuccess() {
  const success = document.getElementById("success");

  success.style = "display: block";

  success.innerText = "Congratulations! You guessed the number! 😎";

  endGame();
}

function hideSuccess() {
  const success = document.getElementById("success");

  success.style = "display: none";
}

function showResult(threshold) {
  const result = document.getElementById("result");

  result.style = "display: block";

  switch (threshold) {
    case "higher":
      result.innerText =
        "The number entered is bigger than the one to guess! 😕";
      break;
    case "lower":
      result.innerText =
        "The number entered is smaller than the one to guess! 😕";
      break;
  }
}

function hideResult() {
  const result = document.getElementById("result");

  result.style = "display: none";
}

function showError() {
  const error = document.getElementById("error");

  error.style = "display: block";

  error.innerText = "You must enter a number! 😠";
}

function hideError() {
  const error = document.getElementById("error");

  error.style = "display: none";
}

function checkNumber(number) {
  if (number > game.numberToGuess) {
    showResult("higher");
  } else if (number < game.numberToGuess) {
    showResult("lower");
  } else {
    hideResult();

    showSuccess();
  }
}

function guessNumber() {
  const inputNumber = document.getElementById("input-number").value;

  if (inputNumber) {
    hideError();

    saveHistory(inputNumber);

    updateAttempts();

    showHistory();

    checkNumber(inputNumber);
  } else {
    showError();
  }
}

function saveHistory(number) {
  game.history.push(number);
}

function showAttempts() {
  const attempts = document.getElementById("attempts");

  attempts.innerText = game.history.length;
}

function updateAttempts() {
  const attempts = document.getElementById("attempts");

  attempts.innerText = game.history.length;
}

function showHistory() {
  if (game.history.length > 0) {
    const historyList = document.getElementById("history-list");

    historyList.style = "display: block";

    let history = document.createElement("li");

    for (let i = 0; i < game.history.length; i++) {
      history.className = "list-group-item";

      history.textContent = `Attempt #${i + 1}: ${game.history[i]}`;

      historyList.appendChild(history);
    }
  }
}

function initGame() {
  game.numberToGuess = generateRandomNumber();

  showAttempts();

  showHistory();
}

function restartGame() {
  game.numberToGuess = generateRandomNumber();

  game.history = [];

  document.getElementById("input-number").value = "";

  document.getElementById("input-number").disabled = false;

  document.getElementById("btn-guess").disabled = false;

  document
    .getElementById("history-list")
    .querySelectorAll("*")
    .forEach((element) => element.remove());

  document.getElementById("history-list").style = "display: none";

  hideSuccess();

  hideResult();

  hideError();

  updateAttempts();
}

function endGame() {
  document.getElementById("input-number").disabled = true;

  document.getElementById("btn-guess").disabled = true;
}
