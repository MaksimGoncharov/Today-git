let buttonSave =document.querySelector('.button1');
buttonSave.addEventListener('click', createDiv);


function createDiv() {
let cont=document.querySelector('.add_task');
let task = document.querySelector('.input_task').value;
let newDiv= document.createElement('div');
let newText= document.createElement('textarea')
newDiv.className='new_div';
newText.innerHTML=task;
cont.append(newDiv);
newDiv.append(newText);



let deleteTask = document.createElement('div');
deleteTask.className='delete_task';
deleteTask.innerHTML="❎"
newDiv.append(deleteTask);


}
document.querySelector('body').addEventListener('click', onTask);

function onTask(e){
if(e.target.classList.contains('delete_task')) {
    e.target.parentNode.remove()
}
}



// калькулятор


let value=0
if (localStorage.getItem('value')) {
    value=parseInt(localStorage.getItem('value'))
    updateInput()
}
document
       .querySelector('.min')
       .addEventListener('click', () =>{
          console.log('minus fired')
          value--
          updateInput()
});


document
       .querySelector('.plus')
       .addEventListener('click', () =>{
          console.log('plus fired')
          value++
          updateInput()
});
function updateInput(){
    document.querySelector('.inp').value = value
    localStorage.setItem('value', value)
}








