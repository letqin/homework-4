let win = document.querySelector(".win");
let loss = document.querySelector(".loss");
let timer = document.querySelector(".timer-count");
const start = document.querySelector(".start-button");

let correct = 0;
let incorrect = 0;
let score = 0;
let timer = 60;
let timerCount;

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

            "Studying computer science",

            "",

            "",  
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
            "",

            "",

            "",

            "To find it's value during the coding or debugging process",  
        ],

        answer: "To find it's value during the coding or debugging process",
    },

    {
        question: "",

        options: [
            "",

            "",

            "",

            "",  
        ],

        answer: "",
    },

    {
        question: "",

        options: [
            "",

            "",

            "",

            "",  
        ],

        answer: "",
    }
]

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

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            if (timerCount === 0) {
                // clears the timer
                clearInterval(timer);
                console.log(timer);
                console.log(timerCount);
            };
        };
    }, 1000);
};

