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
//score and counter variables
let currentQuestion = 0;
let answer = undefined;
let score = 0;
let interval = 0;

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
    }
]

/**
 * startBtnQuiz kicks off the quiz when the "Start Quiz" button is clicked. It gets rid of the rules, brings up the quiz and stats, along with the timer.
 * It also gets the first question ready and starts the countdown
 */
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

/**
 * showQuestion Displays the current question and all the options the user can pick from. It takes them from the quizData array using the currentQuestion index. 
 * It also updates the question counter, and if there's a code snippet for the current question, it'll make sure to show it.
 */
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

/**
 * questionCounter Keeps track of the current question. It shows the user which question they're on and how many questions there are in total.
 * It also updates the question counter.
 */
function questionCounter() {
    let questionCounter = document.getElementById("questionCounter");
    questionCounter.innerHTML = 'Question ' + (currentQuestion + 1) + ' of ' + quizData.length;
}

/**
 * submitBtn.addEventListener Is tied to the submit button's click event. When the user hits submit, it checks the user's answer against the correct one. 
 * If they nailed it, it bumps up their score and lets them know they're correct.
*/
submitBtn.addEventListener("click", () => {
    const answer = selectedAnswer();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
            showScore(); // Update score here
            alert("Correct");
            console.log(score);
        } else {
            alert("Incorrect");
        }
    }
    nextQustionBtn();
});

/**
 * nextQustionBtn Gets called when the user is done with their current question and wants to move on to the next one. It takes the selected answer, and if there is one, 
 * it gets everything ready for the next question: increments the currentQuestion index, clears the old answer, starts the new timer, and presents the next question.
 */
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
            endQuiz();
            alert("You have reached the end of the quiz");
            scoreText.innerText = score;
            // Ensure timer is cleared when the quiz ends
            clearInterval(interval);
            showScore(); // show score here
        }
    }
    // Update question counter
    questionCounter();
}

/**
 * clearAnswer Cleans up after the previous question by clearing the selected answer. It goes through all the answer radio buttons and turns their checked status off.
 */
function clearAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

/**
 * @returns the selected answer
 * selectAnswer Works out which answer has been selected. It checks all the answer radio buttons and sees which one is checked. 
 * If one is checked, it returns that answer's id. If nothing's checked, it tells the user to pick an answer.
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

/**
 * startTimer function will take the time value from the quizData array and start the timer countdown.
 * If the timer reaches 0 an alert is displayed. 
 */
function startTimer(time) {
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
            alert("Time is up");
            clearInterval(interval);
            timerElement.innerHTML = "Time is up";
            let correctAnswer = quizData[currentQuestion].correct;
            document.getElementById(correctAnswer).checked = true;
            nextQustionBtn();
        }
    }
}

/**
 * showScore refreshes the score display. It changes the text of the score element to show the user their current score and the total number of questions.
 */
function showScore() {
    //score
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = score + " out of " + quizData.length;
    console.log(score);
}

/**
 * endQuiz takes over when the user has answered all the questions. It gets rid of the quiz, stats, and timer and shows the end screen. 
 * It also announces the final score and resets the timer.
 */
function endQuiz() {
    // hide the quiz and stats container
    document.querySelector(".quiz-container").style.display = "none";
    document.querySelector(".quiz-stats").style.display = "none";
    document.querySelector(".timer-container").style.display = "none";
    // display the quiz rules
    document.querySelector(".quiz-end-container").style.display = "flex";
    document.getElementById("final-score").innerHTML = "Your final score is " + score + " out of " + quizData.length;
    // reset timer
    clearInterval(interval);
}

/**
 * restartQuiz is used when the user wants to take the quiz again. It hides the end screen, brings up the quiz, stats, 
 * and timer, resets the currentQuestion index and the score, clears the selected answer, 
 * displays the first question, updates the score, and starts the timer for the first question.
 */
function restartQuiz() {
    // hide the quiz rules
    document.querySelector(".quiz-end-container").style.display = "none";
    // display the quiz and stats container
    document.querySelector(".quiz-container").style.display = "block";
    document.querySelector(".quiz-stats").style.display = "block";
    document.querySelector(".timer-container").style.display = "block";
    currentQuestion = 0;
    score = 0;
    clearAnswer();
    showQuestion();
    showScore();
    startTimer(quizData[currentQuestion].timer);
}