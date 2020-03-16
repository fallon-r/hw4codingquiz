// question Array
var qArray = [{
        question: "Who created Javascript?",
        a: "Brendan Eich",
        b: "Bill Gates",
        c: "Steve Jobs",
        d: "Richard Stallman",
        answer: ($("#A"))
    },
    {
        question: "What is the command to clear a console?",
        a: "console.log(clear)",
        b: "console.empty()",
        c: "clear",
        d: "console.clear()",
        answer: ($("#D"))
    }, {
        question: "HTML stands for :",
        a: "Hyper Transient Maker Language",
        b: "Hyper Text Markup Language",
        c: "Halode Typographic Maximized Lexicon",
        d: "Hadron Transforming Markdown Launcher",
        answer: ($("#B"))
    }, {
        question: "What color will the hex #ff0000 create?",
        a: "red",
        b: "blue",
        c: "green",
        d: "purple",
        answer: ($("#A"))
    }, {
        question: "Who regulates HTML Standards?",
        a: "BSD",
        b: "Oracle",
        c: "Apple",
        d: "W3C",
        answer: ($("#D"))
    }, {
        question: "Who is the director of the W3C?",
        a: "Tim Cook",
        b: "Tim Curry",
        c: "Tim Allen",
        d: "Tim Berners-Lee",
        answer: ($("#D"))
    }, {
        question: "The creator of the first ROM cartridge was:",
        a: "Jerry Lawler",
        b: "Jerry Lawson",
        c: "Jerry Seinfeld",
        d: "Jerry Louis",
        answer: ($("#B"))
    }, {
        question: "The following is NOT an array method",
        a: "array.splice()",
        b: "array.slice()",
        c: "array.split()",
        d: "array.spin()",
        answer: ($("#D"))
    }, {
        question: "If (i != 0) runs when",
        a: "i is NOT equal to 0",
        b: "i is equal to 0",
        c: "i = zero",
        d: "i is undefined",
        answer: ($("#A"))
    }, {
        question: "CSS stands for:",
        a: "Cascading Style Sandwich",
        b: "Cataclysmic Style Synthesizer",
        c: "Coronal Stylizing System",
        d: "Cascading Style Sheet",
        answer: ($("#D"))
    }, {
        question: "if (i > 4 && n < 7) will run when",
        a: "i is 5",
        b: "i is 3 and n is 6",
        c: "n is 6",
        d: "i is 7 and n is 5",
        answer: ($("#D"))
    }
];
// Makes iterating through the clock easier 
var countForI = 0;
var time = qArray.length * 10;
var liveTimer = document.getElementById("timerDisplay");


// global variables to manipulate timer on multiple click events

// game dead till iniitialized
$("#submit").prop('disabled', true);
$("#A").prop('disabled', true);
$("#B").prop('disabled', true);
$("#C").prop('disabled', true);
$("#D").prop('disabled', true);
// timer functions


function answerCheck() {

    console.log("clicked submit; time should decrement");
    time -= 3;
    liveTimer.innerHTML = time;
};
$("#submit").click(function(event) {
    answerCheck();
})




// Click event for timer 
$("#startBtn").click(function(event) {
    countForI = countForI + 1;

    // remove the start button
    $("#startBtn").remove();
    // timer start
    $("#timerDisplay.disabled").toggleClass("running");
    console.log($("#timerDisplay").hasClass("running"));


    // initialize quiz with first question

    $("#questionNumber").text("Question #" + countForI);
    $("#question").text(qArray[0].question);
    $("#A").text(qArray[0].a);
    $("#B").text(qArray[0].b);
    $("#C").text(qArray[0].c);
    $("#D").text(qArray[0].d);

    // Turn on buttons
    $("#submit").prop('disabled', false);
    $("#A").prop('disabled', false);
    $("#B").prop('disabled', false);
    $("#C").prop('disabled', false);
    $("#D").prop('disabled', false);

    // Specify clicked button

    $("#A").click(function(event) {
        $("#A").removeClass("btn-dark");
        $("#A").addClass("btn-light");
        $("#B, #C, #D").removeClass("btn-light");
        $("#B, #C, #D").addClass("btn-dark");
        console.log("you clicked A")
    });
    $("#B").click(function(event) {
        $("#B").removeClass("btn-dark");
        $("#B").addClass("btn-light");
        $("#A, #C, #D").removeClass("btn-light");
        $("#A, #C, #D").addClass("btn-dark");
        console.log("you clicked B")
    });
    $("#C").click(function(event) {
        $("#C").removeClass("btn-dark");
        $("#C").addClass("btn-light");
        $("#A, #B, #D").removeClass("btn-light");
        $("#A, #B, #D").addClass("btn-dark");
        console.log("you clicked C")
    });
    $("#D").click(function(event) {
        $("#D").removeClass("btn-dark");
        $("#D").addClass("btn-light");
        $("#A, #B, #C").removeClass("btn-light");
        $("#A, #B, #C").addClass("btn-dark");
    });


    //timer 

    createTimer();

});

function createTimer() {

    liveTimer.innerHTML = time;
    var timer = setInterval(function() {
        liveTimer.innerHTML = liveTimer.innerHTML - 1;

    }, 1000)

};