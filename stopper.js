
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let clearBtn = document.getElementById('clearBtn');
let timeDisplay = document.getElementById('time');

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay() {
    let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeDisplay.textContent = formattedTime;
}

function startTimer() {
    timer = setInterval(function() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(timer);
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function clearTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();

    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
clearBtn.addEventListener('click', clearTimer);
