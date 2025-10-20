function addDeleteEvent(delBtn){
    delBtn.addEventListener('click',()=>{
        let parEl= delBtn.parentElement;
        parEl.remove();
    });
}

function addTasks(task){
    let newLi = document.createElement('li');
    let delBtn=document.createElement('button');
    delBtn.classList.add('delete');
    delBtn.innerText='Delete';
    newLi.innerText=task;
    newLi.append(delBtn);
    ul.insertAdjacentElement("beforeend",newLi);
    inputEl.value="";
    addDeleteEvent(delBtn);
}


let addBtn = document.querySelector('#addTask');
let inputEl = document.querySelector('input');
let ul = document.querySelector('.taskWindow > ul');

// addBtn.addEventListener('click',()=>{
//     let task = inputEl.value;
//     task = task.trim();
//     if(task != ""){
//         addTasks(task);
//     }
// });

addBtn.addEventListener('click',()=>{
    let task = inputEl.value;
    task = task.trim();
    if(task != ""){
        let para = document.createElement('p');
        para.innerText=task;
        let divTask = document.createElement('div');
        divTask.classList.add('taskDiv');
        divTask.append(para);
        let newLi = document.createElement('li');
        let delBtn=document.createElement('button');
        delBtn.classList.add('delete');
        delBtn.innerText='Delete';
        divTask.append(delBtn);
        newLi.append(divTask);
        ul.insertAdjacentElement("beforeend",newLi);
        inputEl.value="";
    }
});
ul.addEventListener('click',(e)=>{
    if(e.target.nodeName == "BUTTON"){ //event.target --> Shows us the element that triggered the event , it has a property called 'nodeName' which gives back the name of that element , since we want only delete button could trigger this , that's why we set it to "BUTTON"
        let liItem = e.target.parentElement.parentElement; 
        liItem.remove();
    }
});