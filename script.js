const qText = document.getElementById("question-container");
const startButton = document.getElementById("startButton");
const choiceButtons = document.getElementsByClassName("choicebtn");
const bottomText = document.getElementById("correct");
const scoreText = document.getElementById('yourscore');
const initialsForm = document.getElementById('initials-form');

const questions = [
  {
    question: "What does CSS stand for?",
    answers: ["Creative stylesheets", "Cascading stylesheets", "C", "Cat super style"],
    correctAnswer: "Cascading stylesheets"
  },
  {
    question: "Commonly used data types do NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes"
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "console.log", "Terminal/bash", "For loops"],
    correctAnswer: "console.log"
  },
];

let currentQuestionIndex = 0;
let score = 0;

function showChoiceButtons() {
  for (let btn of choiceButtons) btn.style.display = "block";
}

// Start
startButton.addEventListener("click", function() {
  showChoiceButtons();
  qText.style.display = "block";
  startButton.style.display = "none";
  document.getElementById("main-title").style.display = "none";
  displayQuestion();
  startCountdown();
});

// Display question
function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  qText.textContent = currentQuestion.question;

  Array.from(choiceButtons).forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.onclick = checkAnswer;
  });
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    bottomText.textContent = "Correct!";
    bottomText.style.color = "green";
  } else {
    score--;
    bottomText.textContent = "Wrong!";
    bottomText.style.color = "red";
  }

  scoreText.textContent = score;
  currentQuestionIndex++;
  displayQuestion();
}

// Countdown timer
function startCountdown() {
  let countdownDuration = 60; // seconds
  const timerEl = document.getElementById("timercount");

  const interval = setInterval(() => {
    const minutes = Math.floor(countdownDuration / 60);
    const seconds = countdownDuration % 60;

    timerEl.textContent = `${minutes}m ${seconds}s`;
    countdownDuration--;

    if (countdownDuration < 0) {
      clearInterval(interval);
      timerEl.textContent = "Time is up!";
      endQuiz();
    }
  }, 1000);
}

// End quiz
function endQuiz() {
  initialsForm.style.display = 'block';
  for (let btn of choiceButtons) btn.style.display = "none";
  qText.style.display = 'none';
  startButton.style.display = 'none';
  bottomText.style.display = 'none';
}

// Leaderboard functions
function saveScore(initials, score) {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ initials, score });
  leaderboard.sort((a, b) => b.score - a.score); // highest first
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const scoresList = document.getElementById('scores-list');
    if (!scoresList) return; // check if the element exists
    scoresList.innerHTML = '';
    leaderboard.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.initials}: ${entry.score}`;
        scoresList.appendChild(li);
    });
}

// Handle initials form submission
initialsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const initialsInput = document.getElementById('initials');
    const initials = initialsInput.value.trim();

    if (!initials) {
        alert('Initials are required!');
        return;
    }

    saveScore(initials, score);
    displayLeaderboard();
    initialsInput.value = '';
    alert('Score saved!');
});

// Initialize leaderboard (if on quiz page)
displayLeaderboard();
