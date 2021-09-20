let darkMode = localStorage.getItem('darkMode');
let btnDarkMode = $('#darkmodeBtn');
let darkModeSpan = $('#darkmodeSpan');
let cardTitle = $('.card-title');
let cardText = $('.card-text');
let usage = $('.usage__text');
let clientName = $('.client_name');
let aboutTitle = $('.about_title');
let usageTitle = $('.usageTitle');
let price = $('.price');
let pricingList = $('.pricingList');
let home = $('.home');
let clab = $('.contactLab') // lab de contacto
let contact = $('.contact');
let footer = $('.footer');
let p = $('p');

const enableDarkMode = () => {
    /* habilitar */
    $('body').toggleClass('darkmode');
    $(cardTitle).toggleClass('darkmode_title');
    $(cardText).toggleClass('darkmode_text');
    $(p).toggleClass('darkmode_paragraph');
    $(usage).toggleClass('usage-text-dark');
    $(clientName).toggleClass('client_name_dark');
    $(aboutTitle).toggleClass('darkmode_title');
    $(darkModeSpan).toggleClass('fa-moon');
    $(usageTitle).toggleClass('darkTitle');
    $(price).toggleClass('darkTitle');
    $(pricingList).toggleClass('darkTitle');
    $(home).toggleClass('homeDark');
    $(clab).toggleClass('contactLabDark');
    $(contact).toggleClass('contactDark');
    $(footer).toggleClass('footerDark');
    localStorage.setItem('darkMode', 'enabled');
    /* Deshabilitar */
    $('body').toggleClass('lightmode');
    $(cardTitle).toggleClass('lightmode');
    $(cardText).toggleClass('lightmode');
    $(usage).toggleClass('usage__text');
    $(clientName).toggleClass('client_name');
    $(aboutTitle).toggleClass('about_title');
    $(darkModeSpan).toggleClass('fa-sun');
    
    /* localStorage.setItem('darkMode', 'disabled'); */
}

if (darkMode === 'enabled') {
    enableDarkMode();
};
// Almacena el estado del darkmode en el localStorage
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