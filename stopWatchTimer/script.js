const time = document.querySelector('.time');
const buttons = document.querySelector('.btn-container');

let hours = 0;
let minutes = 0;
let seconds = 0;
let timerId;

function displayTime(hours, minutes, seconds) {
    time.innerText = `${hours < 10 ? `0${hours}`: hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function handleButtonClicks(event){
    const btn = event.target.name;
    if(btn === 'start'){
        timerId = setInterval(() => {
            seconds++;
            if(seconds > 59){
                seconds = 0;
                minutes++;
                if(minutes > 59){
                    minutes = 0;
                    hours++;
                }
            }
            displayTime(hours, minutes, seconds);
        }, 100);
    }else if(btn === 'stop'){
        clearInterval(timerId);
    }else if(btn === 'reset'){
        clearInterval(timerId);
        hours = minutes = seconds = 0;
        displayTime(hours, minutes, seconds);
    }
}

buttons.addEventListener('click', handleButtonClicks)