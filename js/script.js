// Global Variables for script

var currentQ = 0;
var time = qArray.length * 10; 
var timer;

// DOM elements to cut back on code



//sfx for finish


//quiz initializer
function start (){
    // initialize form buttons
    $(".choice").children().prop("disabled", false);
    $("#submit").prop("disabled", false);
    $("#startBtn").remove();
    
    timer = setInterval(tick, 1000);
    $("#timerDisplay").text(time);
}

// ticker
function tick(){

    time--;
    // $("#timerDisplay").textContent() = time;

    if(time <= 0){
        // end();

    }

}


$("#startBtn").click(function(event){
    start();

});
console.log(qArray);