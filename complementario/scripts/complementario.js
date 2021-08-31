let user = document.querySelector('.profile');
let pfp = document.querySelector('.profile__image');
let pname = document.querySelector('.profile__name');
let ptile = document.querySelector('.profile__title');
let details = document.querySelector('.profile__detail');
let addButton = document.querySelector('#pushuser');
let container = document.querySelector('.container');

addButton.addEventListener('click', () => {
    const newUser = document.createElement('div');
    newUser.className = 'profile';
    newUser.innerHTML = 
    '<img src="images/arthur.png" alt="profile image" class="profile__image">\n'
    ;
    container.appendChild(newUser);
})