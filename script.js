const GET_COLUMNS_RESPONSE = [{
    id: 1,
    name: 'todo',
    order: 1
},
{
    id: 17,
    name: 'dev',
    order: 2
},
{
    id: 23,
    name: 'qa',
    order: 3
},
{
    id: 65,
    name: 'done',
    order: 4
},
];



const GET_USERS_RESPONSE = [{
    id: 1,
    name: 'Vicktor',
    email: 'wef@we.ru',
    photoUrl: 'https://24smi.org/public/media/235x307/celebrity/2017/02/16/5QBRax8G5tZY_dmitrii-medvedev.jpg'
},
{
    id: 2,
    name: 'Vova',
    email: 'wqweef@we.ru',
    photoUrl: 'https://histrf.ru/uploads/media/person/0001/59/thumb_58645_person_big.jpeg'
},
]
const GET_CARDS_RESPONSE = [{
    id: 1,
    title: 'create menu',
    description: 'need create flex menu',
    userId: 2,
    columnId: 1
},
{
    id: 2,
    title: 'change background',
    description: 'please, change background to red',
    userId: 1,
    columnId: 65
}
];



GET_COLUMNS_RESPONSE.forEach(function (column) {
    
    let newColumn = document.createElement('div');
    newColumn.classList = "newColumn"
    let textColumn = `<div id ="a${column.id}">
    ${column.name}
    </div>`;
    newColumn.innerHTML = textColumn;
    document.querySelector('.columns').append(newColumn);
});
// создал столбцы и распределил их по местам и добавил им id

GET_CARDS_RESPONSE.forEach(function (card) {
    let col = GET_COLUMNS_RESPONSE.find(function (column) {
        return column.id === card.columnId
    });

    let cardElement = document.createElement('div');
    cardElement.className = 'cardUser'
    let user = GET_USERS_RESPONSE.find(function (user) {
        return user.id === card.userId;
    });
    // сравниваем объекты  по их параметрам!


    let selec = GET_COLUMNS_RESPONSE.map(function (a) {
        return `<option value="${a.id}">${a.name}</option>`
    })
    let option = `<select data-card-id="${card.id}">
    ${selec.join('')}
</select>`
    // join помогает нам разделить массив и поместить части массива в разные option
    let textNewName = `<div id="${card.userId}">${option}
    
    <p>${card.title}</p><p>${user.name}</p><p>${card.description}</p>
   </div>`;
    cardElement.innerHTML = textNewName;

    let buttonMenu = document.createElement('div')
    let button =`<button id="todo">TODO</button>
    <button id="dev">DEV</button>
    <button id="qa">QA</button>
    <button id="done">DONE</button>`
     buttonMenu.innerHTML=button;


document.querySelector(`#a${col.id}`).appendChild(cardElement);
document.querySelector('.cardUser').append(buttonMenu)
});




document.querySelector('.cardUser').addEventListener('input', move)
function move(i) {
    this.remove()
}




//  * добавил айди ячейке которая создается на 89 строке


// sup.append(cardElement);



// const goTODO = document.querySelector("#todo")
// function goONTODO(u){

// }
// const goDev = document.querySelector("#dev")
// const goQa = document.querySelector("#qa")
// const goDone = document.querySelector("#done")




   // все что сверхе ясно!


   //    
// GET_CARDS_RESPONSE.forEach(function(card) {
//     let user = GET_USERS_RESPONSE.find(function(user) {
//         return user.id === card.userId;
//     });
//     let cardTpl = `
//     <div class="column__title">${card.title}</div>
//       <div class="column__cards">${user.name}</div>
//     `
//     let cardNew = document.createElement('div');
//     cardNew.innerHTML = cardTpl;
//     debugger
//     document.querySelector(`[data-column-id="${card.columnId}"]`).appendChild(cardNew);
// });

//    const to = document.querySelector('#a1')
//    const dev = document.querySelector('#a17')
//    const qa = document.querySelector('#a23')
//    const done = document.querySelector('#a65')
//    function move() {
//        if( to==="")

//    _____________________________________________________
// GET_CARDS_RESPONSE.forEach(function(card) {
//     // debugger
//     let optionList = GET_USERS_RESPONSE.map(user => {
//     return `<option value="${user.id}">${user.name}</option>`;
// }); // [`<option value="1">viktor</option>`, `<option value="2">vova</option>`];
// let optionHtml = optionList.join(''); // `<option value="1">viktor</option><option value="2">vova</option>;
// let cardTpl = `
//     <div class="card">
//       <div class="card__title">${card.title}</div>
//       <div class="card__user">
//         <select name="" id="" class="card__user-list">${optionHtml}</select>
//       </div>
//     </div>
// `;
// console.log(typeof (optionHtml))

// let cardElement = document.createElement('div');
// cardElement.innerHTML = cardTpl;
// document.querySelector(`[data-column-id="${card.columnId}"]`).append(cardElement);
// });



// GET_CARDS_RESPONS.forEach(function(card) {
//     let cardTpl = `<div>${card.title}</div>`
//     let cardNew = document.createElement('div');
//     cardNew.innerHTML = cardTpl;
//     debugger
//     document.querySelector(`[data-column-id="${card.columnId}"]`).appendChild(cardNew);
// });

// GET_USERS_RESPONSE.forEach(function(i) {
//     let sel = document.createElement('div');
//     let tor = `<select>
//     <option>${i.name}</option>
//     </select>`
//     sel.innerHTML = tor;
//     document.querySelector('.column__cards').appendChild(sel);
