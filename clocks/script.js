const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hour')

function getTime() {
    const now = new Date();
    let seconds = now.getSeconds()
    let secdegree = (seconds / 60) * 360;
    secondsHand.style.transform = `rotate(${90 + secdegree}deg)`;
    let minutes = now.getMinutes();
    let minDegree = (minutes / 60) * 360;
    minutesHand.style.transform = `rotate(${90 + minDegree}deg)`
    let hours = now.getHours();
    let hoursDegree = (hours / 12) * 360;
    hourHand.style.transform = `rotate(${90 + hoursDegree}deg)`
    console.log(secdegree)
}

setInterval(getTime, 1000)