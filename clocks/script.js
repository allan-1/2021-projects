const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hour')
const date = document.querySelector('.day h1');

function getTime() {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    date.innerText = `${day} / ${month + 1} / ${year}`
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