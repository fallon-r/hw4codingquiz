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

    $("#questionNumber").append(1);

});

// submit button 
$("#submit").click(function(event) {
    for (var i = 0; i > 11; i++) {
        i = i++;
        $("#questionNumber").append(i);

    }
})



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

var qArray = ["What color is the sky?"]


// Generate first question + answers + data attributes 
// add "click" event for answer buttons 
// increment a counter
// Generate question 
// if incorrect 
//deduct time counter