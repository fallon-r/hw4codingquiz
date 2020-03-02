var qNum = 1;

// question Array
var qArray = [{
        question: "What color is the sky?",
        a: "red",
        b: "blue",
        c: "green",
        d: "purple"
    },
    {
        question: "What color is the ocean",
        a: "pink",
        b: "blue",
        c: "green",
        d: "purple"
    }, {
        question: "What color is the sky?",
        a: "red",
        b: "blue",
        c: "green",
        d: "purple"
    }, {
        question: "What color is the sky?",
        a: "red",
        b: "blue",
        c: "green",
        d: "purple"
    }, {
        question: "What color is the sky?",
        a: "red",
        b: "blue",
        c: "green",
        d: "purple"
    }, {
        question: "What color is a banana?",
        a: "red",
        b: "blue",
        c: "yellow",
        d: "purple"
    },

];




// Click event for timer 
$("#startBtn").click(function(event) {
    // remove the start button
    $("#startBtn").remove();
    // timer creation
    var time_in_minutes = 2;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes * 60 * 1000);


    function time_remaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        // adding slice to seconds to make sure there's a 0 when the numbers's <10
        return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': ('0' + seconds).slice(-2) };
    }

    function run_clock(id, endtime) {
        var clock = document.getElementById("timerDisplay");

        function update_clock() {
            var t = time_remaining(endtime);
            clock.innerHTML = t.minutes + ':' + t.seconds;

            if (t.total <= 0) { clearInterval(timeinterval); }
        }
        update_clock();
        var timeinterval = setInterval(update_clock, 1000);
    }
    run_clock('#timerDisplay', deadline);



    // initialize quiz with first question

    $("#questionNumber").text("Question #" + qNum++);
    $("#question").text(qArray[0].question);
    $("#A").text(qArray[0].a);
    $("#B").text(qArray[0].b);
    $("#C").text(qArray[0].c);
    $("#D").text(qArray[0].d);
    $("#submit").prop('disabled', false);

});




// submit button 
$("#submit").click(function(event) {

    for (var i = 0; i < qArray.length + 1; i++) {
        $("#questionNumber").text("Question #" + i);
        $("#question").text(qArray[i].question);
        $("#A").text(qArray[i].a);
        $("#B").text(qArray[i].b);
        $("#C").text(qArray[i].c);
        $("#D").text(qArray[i].d);
    };


    console.log("Should increment qNum");

});



// Outline / Pseudo code
// for HW - week 4
// Create Q&A Object.  Maybe an array? 
// ex. Q&A = [
//   { q: " what is this?" 
//      1: " "
//      2: " "
//      3: " "
//      4: " "
//      a: 2 }
//       ]



// Generate first question + answers + data attributes 
// add "click" event for answer buttons 
// increment a counter
// Generate question 
// if incorrect 
//deduct time counter