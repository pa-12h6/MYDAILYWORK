const quizList = document.getElementById("quizList");
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

quizzes.forEach((quiz, index) => {
  const li = document.createElement("li");
  li.innerHTML = `${quiz.title} 
    <button onclick="startQuiz(${index})">Start</button>`;
  quizList.appendChild(li);
});

function startQuiz(index) {
  localStorage.setItem("currentQuiz", index);
  window.location.href = "take-quiz.html";
}
