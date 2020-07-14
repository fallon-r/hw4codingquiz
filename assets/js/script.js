// Global Variables for script

var currentQ = 0;
var time = qArray.length * 10; 
var timer;
var score;
var userInitials="";


// DOM elements to cut back on code
var starter = $("#startBtn");
var qNum = $("#questionNumber"); 
var clock = $("#timerDisplay");
var question = $("#question");
var submit = $("#submit");
var chA = $("#A").next();
var chB = $("#B").next();
var chC = $("#C").next();
var chD = $("#D").next();

// Completion elements
var complete = "<img src='https://media.giphy.com/media/W9lzJDwciz6bS/giphy.gif' class='image-fluid center' id='complete'/>"+"<input type='text' id='initials' class='center rounded text-center'  maxlength='3' placeholder='Initials go here'/>";

//sfx for
var kungFu = new Audio("/assets/kungfu.wav");
var rightSound = new Audio("/assets/true.wav");
var wrongSound = new Audio("/assets/wrong.wav");
//quiz initializer
function start (){
    // initialize form buttons
    $(".choice").children().prop("disabled", false);
    $("#submit").prop("disabled", false);
    $("#startBtn").remove();
    
    timer = setInterval(tick, 1000);
    clock.text(time);

    questionGrab();
}

// Question getter

function questionGrab (){

    var qNow = qArray[currentQ];

    // Render question and choices
    qNum.text("Question " + (qArray.indexOf(qNow) + 1));
    question.text(qNow.question);
    chA.text(qNow.a);
    chB.text(qNow.b);
    chC.text(qNow.c);
    chD.text(qNow.d);

}

function questionSubmit(){
    if($("input:checked").val() != qArray[currentQ].answer){

       

        if(time < 10){
            clearInterval(timer);
            time =0;
            finish();
        } else{
            time -=10;
        }
        clock.text(time);
        qNum.text("WRONG!");
        wrongSound.play();
    } else{
        currentQ++;


        rightSound.play();
    }

    if(currentQ === qArray.length){
        finish();
    } else {
        questionGrab();
    }

}


// ticker
function tick(){

    time--;
    clock.text(time);
    if(time <= 0){
        time = 0; 
        clearInterval(timer);
        finish();

    }

};

function finish(){
    score =time;
    console.log(score);
    kungFu.play();
    $("#questionCard").children().clear;
    $("footer").remove();
    $("form").remove();
    submit.remove();
    $("#cardFoot").append("<input type='button' id='submitScore' class='btn btn-rounded btn-block btn-success mx-auto w-50' enabled value='Submit' />")

        qNum.text("You are the one");
    question.text("Congratulations you scored " + score + " points. Enter your initials below to go on the leaderboard.")
    $(".card-body").prepend(complete);

    $("#submitScore").on("click", function(){
        userInitials = $("#initials").val().trim();

        if(userInitials.length === 0){
            alert("Initials cannot be empty")
        }else{
    
        scoreSubmit()
        }
    })

}

function scoreSubmit(){
    var finalScore = {
        score: score,
        initials: userInitials
    };

    var highscore= JSON.parse(localStorage.getItem("highscores")) || [];



    // highscore push
   

    highscore.unshift(finalScore);


    highscore.sort(function(a,b){
        return b.score - a.score;
    })

    if(highscore.length > 10){
        highscore.pop();
    }

    localStorage.setItem("highscores", JSON.stringify(highscore))

    window.location.href = "highscores.html";




 

}



starter.click(function(event){
    start();

});

submit.click(function(event){
    questionSubmit();
});
console.log(qArray);