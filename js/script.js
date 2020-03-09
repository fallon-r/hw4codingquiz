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

var t;
var seconds;
var deadline;
var time_in_seconds;

// Makes iterating through the clock easier 
var countForI = 0;

// global variables to manipulate timer on multiple click events

// game dead till iniitialized
$("#submit").prop('disabled', true);
$("#A").prop('disabled', true);
$("#B").prop('disabled', true);
$("#C").prop('disabled', true);
$("#D").prop('disabled', true);




// Click event for timer 
$("#startBtn").click(function(event) {
    countForI = countForI + 1;

    // remove the start button
    $("#startBtn").remove();
    // timer creation
    time_in_seconds = 120;
    // var current_time = Date.parse(new Date());



    function time_remaining(endtime) {
        t = time_in_seconds--;
        deadline = 120 - t;
        // seconds = Math.floor((t / 1000));

        return t;
    }

    function run_clock(id, endtime) {
        var clock = document.getElementById("timerDisplay");

        function update_clock() {
            var t = time_remaining(endtime);
            clock.innerHTML = t;

            if (t <= 0) { clearInterval(timeinterval); };

            // $("#submit").click(function(event) {
            //     if (qArray[countForI - 1].answer.hasClass("btn-light") == false) {
            //         time_remaining(t) - 5;
            //         
            //         return t;
            //     };
            //     console.log("submit" + countForI);

            // })

        }
        update_clock();

        $("#submit").click(function(event) {
            if (qArray[countForI - 1].answer.hasClass("btn-light") == false) {
                time_remaining(t) - 5;

                return t;
            };
            console.log("submit" + countForI);

        })

        var timeinterval = setInterval(update_clock, 1000);

    };

    run_clock('#timerDisplay', deadline);



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

    // if () {
    //     alert("You're done bro")
    // }


});






// submit button 
$("#submit").click(function(event) {

    countForI = countForI + 1;
    if (countForI <= 10) {
        $("#questionNumber").text("Question #" + countForI);
        $("#question").text(qArray[countForI].question);
        $("#A").text(qArray[countForI].a);
        $("#B").text(qArray[countForI].b);
        $("#C").text(qArray[countForI].c);
        $("#D").text(qArray[countForI].d);

        // Resets buttons to dark or light
        $("#A, #B, #C, #D").removeClass("btn-light");
        $("#A, #B, #C, #D").addClass("btn-dark");
    } else {

        // stops clock & stores time as score 

        // Empties card for initial submission
        $("#questionNumber").empty();
        $("#question").empty();
        $("#answerButton").empty();

        $("#questionNumber").text("Congrats, you made it to the end.")
        $("#question").prepend("<img src='https://media.giphy.com/media/W9lzJDwciz6bS/giphy.gif' style='display:block;margin-left:auto;margin-right:auto;width:40%;height:40%%,max-height:200px;max-width:200px'>");
        $("#answerButton").append("<input type='text' maxlength='3'>");
        $("#answerButton").append("<h1 style='color:green'>").text(t.value);
        $("#answerButton").append("<p style='color:green'>").text("Please enter your initials ");
        $("#answerButton").append("<input type='text' class='width-25'>");

        $("#submit").text("You are the one");

    }

    // checks if question number is <10


});




// Outline / Pseudo code
// for HW - week 4

// Generate first question + answers + data attributes 
// add "click" event for answer buttons 
// increment a counter
// Generate question 
// if incorrect 
//deduct time counter