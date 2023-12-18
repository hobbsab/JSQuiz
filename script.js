// Document elements
let choiceA=document.getElementById("choiceA")
let choiceB=document.getElementById("choiceB")
let choiceC=document.getElementById("choiceC")
let choiceD=document.getElementById("choiceD")
let highScore=document.getElementById("highscore")
let qText=document.getElementById("questiontext")

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
});
startButton.addEventListener("click", function() {
  startButton.style.display = "none";
});

// Function to update the timer in the HTML
function updateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `Time left: ${timeLeft} seconds`;
}

// Set the timer to 75 seconds
let timeLeft = 75;

// Function to start the timer
function startTimer() {
  // Update the timer every second
  const timer = setInterval(() => {
    // Display the remaining time
    console.log(`Time left: ${timeLeft} seconds`);
    // Decrease the time by 1 second
    timeLeft--;
    // Check if the timer has reached 0
    if (timeLeft === 0) {
      // Stop the timer
      clearInterval(timer);
      console.log("Time's up!");
    }
  }, 1000);
}

// Call the startTimer() function to start the timer
startTimer();
  console.log('HI, test');


  
  const questions = [
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
    // Add more questions and answers as needed
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

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    // Handle correct answer logic
    // Move to the next question
    currentQuestionIndex++;
    displayQuestion();
  } else {
    // Handle incorrect answer logic
    // Subtract time from the timer or perform other actions
  }
}

// Start the quiz by displaying the first question
displayQuestion();
















// questions = [
//   {
//     question: "What is the capital of France?",
//     choices: ["London", "Paris", "Berlin", "Madrid"],
//     correctAnswer: "Paris"
//   },
//   {
//     question: "Which programming language is used for web development?",
//     choices: ["Java", "Python", "JavaScript", "C++"],
//     correctAnswer: "JavaScript"
//   },
//   // Add more question objects here
// ];

// quizQuestions.forEach((questionObj, index) => {
//   const questionElement = document.createElement("div");
//   questionElement.innerHTML = `<p>${index + 1}. ${questionObj.question}</p>`;

//   questionObj.options.forEach((option, optionIndex) => {
//     const optionButton = document.createElement("button");
//     optionButton.textContent = option;
//     questionElement.appendChild(optionButton);
//   });


//   quizContainer.appendChild(questionElement);
// });





const firstQuestion = quizQuestions[0].question;
const firstQuestionAnswers = quizQuestions[0].answers;