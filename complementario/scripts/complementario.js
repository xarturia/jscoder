let user = document.querySelector('.profile');
let pfp = document.querySelector('.profile__image');
let pname = document.querySelector('.profile__name');
let ptile = document.querySelector('.profile__title');
let details = document.querySelector('.profile__detail');
let addButton = document.querySelector('#pushuser');
let container = document.querySelector('.container');

addButton.addEventListener('click', () => {
    const imgs = ['images/elisabeth.jpg', 'images/hideaki.jpg', 'images/mick.jpg', 'images/musashi.jpg'];
    const names = ['Elisabeth Báthory', 'Hideaki Anno', 'Mick Gordon', 'Miyamoto Musashi'];
    const title = ['Professional Killer', 'Anime Director', 'Music Composer', 'Swordsman'];
    const newUser = document.createElement('div');
    let i;
    newUser.className = 'profile';
    for (i = 0; i < imgs.length && i < names.length && title.length; i++) {
        newUser.innerHTML =
            `<img src="${imgs[i]}" alt="profile image" class="profile__image">\n` +
            `<div class="profile__name">${names[i]}</div>` +
            `<div class="profile__title">${title[i]}</div>`;
    }
    container.appendChild(newUser);
})