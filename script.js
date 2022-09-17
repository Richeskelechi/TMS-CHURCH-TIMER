function startTimer(duration, display) {

    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes  + ":" + seconds ;
        if (--timer < 0) {
            display.textContent = "TIME UP";
            document.getElementById("body").style.backgroundColor = "red";
        }
    }, 1000);
}

window.onload = function () {
    var time = prompt("Enter time in Minutes");
    var displayTime = 60 * time,
        display = document.querySelector('#time');
    startTimer(displayTime, display);
};