"use strict"

let data = [
    {
        name: "Marko",
        age: "30",
    },
    {
        name: "Luka",
        age: "32",
    },
    {
        name: "Ivan",
        age: "24",
    },
    {
        name: "Stjepan",
        age: "33",
    },
    {
        name: "Domagoj",
        age: "22",
    },
    {
        name: "Kristijan",
        age: "25",
    },
];


function createCard(person) {
    const card = document.createElement('div');
    card.classList.add('person-card');
    card.innerHTML = `
        <h2>Name: ${person.name}</h2>
        <p>Age: ${person.age}</p>
    `;
    return card;
}


function addClickListener(element, callback) {
    element.addEventListener('click', callback);
}


function handleClick() {
    const peopleContainer = document.getElementById('peopleContainer');
    
    peopleContainer.innerHTML = '';

    
    data.map(person => {
        const card = createCard(person);
        peopleContainer.appendChild(card);
    });
}

const button = document.createElement('button');
button.textContent = 'Show People Cards';
addClickListener(button, handleClick);
document.body.appendChild(button);
