
//Global Variable

var btn = document.querySelector("#startQuiz");
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
var score;
var scorenum = 0;
var questions= ["Question 1: What is 1+1?","Question 2: What is Gary's dj name?","Question 3: What was the first question?","Question 4: What is the answer to question 2?","Question 5: What does HTML stand for?","Question 6: What does CSS stand for?","Question 7: What does JS stand for?","Question 8: Did you know, that squids can fly?","Question 9: Did you know that Gary is a Mindflayer?","Question 10: Did you know?"]
var answers= ["2","DJGarBear","","","","","","","",""]
value = 0;

//starting point
btn.addEventListener("click", startQuiz);

//Value
function addValue1(){
    value = 1;
}

function addValue2(){
    value = 2;
}

function addValue3(){
    value = 3;
}

function addValue4(){
    value = 4;
}

//start the Quiz
function startQuiz(){
    value = 0;
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
    value = 0;
    console.log("startQuetion1");
    quest.textContent = questions[0]
    choice1.textContent = 1;
    choice2.textContent = 2;
    choice3.textContent = 3;
    choice4.textContent = 4;
//     if (value = 2) {
// //      set "wrong or right to red or green and display block"
//         WorR.setAttribute("style","background-color:green;")
//         WorR.setAttribute("style","display:block;")
//         WorR.textContent = "Correct"
//         score.textContent = scorenum;
//         scorenum++;
//         startQuestion2();
//     }
//     if (value = 1 || 3 || 4) {
//         WorR.setAttribute("style","background-color:red;")
//         WorR.setAttribute("style","display:block;")
//         WorR.textContent = "Wrong"
//         startQuestion2();
//     }
}

function startQuestion2(){
    value = 0;
    console.log("startQuetion2");
    quest.textContent = questions[1]
    choice1.textContent = "DJ.GB";
    choice2.textContent = "DJ GarBear";
    choice3.textContent = "DJ MindFlayer";
    choice4.textContent = "DJ SnailRizzal";
    if (value = 1 || 2 || 3 || 4) {
 //      set "wrong or right to red or green and display block"
        WorR.setAttribute("style","background-color:green;")
        WorR.setAttribute("style","display:block;")
        WorR.textContent = "Correct"
        score.textContent = scorenum;
        scorenum++;
        // startQuestion3();
    }
}

function startQuestion3(){
    value = 0;
    console.log("startQuetion3");
    quest.textContent = questions[2]
    choice1.textContent = "What is 1 x 2?";
    choice2.textContent = "What is Gary's DJ name?";
    choice3.textContent = "What is 1+1?";
    choice4.textContent = "What is the quiz?";
}

function startQuestion4(){
    value = 0;
    console.log("startQuetion4");
    quest.textContent = questions[3]
    choice1.textContent = "DJ.GB";
    choice2.textContent = "DJ GarBear";
    choice3.textContent = "DJ MindFlayer";
    choice4.textContent = "DJ SnailRizzal";
}

function startQuestion5(){
    value = 0;
    console.log("startQuetion5");
    quest.textContent = questions[4]
    choice1.textContent = "Hot Turtle Milk Level";
    choice2.textContent = "Hypertext Makeup Language";
    choice3.textContent = "Hypertext Markup Language";
    choice4.textContent = "Hydro Text Making Language";
}

function startQuestion6(){
    value = 0;
    console.log("startQuetion6");
    quest.textContent = questions[5]
    choice1.textContent = "Cascading Super Soaker";
    choice2.textContent = "Cat's Super Shaker";
    choice3.textContent = "Car's Shiny Shiner";
    choice4.textContent = "Cascading Style Sheets";
}

function startQuestion7(){
    value = 0;
    console.log("startQuetion7");
    quest.textContent = questions[6]
    choice1.textContent = "Johna Skitter";
    choice2.textContent = "John Skitter";
    choice3.textContent = "Java Sandal";
    choice4.textContent = "Java Scrpit";
}

function startQuestion8(){
    value = 0;
    console.log("startQuetion8");
    quest.textContent = questions[7]
    choice1.textContent = "Yeah, I know";
    choice2.textContent = "I kinda knew";
    choice3.textContent = "I didn't know";
    choice4.textContent = "What?!?";
}

function startQuestion9(){
    value = 0;
    console.log("startQuetion9");
    quest.textContent = questions[8]
    choice1.textContent = "Yeah, I know";
    choice2.textContent = "I kinda knew";
    choice3.textContent = "I didn't know";
    choice4.textContent = "What?!?";
}

function startQuestion10(){
    value = 0;
    console.log("startQuetion10");
    quest.textContent = questions[9]
    choice1.textContent = "Yeah, I know";
    choice2.textContent = "I kinda knew";
    choice3.textContent = "I didn't know";
    choice4.textContent = "What?!?";
}

//start the Timer
function startTimer(){ 
    value = 0;
    console.log("startTimer")
    timernum = 60;
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

function quizOver(){
    console.log("quizOver")
}