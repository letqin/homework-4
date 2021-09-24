var score = {
};

let btn = document.createElement("button");

btn.innerHTML = "Start";

btn.onclick = function () {
    console.log("contact");
};

document.body.appendChild(btn);

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

var timeLeft = 5;

var timer = setInterval(function() {
    timeLeft --;

    if (timeLeft <= 0) {
        clearInterval(timer);
    }

    console.log(timeLeft);
}, 1000)

console.log (timeLeft);

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

document.getElementsByClassName("days").innerHTML = days + "d "
document.getElementsByClassName("hours").innerHTML = hours + "h " 
document.getElementsByClassName("mins").innerHTML = minutes + "m " 
document.getElementsByClassName("secs").innerHTML = seconds + "s"

