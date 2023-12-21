// Document elements
// let choiceA=document.getElementById("choiceA")
// let choiceB=document.getElementById("choiceB")
// let choiceC=document.getElementById("choiceC")
// let choiceD=document.getElementById("choiceD")
let qText=document.getElementById("question-container")

const startButton = document.getElementById("startButton");
const choiceButtons = document.getElementsByClassName("choicebtn");

// Function to show the choice buttons and hide start button
function showChoiceButtons() {
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].style.display = "block";
  }
}

// Event listener for the Start button
startButton.addEventListener("click", function() {
  showChoiceButtons();
  startButton.style.display = "none";
});
startButton.addEventListener("click", function() {
  qText.style.display = 'block';
});

// Set the countdown duration in seconds
const countdownDuration = 60;

// Calculate the countdown end time
const countdownEndTime = new Date().getTime() + (countdownDuration * 1000);

// Update the countdown every second
const countdown = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countdownEndTime - now;

  // Calculate minutes and seconds
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown on the HTML page
  document.getElementById("timercount").innerHTML = `${minutes}m ${seconds}s`;

  // If the countdown is finished, display a message
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("timercount").innerHTML = "Time is up!";
    timercount.style.color = 'red';
  }
}, 1000);

  
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
      question: "A very useful tool used during development and debugging for printing content to the debugger is::",
      answers: ["JavaScript", "console.log", "Terminal/bash", "For loops"],
      correctAnswer: "console.log"
    },
  ];


const questionContainer = document.getElementById("question-container");
const answerButtons = document.querySelectorAll(".choicebtn");

let currentQuestionIndex = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.addEventListener("click", checkAnswer);
  });
}

// your score
let score = 0;
const scoreText = document.getElementById('yourscore');

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = questions[currentQuestionIndex];

  // Check if all questions have been answered
if (currentQuestion === questions.length) {
  // Call the endQuiz function
  endQuiz();
  initialsForm.style.display = 'block';
} else {
  // Display the next question
}

  if (selectedAnswer === currentQuestion.correctAnswer) {
    // correct answer
    // move to next question
    alert('Correct!');
    score += 10;
    console.log(score);
    scoreText.textContent = score;
    currentQuestionIndex++;
    displayQuestion();
  } else {
    alert('Wrong!');
    // wrong answer
    currentQuestionIndex++;
    displayQuestion();
  }
}



function endQuiz() {
  console.log('hi');
}
// entering your initials after quiz
const initialsForm = document.getElementById('initials-form');

initialsForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const initialsInput = document.getElementById('initials');
  const initials = initialsInput.value;
  
//save initials?
  console.log('your initials', initials);
  initialsInput.value = '';
});

// start quiz
displayQuestion();


