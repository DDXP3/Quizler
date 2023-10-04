
//Global Variable

var btn = document.querySelector("button");
var title = document.querySelector(".title");
var foot = document.querySelector("footer");
var score = document.querySelector(".scoreboard");
var timer = document.querySelector(".timer");
var quizcard = document.querySelector(".quizcard");
var WorR = document.querySelector(".wrongOrRight");
var quest = document.querySelector(".question");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var timernum = 60;
var score = 0;
var questions= ["question: what is 1+1","question: what is gary's dj name","question: ","question: ","question: ","question: ","question: ","question: ","question: ","question: "]
var answers= ["2","DJGarBear","","","","","","","",""]

//starting point
btn.addEventListener("click", startQuiz);

//start the Quiz
function startQuiz(){
    console.log("startQuiz");

//     set ".title font size to large"
    title.setAttribute("style","font-size: large;");

//     set "quiz card to display"
    quizcard.setAttribute("style","display: block;")

//     set "footer to display: none;"
    foot.setAttribute("style","display: none;")

//      set "button to display: none;"
    btn.setAttribute("style","display: none;")

//     set "display the questions and choices"
    startQuestion1();
    startTimer();
}

//start the questions
function startQuestion1(){
    console.log("startQuetion1");
    var rnum = Math.floor(Math.random()*questions.length);
    ranword = questions[rnum]
    quest.textContent = ranword
    console.log(ranword);
    
}

//start the Timer
function startTimer(){
    console.log("startTimer")
    timernum = 10;
    var countdown = setInterval(function() {
        timer.textContent = timernum;
        timernum--;
        if (timernum < 0) {
            //game over
          clearInterval(countdown);
          quizOver();
        }
      }, 1000)
}

function nextquestion(){
    console.log("startQuetion1");
    questions - ranword;
    var rnum = Math.floor(Math.random()*questions.length);
    ranword = questions[rnum]
    quest.textContent = ranword
    console.log(ranword);
    startTimer();
}

function quizOver(){
    console.log("quizOver")
}