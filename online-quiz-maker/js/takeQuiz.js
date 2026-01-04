const quizzes = JSON.parse(localStorage.getItem("quizzes"));
const quizIndex = localStorage.getItem("currentQuiz");

let qIndex = 0;
let score = 0;

function loadQuestion() {
  const q = quizzes[quizIndex].questions[qIndex];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => check(i + 1);
    optionsDiv.appendChild(btn);
  });
}

function check(ans) {
  if (ans == quizzes[quizIndex].questions[qIndex].correct) {
    score++;
  }
}

function next() {
  qIndex++;
  if (qIndex < quizzes[quizIndex].questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  }
}

loadQuestion();
