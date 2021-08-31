let user = document.querySelector('.profile');
let pfp = document.querySelector('.profile__image');
let pname = document.querySelector('.profile__name');
let ptile = document.querySelector('.profile__title');
let details = document.querySelector('.profile__detail');
let addButton = document.querySelector('#pushuser');
let container = document.querySelector('.container');
let i = 0;
const imgs = ['https://i.imgur.com/7RGPqkZ.jpg', 'https://i.imgur.com/Z12V9xL.jpg', 'https://i.imgur.com/cbRHnFn.jpg', 'https://i.imgur.com/12QUx56.jpg']; // Imágenes almacenadas online
const imags = ['images/elisabeth.jpg', 'images/hideaki.jpg', 'images/mick.jpg', 'images/musashi.jpg']; // Imágenes almacenadas localmente
const names = ['Elisabeth Báthory', 'Hideaki Anno', 'Mick Gordon', 'Miyamoto Musashi'];
const title = ['Professional Killer', 'Co-founder of GAINAX.', 'Music Composer', 'Swordsman'];
const followers = ['11,870', '19,247', '71,727', '1,645'];
addButton.addEventListener('click', () => {
    console.log(i);
    console.log(names)
    if (i >= names.length) { // Aca deberia de parar al llegar a 4
        return;
    }
    const newUser = document.createElement('div');
    newUser.className = 'profile';
    newUser.innerHTML =
        `<img src="${imags[i]}" alt="profile image" class="profile__image">\n` +
        `<div class="profile__name">${names[i]}</div>\n` +
        `<div class="profile__title">${title[i]}</div>\n` +
        `<div class="profile__detail">\n
            <i class="material-icons">person</i>${followers[i]} followers\n
        </div>`;
    i++;
    container.appendChild(newUser);
})