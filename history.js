const histories = document.getElementById("histories");

function addHistory(
  questionText,
  timeTaken,
  errorCount,
  typingSpeed,
  KeyStrokeDelay
) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>Typing speed: <span class="bold red">${typingSpeed}</span>WPM</p>
  <p>Average key stroke delay: <span class="bold red">${KeyStrokeDelay}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({
    questionText,
    timeTaken,
    errorCount,
    typingSpeed,
    KeyStrokeDelay,
  });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
  <p>Typing speed: <span class="bold red">${test.typingSpeed}</span> WPM</p>
  <p>Average key stroke delay: <span class="bold red">${test.KeyStrokeDelay}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}
