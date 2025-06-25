"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('select');
    const image = document.getElementById('image');
    const photographer = document.getElementById('photographer');
    const description = document.getElementById('description');
    const score = document.getElementById('score');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');

//Llenar el selec con los nombre de los ítems:

    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    //mostrar datos de item seleccionado:

    function showItem(key) {
        const item = itemData[key];
        if (!item) return;
        image.src = item.image;
        photographer.textContent = item.photographer;
        description.textContent = item.description;
        score.textContent = item.score; 
    }

    //mostrar el primer item por defecto
    select.value = Object.keys(itemData)[0];
    showItem(select.value);

    //Cambiar datos al seleccionar otro ítem:

    select.addEventListener('change', () => {
        showItem(select.value);
    });

    //aumentar puntaje:
    increaseBtn.addEventListener('click', () => {
        const key = select.value;
        item.score++;
        score.textContent = item.score;
    });

    //disminuir puntaje:
    decreaseBtn.addEventListener('click', () => {
        const item = itemData[select.value];
        item.score--;
        score.textContent = item.score;
    });
});
