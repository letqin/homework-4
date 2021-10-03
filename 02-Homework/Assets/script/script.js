var startButton = document.getElementById("start");
var answers = document.getElementById("correct");
var wrongAnswers = document.getElementById("incorrect")
var timer = document.getElementById();
var timeLeft = document.getElementById("");
var = document.getElementById("");
var = document.getElementById("");

var timeLeft = 5

btn.innerHTML = "Start";

btn.onclick = function (timer) {
    var timer = setInterval(function() {
        timeLeft --;
    
        if (timeLeft <= 0) {
            clearInterval(timer);
        };
    
        console.log(timeLeft);
    }, 1000);
    console.log("contact");
};

var questions = [

    {
        question: "What are the similarities between Java and JavaScript?",
        options: ["They are the same thing.", "Java is a front end framework, JavaScript is a database.", "Nothing, don't be ridiculous.", "They both require coffee in the boilerplate."],
        answer: "Nothing, don't be ridiculous."
    },

    {
        question: "What is an array with regards to JavaScript?",
        options: ["A beam of light", "An arrangement of troops", "An indexed set of related elements", "A list of jurors"],
        answer: "An indexed set of related elements",
    },

    // {
    //     question: 
    //     options: 
    //     answer: 
    // },

    // {
    //     question: 
    //     options: 
    //     answer: 
    // },

    // {
    //     question: 
    //     options: 
    //     answer: 
    // },

    // {
    //     question: 
    //     options: 
    //     answer: 
    // },

    // {
    //     question: 
    //     options: 
    //     answer: 
    // },
];

// the first question is presented
    // if the answer is correct, a point is added to the player score
    // if the answer is incorrect, time is subtracted

// the next question is presented to the user

// the quiz is over if
    // all of the questions are answered
    // or
    // time runs out

// asks for initials

// saves initials and high score in local storage
