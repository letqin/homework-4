var win = document.querySelector(".win");
var loss = document.querySelector(".loss");
var timer = document.querySelector(".timer-count");
var start = document.querySelector(".start-button");

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
    // add 100 points to score
    score + 100
    // display the next question
    
};

function incorrect () {
    // subtract 10 seconds
    // subtract 100 points from score
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

