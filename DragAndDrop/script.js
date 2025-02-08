const container = document.querySelector('.container');
const itemsContainer = document.querySelector('.drag-items-container');
const randomNums = [];
for(let i =0;i<8;i++){
    const num = Math.floor(Math.random() * 100);
    randomNums.push(num);
    const numBlock = document.createElement('button');
    numBlock.innerText = num;
    numBlock.id = num;
    numBlock.draggable = true;
    numBlock.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);
    })
    itemsContainer.appendChild(numBlock);
}

container.addEventListener('dragover', (e) => {
    e.preventDefault();
})

container.addEventListener('drop', (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData('text');
    randomNums.sort((a,b) => a-b);
    if(data == randomNums[0]){
        container.appendChild(document.getElementById(data));
        randomNums.shift()
    }
})