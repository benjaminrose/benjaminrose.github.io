// Set up a basic date math to output number of weeks till launch readiness 

// the month is 0-indexed
var endDate = new Date(2026, 9, 30);
// var endDate = new Date(2023, 05, 23);
var today = new Date();

var difference = endDate - today;
var days = difference / 1000 / 60 / 60 / 24;
var weeks = parseInt(days / 7);
var sprints = parseInt(days / 14);
var messaged = "";
if (weeks < 0) {
    message = "We are past the Roman science pipeline due date!";
} else {
    message = "The Roman science pipeline is due in only <b>" + weeks + " weeks.</b>";
    // message = "The Roman science pipeline is due in only <b>" + sprints + " sprints.</b>";
}


// this adds the output to <div id="launch-readiness"></div>
// embend js with <script src="js/launch_countdown.js"></script>
document.getElementById("launch-readiness").innerHTML = message;

// use this with terminal & node
// console.log(message)
