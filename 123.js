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

GET_COLUMNS_RESPONSE.forEach(function(column) {
    let currentColumn = document.createElement('div');
    let columnTpl = `
    <div class="column">
      <div class="column__title">${column.name}${column.id}</div>
      <div class="column__cards" data-column-id="${column.id}"></div>
    </div>`;
    currentColumn.innerHTML = columnTpl;
    document.querySelector('.columns').appendChild(currentColumn);
});

// GET_CARDS_RESPONS.forEach(function(card) {
//     let cardTpl = `<div>${card.title}</div>`
//     let cardNew = document.createElement('div');
//     cardNew.innerHTML = cardTpl;
//     debugger
//     document.querySelector(`[data-column-id="${card.columnId}"]`).appendChild(cardNew);
// });
// GET_CARDS_RESPONSE.forEach(function(card) {
//     let user = GET_USERS_RESPONSE.find(function(user) {
//         return user.id === card.userId;
//     });
//     let cardTpl = `
//       <div class="column__title">${card.title}</div>
//       <div class="column__cards">${user.name}</div>
//     `
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
// })

GET_CARDS_RESPONSE.forEach(function(card) {
    // debugger
    let optionList = GET_USERS_RESPONSE.map(user => {
        return `<option value="${user.id}">${user.name}</option>`;
    }); // [`<option value="1">viktor</option>`, `<option value="2">vova</option>`];
    let optionHtml = optionList.join(''); // `<option value="1">viktor</option><option value="2">vova</option>;
    let cardTpl = `
        <div class="card">
          <div class="card__title">${card.title}</div>
          <div class="card__user">
            <select name="" id="" class="card__user-list">${optionHtml}</select>
          </div>
        </div>
    `;

    let cardElement = document.createElement('div');
    cardElement.innerHTML = cardTpl;
    document.querySelector(`[data-column-id="${card.columnId}"]`).append(cardElement);
});