const accContainer = document.querySelector('.accordian-container');

accContainer.addEventListener('click', (e) => {
    const tabs = document.querySelectorAll('.acc-tab');
    for(let i = 0; i< tabs.length; i++){
        if(tabs[i] === e.target){
            tabs[i].children[1].classList.toggle('show');
        }else{
            tabs[i].children[1].classList.remove('show');
        }
    }
})
