const displayClock = document.getElementById('getClock');
const displayDate = document.getElementById('getDate')

document.addEventListener('DOMContentLoaded', getClock);

function getClock() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    let hour = date.getHours()
    let mins = date.getMinutes();
    let seconds = date.getSeconds()
    month += 1
    hour = (hour < 10) ? '0' + hour : hour 
    mins = (mins < 10) ? '0' + mins : mins
    seconds = (seconds < 10) ? '0' + seconds : seconds 
    displayDate.innerText = day + ' / ' + month + ' / ' + year
    displayClock.innerText = hour + ' : ' + mins + ' : ' + seconds + ' hrs'
    setTimeout(getClock, 1000)
}