const listItemValues = ["value_1", "value_2", "value_3"];
const selectContainer = document.querySelector(".select-container");
const options = document.createElement("ul");
const value = document.getElementById('value');
listItemValues.forEach((list) => {
    const li = document.createElement("li", list);
    li.innerText = list;
    li.classList.add("option");
    options.appendChild(li);
});
options.classList.add('select-options')
selectContainer.appendChild(options);
selectContainer.addEventListener('click', (e) => {
    options.classList.toggle('show');
    if(e.target.localName === 'li'){
        value.innerText = e.target.innerText;
    }
})