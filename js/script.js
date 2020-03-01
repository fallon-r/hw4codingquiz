// Click event for timer 
$("#startBtn").click(function(event) {
    // remove the start button
    $("#startBtn").remove();
    var time_in_minutes = 2;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes * 60 * 1000);


    function time_remaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds };
    }

    function run_clock(id, endtime) {
        var clock = document.getElementById("timerDisplay");

        function update_clock() {
            var t = time_remaining(endtime);
            clock.innerHTML = t.minutes + ':' + t.seconds;
            if (t.total <= 0) { clearInterval(timeinterval); }
        }
        update_clock(); // run function once at first to avoid delay
        var timeinterval = setInterval(update_clock, 1000);
    }
    run_clock('#timerDisplay', deadline);


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