
let buttonSave=document.querySelector('.main-block-task-button')
buttonSave.addEventListener('click', addNewTask );

function addNewTask(){
    let mainDiv = document.querySelector('.main-block-new-task');
    let textNewTask=document.querySelector('.main-block-task-input').value;
    let newDivTask=document.createElement('div');
    newDivTask.className='main-block-new-task-create';
    newDivTask.innerHTML=textNewTask;
    mainDiv.append(newDivTask);
    
    let newDivTaskDelete =document.createElement('span');
    newDivTaskDelete.className='main-block-new-task-delete';
    newDivTaskDelete.innerHTML='&#10060';
    newDivTask.append(newDivTaskDelete);

    
}

document.querySelector('body').addEventListener('click', deleteThisTask);

function deleteThisTask(e){
if(e.target.classList.contains('main-block-new-task-delete')) {
    e.target.parentNode.remove()
}
}


document.querySelector('body').addEventListener('click', wellDoneTask);
debugger
function wellDoneTask(e){
if(e.target.classList.contains('main-block-new-task-create')) {
    e.target.classList.toggle('line');
}
}










