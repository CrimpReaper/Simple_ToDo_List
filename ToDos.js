const toDoList = document.getElementById('to-do-list');
const form = document.querySelector('#list');
//const toDoItem = document.querySelectorAll('.to-do');


toDoList.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }

    else if(e.target.tagName === "LI"){
        e.target.classList.toggle('strike')
    }
});


form.addEventListener('submit', function(e){
    e.preventDefault();
    const newText = document.createElement('li');
    const newBtn = document.createElement('button');
    newBtn.innerText = 'x';
    newBtn.className = 'to-do';
    newText.append(document.getElementById("new-text").value + ' ');
    toDoList.appendChild(newText); 
    newText.appendChild(newBtn);
});


