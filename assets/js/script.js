const quizData = [{
    question: "What is JavaScript?",
    a: "programming language used to create interactive effects within web browsers",
    b: "database management system used to store and retrieve data",
    c: "markup language used to structure content on web pages",
    d: "graphics design software used to create web graphics",
    correct: "a",
}, {
    question: "What are the data types in JavaScript?",
    a: "String, Number, Boolean, Object, Undefined",
    b: "String, Number, Boolean, Object, Null",
    c: "String, Number, Boolean, Object, Undefined, Null",
    d: "String, Number, Boolean, Object, Undefined, Null, Symbol",
    correct: "c",
}]

const question = document.getElementById("question");
const a_answer = document.getElementById("a_answer");
const b_answer = document.getElementById("b_answer");
const c_answer = document.getElementById("c_answer");
const d_answer = document.getElementById("d_answer");

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];

    question.innerText = currentQuizData.question;
    a_answer.innerText = currentQuizData.a;
    b_answer.innerText = currentQuizData.b;
    c_answer.innerText = currentQuizData.c;
    d_answer.innerText = currentQuizData.d;

    currentQuestion++;
}

function startBtnQuiz() {
    // hide the quiz rules
    document.querySelector(".quiz-rule-container").style.display = "none";
    // display the quiz and stats container
    document.querySelector(".quiz-container").style.display = "block";
    document.querySelector(".quiz-stats").style.display = "block";
}