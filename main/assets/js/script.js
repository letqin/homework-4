// questions and answer options
let question = document.querySelector("#question");
let optionA = document.querySelector("#a");
let optionB = document.querySelector("#b");
let optionC = document.querySelector("#c");
let optionD = document.querySelector("#d");
let startQuiz = document.getElementById("start");
// let nextQuestion = document.querySelector("next-question");

// wins, losses, timer, and start button
let win = document.querySelector(".win");
let loss = document.querySelector(".loss");
let timer = document.querySelector(".timer-count");
const start = document.querySelector(".start-button");

// variables for running the quiz
let questionIndex = 0;
let optionIndex = 0;
let correct = 0;
let incorrect = 0;
let score = 0;
let timer = 60;
let timerCount;

// question array
let questions = [
    {
        question: "What is an array?",

        options: [
            "A sea creature",

            "An object which contains multiple values",

            "A function used to determine mass",

            "An object that only stores numbers",  
        ],

        answer: "An object which contains multiple values",
    },

    {
        question: "Why might we use const instead of var or let?",

        options: [
            "Javascript loves the letter 'c'",

            "There is no reason",

            "The value of const will never change",

            "ES6 syntax requires that const is always used",  
        ],

        answer: "The value of const will never change",
    },

    {
        question: "What is a boolean?",

        options: [
            "A data type that evaluates to true or false",

            "A type of soup base used in many recipes",

            "Another word for an array",

            "An encrypted password",  
        ],

        answer: "A data type that evaluates to true or false",
    },

    {
        question: "What is an array method?",

        options: [
            "They are used to modify data within an array",

            "The act of studying computer science",

            "Light refraction in JavaScript",

            "An alternative to an ES5 array",  
        ],

        answer: "They are used to modify data within an array",
    },

    {
        question: "What does NAN mean?",

        options: [
            "Your sweet grandmother",

            "Not A Number",

            "No Arms Now",

            "Never Achieve Nothing",  
        ],

        answer: "Not A Number",
    },

    {
        question: `What is the "global scope"?`,

        options: [
            "The global time standard in JavaScript",

            "A function used to view what JavaScript is doing",

            "The James Webb Space Telescope",

            "Scope that contains all scopes and is visible in all scopes",  
        ],

        answer: "Scope that contains all scopes and is visible in all scopes",
    },

    {
        question: "What is debugging?",

        options: [
            "Never writing code that is broken in the first place",

            "Replacing transistors in your computer with moths",

            "The process of removing issues from code",

            "Calling your local exterminator",  
        ],

        answer: "The process of removing issues from code",
    },

    {
        question: "Why would you console.log something?",

        options: [
            "This is the only way JavaScript can use information",

            "There is no reason to ever console log as it is depreciated",

            "This shows the information to the user in the DOM",

            "To find it's value during the coding or debugging process",  
        ],

        answer: "To find it's value during the coding or debugging process",
    },

    {
        question: "What is ECMAScript?",

        options: [
            "A programming language",

            "The uniform standard for writing JavaScript",

            "Introduced to ensure interoperability between web pages",

            "All of the above",  
        ],

        answer: "All of the above",
    },

    {
        question: "What is a loop?",

        options: [
            "The act of going through an operation multiple times",

            "Broken code",

            "A font ligature in Fira Code",

            "A virtual round-about where tiny cars have traffic jams",  
        ],

        answer: "The act of going through an operation multiple times",
    }
];

let startTime = 120;

// timer function
let timer = () => {
    startTimer
    setInterval(() => {
        if (startTimer === 0) {
            document.querySelector("#timer-display").innerHTML = "Pencils down!";
            clearInterval(startTimer);
        } else {
            startTimer--
            let minutes = Math.floor(startTimer / 60);
            let seconds = startTimer - minutes * 60;
            document.querySelector1("#timer-display").innerHTML =
            "Time Left: " + minutes + ":" + seconds;
        }
    }, 1000);
};

startQuiz.addEventListener("click", (e) => {
    e.preventDefault();
    timer();
    let questions = [...questions[questionIndex].options];
    if (e.target.tagName === "BUTTON") {
        question.innerHTML = questions[questionIndex].question
        optionA.innerText = optionIndex[0];
        optionB.innerText = optionIndex[1];
        optionC.innerText = optionIndex[2];
        optionD.innerText = optionIndex[3];
    }
});

// let quizIndexControl = () => {
//     if (quizIndex >= 9) {
//         showHighScores();
//     } else {
//         questionIndex++;
//     }

//     let shuffle
// }

// called when the page starts up to show previous high scores
function init() {
    getHighScore();
};

// starts the quiz when the user clicks the start button
function start() {
    // sets score to zero
    score = 0;
    timerCount = 60;
    // disables the start button
    startButton.disabled = true;
    // starts timer
    startTimer();
};

function correct() {
    // add 1 point to score
    score++
    // display the next question
};

function incorrect () {
    // subtract 10 seconds
    let time = (time - 10)
    // subtract 1 point from score
    score--
    // display the next question
};


