let questions = [];

function addQuestion() {
  const q = document.getElementById("question").value;
  const options = [
    opt1.value,
    opt2.value,
    opt3.value,
    opt4.value
  ];
  const correct = document.getElementById("correct").value;

  questions.push({
    question: q,
    options: options,
    correct: correct
  });

  alert("Question added");
}

function saveQuiz() {
  const title = document.getElementById("quizTitle").value;
  let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

  quizzes.push({ title, questions });
  localStorage.setItem("quizzes", JSON.stringify(quizzes));

  alert("Quiz saved successfully");
}
