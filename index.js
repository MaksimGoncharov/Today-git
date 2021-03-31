

var now = new Date();
time = `${now.getHours()}:${now.getMinutes()}`
// переменная по времени


var columns = document.querySelector(".main-columns");
var todo;
function local() {
    todos = columns.innerHTML;
    localStorage.setItem('todos', todos);
}
// работа с локальным хранилещем

var buttonNewTask = document.querySelector('#newTask');
buttonNewTask.addEventListener("click", createNewTask);

var createIdea = document.querySelector('#create')
createIdea.addEventListener("click", () => {
    document.querySelector(".main-create-task").classList.toggle('hide');
});
var closeModalwindow = document.querySelector('#Close').addEventListener("click", () => {
    document.querySelector(".main-create-task").classList.toggle('hide');
})
// работа с модальным окном, вызываем и отзываем его

function createNewTask() {

    debugger
    var newContain = document.createElement('div')
    var textForTask = document.querySelector('#textNewTask').value;
    newContain.innerHTML = `<div draggable="true"> <h2> ${textForTask}</h2>
    <p>Создано: ${time}</p><hr></div>`
    var deleteTask = document.createElement("span")
    deleteTask.innerHTML = `✖ `;
    deleteTask.classList = 'delete-button'
    newContain.className = 'newIdea';

    newContain.appendChild(deleteTask);
    if (textForTask === "") {
        alert("Введите задачу!")
    }
    else {
        document.querySelector('.main-columns-ideas').append(newContain);
        document.querySelector('#textNewTask').value = "";
        document.querySelector(".main-create-task").classList.toggle('hide')
    }
    local()

};
columns.addEventListener('click', (i) => {
    if (i.target.tagName === "SPAN") {
        var div = i.target.parentNode;
        div.remove();
    }
    else if (i.target.tagName === "P" || i.target.tagName === "H2") {
        i.target.classList.toggle('throw');
    }
    local()

});
// добавление и взаимодействие с новыми задачами


if (localStorage.getItem('todos')) {
    columns.innerHTML = localStorage.getItem('todos')
}
// локальным хранилищем




// drag&drop c img
let element = document.querySelector('.newIdea');
let parent = document.querySelector('#on');

parent.addEventListener('dragover', function (o) {
    o.preventDefault();
});

parent.addEventListener('drop', function (ev) {
    this.append(element);
});






document.querySelector('.img-me').addEventListener("dragover", function (event) {
event.preventDefault();
});

ball.addEventListener('dragend',function(elem) {
    ball.style.top = elem.pageY + "px";
    ball.style.left = elem.pageX +"px";
})








