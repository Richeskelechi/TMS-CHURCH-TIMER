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
    var time = parseInt(prompt("Enter time in Minutes", 0));
    if(isNaN(time)){
        alert("Your Time Must be in Number(whole Number) which is greater than 0");
        window.location.reload();
    }else if(time <= 0){
        alert("Your Time Must be greater than 0");
        window.location.reload();
    }
    var displayTime = 60 * time,
        display = document.querySelector('#time');
    startTimer(displayTime, display);
};