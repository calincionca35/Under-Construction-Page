//Helper Function
var $ = function(id) {
    return document.getElementById(id);
};

//set countdown date
var countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();

//update countdown every second
var countdown = setInterval(function() {
    "use strict";
    //get today date and time
    var today = new Date().getTime();

    //find interval between today and countdown date
    var interval = countDownDate - today;

    //calculate days, hours, minutes and seconds to countdown date
    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((interval % (1000 * 60)) / 1000);

    //display results
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    //when countdown ends, write "Under Construction"
    if (interval < 0) {
        clearInterval(countdown);
        document.getElementById("wrapper").innerHTML = "Under Construction";
        document.getElementById("wrapper").style.color = "#ff0";
        document.getElementById("wrapper").style.fontSize = "2.25em";
    }
}, 1000);

//Footer Copyright Year
$("copyRightYear").innerHTML = new Date().getFullYear();
