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

// when I click the start button

// var button = document.getElementById("startButton").addEventListener(click, function(),) {
//     console.log("hello there"),
// };

// var t = d.getTime();

// a timer starts

var myfunc = setInterval(function() {
    }, 1000)
    

var countDownDate = new Date("Sep 25, 2021 16:37:52").getTime();

console.log(countDownDate);

var now = new Date().getTime();
var timeleft = countDownDate - now;

console.log(now);
console.log(timeleft);

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


console.log(days);
console.log(hours);
console.log(minutes);
console.log(seconds);

if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementsByClassName("days").innerHTML = ""
    document.getElementsByClassName("hours").innerHTML = "" 
    document.getElementsByClassName("mins").innerHTML = ""
    document.getElementsByClassName("secs").innerHTML = ""
    document.getElementsByClassName("end").innerHTML = "Pencils Down";
}

// var minutes = 1000 * 60;
// var hours = minutes * 60;
// var days = hours * 24;
// var years = days * 365;
// var d = new Date();

// console.log(d);

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

