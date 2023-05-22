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
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let answer = undefined;
let score = 0;
let interval = 0;
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

    },
    {
        question: "What does this JavaScript code output?",
        a: "0 1 2 3 4",
        b: "1 2 3 4 5",
        c: "0 1 2 3 4 5",
        d: "undefined",
        correct: "a",
        timer: 20000, // 20 seconds
        codeSnippet: "for(let i = 0; i < 5; i++) { console.log(i); }",
    },
    {
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
    }


]

function startBtnQuiz() {
    // hide the quiz rules
    document.querySelector(".quiz-rule-container").style.display = "none";
    // display the quiz and stats container
    document.querySelector(".quiz-container").style.display = "block";
    document.querySelector(".quiz-stats").style.display = "block";
    document.querySelector(".timer-container").style.display = "block";

    startTimer(quizData[currentQuestion].timer);
    showQuestion();
}

function showQuestion() {
    const currentQuizData = quizData[currentQuestion];

    question.innerText = currentQuizData.question;
    a_answer.innerText = currentQuizData.a;
    b_answer.innerText = currentQuizData.b;
    c_answer.innerText = currentQuizData.c;
    d_answer.innerText = currentQuizData.d;

    // Update question counter
    questionCounter();
    // Check if there is a code snippet and display it
    const quizCodeSnippet = document.getElementById("quizCodeSnippet");
    if (currentQuizData.codeSnippet) {
        quizCodeSnippet.innerHTML = `<pre><code class="javascript">${currentQuizData.codeSnippet}</code></pre>`;
        hljs.highlightBlock(quizCodeSnippet);
    } else {
        quizCodeSnippet.innerHTML = "";
    }
}

function questionCounter() {
    let questionCounter = document.getElementById("questionCounter");
    questionCounter.innerHTML = 'Question ' + (currentQuestion + 1) + ' of ' + quizData.length;
}

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
    }
    nextQustionBtn();
});

function nextQustionBtn() {
    // get selected answer
    const answer = selectedAnswer();
    // check if answer is correct
    if (answer) {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            // Call clearAnswer function here
            clearAnswer();
            // Start timer after question and answer have been processed
            startTimer(quizData[currentQuestion].timer);
            showQuestion();
        } else {
            // end quiz and show score
            alert("You have reached the end of the quiz");
            scoreText.innerText = score;
            // Ensure timer is cleared when the quiz ends
            clearInterval(interval);
        }
    }
    // Update question counter
    questionCounter();
}

function clearAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

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

/**
 * startTimer function will take the time value from the quizData array and start the timer countdown.
 * If the timer reaches 0 an alert is displayed. 
 */
function startTimer(time) {
    console.log('Starting timer with value:', time); // Log the timer value

    // Clear any existing interval
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
            nextQustionBtn();
        }
    }
}

/**
 * showScore function displays the score
 */
function showScore() {
    scoreElement.innerHTML = "Score: " + score + " out of " + quizData.length;
    console.log(score);
}