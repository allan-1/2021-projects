const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const start = document.querySelector('.start');
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

let starttime = 0;
let minutestime = 0;

// event listeners
start.addEventListener('click', startCounter);
stop.addEventListener('click', stopCounter);
reset.addEventListener('click', resetCounter);

// functions

function startCounters() {
    document.querySelector('.start').disabled = true;
    starttime ++
    if (starttime >= 60) {
        minutestime ++
        starttime = 0
    }
    starttime = (starttime < 9) ? '0' + starttime : starttime
    seconds.innerText = starttime + 'S'
    minutes.innerText = minutestime + 'Min'
}
function startCounter() {
    timer = setInterval(startCounters, 1000)
}

function stopCounter() {
    document.querySelector('.start').disabled = false;
    clearInterval(timer)
}
function resetCounter() {
    stopCounter()
    seconds.innerText = '00'
    minutes.innerText = '00'
}