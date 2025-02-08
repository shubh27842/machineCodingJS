const barValue = document.querySelector('.bar-value');
const startButton = document.querySelector('button.start');
const resetButton = document.querySelector('button.reset');
const progressIndicator = document.querySelector('.indicator');
let inc = 0;
let timer;
startButton.addEventListener('click', () => {
    inc = 0;
    timer = setInterval(() => {
        barValue.style.width = `${inc + 2}px`;
        progressIndicator.innerText = `Value: ${(inc+2)/2}%`;
        inc+=2;
        if(inc>=200)
            clearInterval(timer);
    }, 100);
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    inc= 0;
    barValue.style.width = '0px';
});
