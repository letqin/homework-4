var win = document.querySelector(".win");
var loss = document.querySelector(".loss");
var timer = document.querySelector(".timer");
var start = document.querySelector("start");

var correct = 0;
var incorrect = 0;
var score = 0;
var timer;
var timerCount;

// called when the page starts up to show previous high scores
function init() {
    getHighScore();
};

// starts the quiz when the user clicks the start button
    // sets score to zero
    // starts timer
function start() {
    score = 0;
    timerCount = 30;
    startButton.disabled = true;
    startTimer();
};

function correct() {
    wordB
    score++;

};

function incorrect () {

};
