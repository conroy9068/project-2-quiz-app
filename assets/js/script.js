// timer to be set for each question depending on difficulty
// show code snippets/jpgs for some questions,the snippet will be a loop or a function and the user will need to guess the output

/**
 * quizData array contains the quiz questions and answers
 */
const quizData = [{
    question: "What is JavaScript?",
    a: "programming language used to create interactive effects within web browsers",
    b: "database management system used to store and retrieve data",
    c: "markup language used to structure content on web pages",
    d: "graphics design software used to create web graphics",
    correct: "a",
    timer: 10000, // 10 seconds

}, {
    question: "What are the data types in JavaScript?",
    a: "String, Number, Boolean, Object, Undefined",
    b: "String, Number, Boolean, Object, Null",
    c: "String, Number, Boolean, Object, Undefined, Null",
    d: "String, Number, Boolean, Object, Undefined, Null, Symbol",
    correct: "c",
    timer: 10000, // 10 seconds

}, {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    a: "<script src='script.js'>",
    b: "<script href='script.js'>",
    c: "<script name='script.js'>",
    d: "<script link='script.js'>",
    correct: "a",
    timer: 10000, // 10 seconds

}, {
    question: "What is the correct syntax for referring to an external style sheet called 'style.css'?",
    a: "<link rel='stylesheet' href='style.css'>",
    b: "<link rel='stylesheet' src='style.css'>",
    c: "<link rel='stylesheet' name='style.css'>",
    d: "<link rel='stylesheet' link='style.css'>",
    correct: "a",
    timer: 15000, // 15 seconds

}, {
    question: "What is the correct syntax for referring to an external image called 'image.jpg'?",
    a: "<img src='image.jpg'>",
    b: "<img href='image.jpg'>",
    c: "<img name='image.jpg'>",
    d: "<img link='image.jpg'>",
    correct: "a",
    timer: 15000, // 15 seconds

}]

//radio buttons
const answerEls = document.querySelectorAll(".answer");
//question
const question = document.getElementById("question");
//answers
const a_answer = document.getElementById("a_answer");
const b_answer = document.getElementById("b_answer");
const c_answer = document.getElementById("c_answer");
const d_answer = document.getElementById("d_answer");
//submit button
const submitBtn = document.getElementById("submitBtn");
//score
const scoreText = document.getElementById("score");

let currentQuestion = 0;
let answer = undefined;
let score = 0;

loadQuiz();

/**
 * loadQuiz function loads the quiz questions and answers
 */
function loadQuiz() {
    clearAnswer();
    const currentQuizData = quizData[currentQuestion];

    question.innerText = currentQuizData.question;
    a_answer.innerText = currentQuizData.a;
    b_answer.innerText = currentQuizData.b;
    c_answer.innerText = currentQuizData.c;
    d_answer.innerText = currentQuizData.d;

}

/**
 * startBtnQuiz function hides the quiz rules and displays the quiz questions and stats containers
 */
function startBtnQuiz() {
    // hide the quiz rules
    document.querySelector(".quiz-rule-container").style.display = "none";
    // display the quiz and stats container
    document.querySelector(".quiz-container").style.display = "block";
    document.querySelector(".quiz-stats").style.display = "block";
    document.querySelector(".timer-container").style.display = "block";

    const currentQuizData = quizData[currentQuestion];
    startTimer(currentQuizData.timer);
}

/**
 * submitBtn increments the currentQuestion variable and loads the next question. 
 * If no more questions an alert is displayed
 */
submitBtn.addEventListener("click", () => {
    const answer = selectedAnswer();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
            alert("Correct");
            console.log(score);
        } else {
            alert("Incorrect");
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            alert("You have reached the end of the quiz");
        }
    }
    startTimer(quizData[currentQuestion].timer);
});


let interval; // Declare the interval variable outside the function scope

/**
 * startTimer function will take the time value from the quizData array and start the timer countdown.
 * If the timer reaches 0 an alert is displayed. 
 */
function startTimer(time) {
    // If there's an existing timer, clear it
    if (interval) {
        clearInterval(interval);
    }

    let timer = time / 1000; // Convert milliseconds to seconds
    const timerElement = document.getElementById('timer');
    interval = setInterval(timerCountdown, 1000);

    function timerCountdown() {
        timerElement.innerHTML = "Timer: " + timer + " seconds";
        timer--;
        if (timer < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "Time is up";
            let correctAnswer = quizData[currentQuestion].correct;
            document.getElementById(correctAnswer).checked = true;
            // increment current question only if there are more questions
            if (currentQuestion < quizData.length - 1) {
                currentQuestion++;
                loadQuiz();
            } else {
                alert("You have reached the end of the quiz");
            }
        }
    }
}



/**
 * selectedAnswer function checks if an answer has been selected. If not an alert is displayed
 */
function selectedAnswer() {
    // get the selected answer
    const answerEls = document.querySelectorAll(".answer");

    let selectedAnswer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.id;
        }
        console.log(answerEl.id);
    });
    if (!selectedAnswer) {
        alert("Please select an answer");
    }
    return selectedAnswer;
}

function clearAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}