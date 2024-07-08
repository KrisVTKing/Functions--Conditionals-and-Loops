function countDown(seconds) {
  const displayElement = document.getElementById("countdown-display");
  displayElement.innerHTML = "";

  function updateCountdown(remainingSeconds) {
    if (remainingSeconds > 0) {
      console.log(remainingSeconds);
      displayElement.textContent = remainingSeconds;
      setTimeout(() => updateCountdown(remainingSeconds - 1), 1000);
    }
  }

  updateCountdown(seconds);
}

document.getElementById("start-button").addEventListener("click", () => {
  const inputSeconds = parseInt(
    document.getElementById("seconds-input").value,
    10
  );
  if (!isNaN(inputSeconds) && inputSeconds > 0) {
    countDown(inputSeconds);
  } else {
    alert("Please enter a valid number of seconds.");
  }
});
