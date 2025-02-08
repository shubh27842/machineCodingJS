const sliderBtn = document.querySelector('.slider-btn');
const sliderInitialBar = document.querySelector('.initial-bar');
const sliderFiller = document.querySelector('.slider-filler'); 
const leftPosition = sliderInitialBar.getBoundingClientRect()['left'];
const rightPosition = sliderInitialBar.getBoundingClientRect()['right'];
const barWidth = rightPosition-leftPosition;
let isDragging = false;
let value = 0;
sliderBtn.addEventListener('mousedown', (e) => {
    isDragging = true;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
});

function handleMouseMove(e) {
    if(!isDragging) return;
    const currPos = e.clientX;
    value = (((e.clientX - leftPosition)/barWidth) * 100).toFixed();
    if(currPos > leftPosition && currPos < rightPosition){
        sliderFiller.style.width = `${value}%`;
    }
};

function handleMouseUp(e){
    isDragging = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
};

sliderInitialBar.addEventListener('mousedown', (e) => {
    value = (((e.clientX - leftPosition)/barWidth) * 100).toFixed();
    sliderFiller.style.width = `${value}%`;
});

sliderFiller.addEventListener('mousedown', (e) => {
    value = (((e.clientX - leftPosition)/barWidth) * 100).toFixed();
    sliderFiller.style.width = `${value}%`;
});
