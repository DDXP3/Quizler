
//Global Variable

var btn = document.querySelector("#startQuiz");
var title = document.querySelector(".title");
var foot = document.querySelector("footer");
var score = document.querySelector(".score");
var timer = document.querySelector(".timer");
var quizcard = document.querySelector(".quizcard");
var WaH = document.querySelector(".wrongAndHighscore")
var quest = document.querySelector(".question");
var opt = document.querySelector(".Choices")
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var timernum = 20;
var scorenum = 0;
var countdown;
var i = 0;
var questions= [
    "Question 1: What is 1+1?",
    "Question 2: What is Gary's dj name?",
    "Question 3: Did you know, that squids can fly?",
    "Question 4: Did you know that Gary is a Mindflayer?",
    "Question 5: Did you know?"
]
var answers= [
    {choice1: 0, choice2: 1, choice3: 0, choice4: 0, option1: 1, option2: 2, option3: 3, option4: 4},
    {choice1: 1, choice2: 0, choice3: 0, choice4: 0, option1: "DJ GarBear", option2: "DJ Gar", option3: "DJ Snail", option4: "DJ GA"},
    {choice1: 0, choice2: 0, choice3: 0, choice4: 1, option1: "Yes, I Knew", option2: "Yes, I heard", option3: "No, I didn't know", option4: "What?"},
    {choice1: 0, choice2: 0, choice3: 0, choice4: 1, option1: "Yes, I Knew", option2: "Yes, I heard", option3: "No, I didn't know", option4: "What?"},
    {choice1: 1, choice2: 1, choice3: 1, choice4: 1, option1: "Yes, I Knew", option2: "Yes, I heard", option3: "No, I didn't know", option4: "What?"},
];
var inSub = document.querySelector(".initialSubmition");
var initialInput = document.querySelector("#initials");
var subBtn = document.querySelector(".sub");
var HS = document.querySelector(".Highscore");
var HSnum = document.querySelector(".HS");
var HStime = document.querySelector(".HStime");
var HSin = document.querySelector(".initials");
var highscorenum;
var highscoretimenum;
var highscoreIP;

//starting point
btn.addEventListener("click", startQuiz);

//select choice button
choice1.addEventListener("click", clickChoice1);
choice2.addEventListener("click", clickChoice2);
choice3.addEventListener("click", clickChoice3);
choice4.addEventListener("click", clickChoice4);

//submit button
subBtn.addEventListener("click", submitscore);

//show highscore if HSin.length >0
highscorenum = localStorage.getItem("highscore");
if (highscorenum > 0) {
    HS.setAttribute("style","display:block;");
    highscoretimenum = localStorage.getItem("highscoretime")
    highscoreIP = localStorage.getItem("highscorein")
    HSnum.textContent = highscorenum
    HStime.textContent = highscoretimenum
    HSin.textContent = highscoreIP
}

//start the Timer
function startTimer(){ 
    timernum = 20;
    countdown = setInterval(function() {
        timer.textContent = timernum;
        timernum--;
        if (timernum < 0) {
            //game over
          clearInterval(countdown);
          quizOver();
        }
      }, 1000)
}

//start the Quiz
function startQuiz(){

//     set ".title font size to large"
    title.setAttribute("style","font-size: large;");

//     set "quiz card to display"
    quizcard.setAttribute("style","display: block;")

//     set "footer to display: none;"
    foot.setAttribute("style","display: none;")

//      set "button to display: none;"
    btn.setAttribute("style","display: none;")

    quest.textContent = questions[i]
    choice1.textContent = answers[i].option1;
    choice2.textContent = answers[i].option2;
    choice3.textContent = answers[i].option3;
    choice4.textContent = answers[i].option4;

    startTimer();
}

function clickChoice1(){
    if (answers[i].choice1 === 0){
        timernum = timernum - 5;
        timer.textContent = timernum; 
        title.setAttribute("style","background-color:red;");
        title.textContent = "wrong"
    }
    else{
    //answers[i].choice1 = 1 {
        scorenum++;
        score.textContent = scorenum;
        title.setAttribute("style","background-color:rgb(0, 88, 0);");
        title.setAttribute("style","font-size: large;");
        title.textContent = "Javascript Fundamental Quiz"
    }
    quiz();
}

function clickChoice2(){
    if (answers[i].choice2 === 0){
        timernum = timernum - 5;
        timer.textContent = timernum;
        title.setAttribute("style","background-color:red;");
        title.textContent = "wrong"
    }
    else{
    // (answers[i].choice2 = 1){
        scorenum++;
        score.textContent = scorenum;
        title.setAttribute("style","background-color:rgb(0, 88, 0);");
        title.setAttribute("style","font-size: large;");
        title.textContent = "Javascript Fundamental Quiz"
    }

    quiz();
}

function clickChoice3(){
    if (answers[i].choice3 === 0){
        timernum = timernum - 5;
        timer.textContent = timernum; 
        title.setAttribute("style","background-color:red;");
        title.textContent = "wrong"
    }
    else{
    // (answers[i].choice3 = 1){
        scorenum++;
        score.textContent = scorenum;
        title.setAttribute("style","background-color:rgb(0, 88, 0);");
        title.setAttribute("style","font-size: large;");
        title.textContent = "Javascript Fundamental Quiz"
    }
    quiz();
}

function clickChoice4(){
    if (answers[i].choice4 === 0){
        timernum = timernum - 5;
        timer.textContent = timernum; 
        title.setAttribute("style","background-color:red;");
        title.textContent = "wrong"
    }
    else{
    // (answers[i].choice4 = 1){
        scorenum++;
        score.textContent = scorenum;
        title.setAttribute("style","background-color:rgb(0, 88, 0);");
        title.setAttribute("style","font-size: large;");
        title.textContent = "Javascript Fundamental Quiz"
    }
        quiz();
}

function quiz(){
    i++;
    if (i > 4){
        quest.textContent = scorenum
        title.setAttribute("style","background-color:rgb(0, 88, 0);");
        opt.setAttribute("style","display:none;");
        clearInterval(countdown);
        title.textContent ="You Finished the Quiz, Your Score is"
        checkHighscore();
    }
    if (i <= 4){
        quest.textContent = questions[i]
        choice1.textContent = answers[i].option1;
        choice2.textContent = answers[i].option2;
        choice3.textContent = answers[i].option3;
        choice4.textContent = answers[i].option4;
    }
  }

function quizOver(){
        quest.textContent = scorenum
        title.setAttribute("style","background-color:rgb(0, 88, 0);");
        opt.setAttribute("style","display:none;");
        title.textContent ="The Quiz is Over, Your Score is"
        checkHighscore();
}

function checkHighscore(){
    highscorenum = localStorage.getItem("highscore");
        if (scorenum > highscorenum || highscorenum === null){
            title.textContent = "New Highscore!"
        inSub.setAttribute("style","display: block;");
        }
}

//saving to local storage
function submitscore(event){
    event.preventDefault()
    localStorage.setItem("highscore", scorenum);
    localStorage.setItem("highscoretime", timernum);
    localStorage.setItem("highscorein", initialInput.value);
}