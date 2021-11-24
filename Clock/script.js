const displayClock = document.getElementById('getClock');
const displayDate = document.getElementById('getDate')

document.addEventListener('DOMContentLoaded', getClock);

function getClock() {
    let date = new Date()
    let day = date.toLocaleString('en-US', {day: '2-digit', month: 'short', year: 'numeric'}) 
    let time = date.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: 'true'})
  
    displayDate.innerText = day
    displayClock.innerText = time
    setTimeout(getClock, 1000)
}