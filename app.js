let secondsHand = document.querySelector(".seconds");
let minutesHand = document.querySelector(".minutes");
let hourHand = document.querySelector(".hour");
setInterval (rotate, 1000)
 function rotate() {
    let displaySeconds = new Date().getSeconds() / 60;
    let displayMinutes = (displaySeconds + new Date().getMinutes()) / 60;
    let displayHour = (displayMinutes + new Date().getHours()) /  12;


    // setRotation(secondsHand, displaySeconds);
    // setRotation(minutesHand, displayMinutes);
    // setRotation(hourHand, displayHour);

    // function setRotation (element, rotationDisplay) {
    //     element.style.setProperty("--rotation", rotationDisplay * 360);
    // }

    secondsHand.style.transform = "rotate("+displaySeconds*360 + "deg)"
    minutesHand.style.transform = "rotate("+displayMinutes*360 + "deg)"
    hourHand.style.transform = "rotate(" + displayHour*360 + "deg)"
}

rotate();
