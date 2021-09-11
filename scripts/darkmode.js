let darkMode = localStorage.getItem('darkMode');
let btnDarkMode = $('#darkmodeBtn');
let darkModeSpan = $('#darkmodeSpan');

const enableDarkMode = () => {
    $('body').toggleClass('darkmode');
    $(darkModeSpan).toggleClass('fa-moon');
    localStorage.setItem('darkMode', 'enabled');
    $('body').toggleClass('lightmode');
    $(darkModeSpan).toggleClass('fa-sun');
    /* localStorage.setItem('darkMode', 'disabled'); */
}

if (darkMode === 'enabled') {
    enableDarkMode();
};

$(document).ready(() => {
    $(btnDarkMode).click(() => {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            enableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
            localStorage.getItem(darkMode)
        }
    })
});