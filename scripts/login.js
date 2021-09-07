// obtiene el primer elemento con id #sign-in-btn
const sign_in_btn = $('#sign-in-btn');
// obtiene el primer elemento con id #sign-up-btn
const sign_up_btn = $('#sign-up-btn');
// obtiene el primer elemento con la clase .container (En este caso es el contenedor de todos los elementos del login)
const container = $('.container');

// login usr & pass, login button
const loginButton = $(".loginButton"); // login button
let username = $("#inputUsername"); // user
let password = $("#inputPassword"); // pass

// register usr & pass, register button
const registerButton = $('.registerButton'); // register button
let regUsr = $('#registerUsr'); // user
let regPass = $('#registerPwd'); // pass
let regEmail = $('#registerMail'); // mail

$(document).ready(function () {
    // useragent
    let ua = navigator.userAgent;
    (function () {
        localStorage.setItem('userAgent', ua);
        let userAgent = localStorage.getItem('userAgent');
        console.log(userAgent);
    })();
});

// class usuario
class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
};

// Guardar temporalmente el usuario y contraseña ingresados
$('.loginButton').click(() => {
    sessionStorage.setItem('username', username.val());
    sessionStorage.setItem('password', password.val());
    console.log(`Username: ${username.val()}`); // obtengo los valores ingresados y los muestro en consola
    console.log(`Password: ${password.val()}`);
});

$('.registerButton').click(() => {
    sessionStorage.setItem('username', regUsr.val());
    sessionStorage.setItem('password', regPass.val());
    console.log(`| Register |--> Username: ${regUsr.val()}`);
    console.log(`| Register |--> Password: ${regPass.val()}`);
    console.log(`| Register |--> Mail: ${regEmail.val()}`);
});

function loginAction() {
    let usr = username;
    let pwd = password;
    new user(usr, pwd); //creación de usuario nuevo
};

const errorElement = $('#error'); // Obtengo el div error
const signInForm = $('.sign-in-form'); // form de login
const signUpForm = $('.sign-up-form'); // form de registro
const errorDiv = $('.errorContainer'); // div con estilos,elemento padre de los mensajes de error

// cuando clickee en el boton de login:
sign_up_btn.click(() => {
    // añado la clase al contenedor
    $(container).addClass('sign-up-mode');
    $(errorDiv).hide();
    clearField(true, false);
});

// cuando clickee en el boton de registro:
sign_in_btn.click(() => {
    // quito la clase al contenedor
    $(container).removeClass('sign-up-mode');
    $(errorDiv).hide();
    clearField(false, true);
});

// limpiar inputs
function clearField(campoLogin, campoRegister) {
    if (campoLogin = true) {
        $(username).val(null);
        $(password).val(null);
    }
    if (campoRegister = true) {
        $(regUsr).val(null);
        $(regPass).val(null);
        $(regEmail).val(null);
    }
}
// Formulario de inicio de sesión
$(signInForm).submit((e) => {
    let messages = [];
    let validation = false;
    if (username.val() === '' || username.val() == null) {
        messages.push('Username is required');
    }
    if (username.val().length <= 4) {
        messages.push('Username must be longer than 4 characters');
    }
    if (username.val().length >= 16) {
        messages.push('Username must be shorter than 16 characters');
    }
    if (password.val().length <= 6) {
        messages.push('Password must be longer than 6 characters');
    }
    if (password.val().length >= 20) {
        messages.push('Password must be shorter than 20 characters');
    }
    if (password.val() === 'password') {
        messages.push('Password cannot be password');
    }
    if (messages.length > 0) {
        e.preventDefault()
        $(errorElement).text(messages.join('\n'));
        errorDiv.css('display', 'flex'); // Muestra el div oculto si hay algún mensaje de error
    } else(validation = true); // Si todo está correcto, validado = true

    sessionStorage.setItem('isValidated', validation);
    let validated = sessionStorage.getItem(validation);

    messages.push(`Username field: '${username.val()}'`);
    console.log(`password is ${password.val().length} character(s) length\nValidation: ${validation.toString()}`);
    console.log(`Messages:\n${messages.join('\n').toString()}`);
    clearField(true, false);
});

// formulario de registro
$(signUpForm).submit((e) => {
    let messages = [];
    let registered = false;
    if (regUsr.val() === '' || regUsr.val() == null) {
        messages.push('Username is required');
    }
    if (regUsr.val().length <= 4) {
        messages.push('Username must be longer than 4 characters');
    }
    if (regUsr.val().length >= 16) {
        messages.push('Username must be shorter than 16 characters');
    }
    if (regPass.val().length <= 6) {
        messages.push('Password must be longer than 6 characters');
    }
    if (regPass.val().length >= 20) {
        messages.push('Password must be shorter than 20 characters');
    }
    if (regPass.val() === 'password') {
        messages.push('Password cannot be password');
    }
    if (messages.length > 0) {
        e.preventDefault()
        $(errorElement).text(messages.join('\n'));
        errorDiv.css('display', 'flex'); // Muestra el div oculto si hay algún mensaje de error
    } else(registered = true); // Si todo está correcto, validado = true

    sessionStorage.setItem('isValidated', registered);
    let registration = sessionStorage.getItem(registered);

    messages.push(`User "${regUsr.val()}"`);
    console.log(`password is ${regPass.val().length} character(s) length\nRegistration: ${registered.toString()}`);
    console.log(`Messages:\n${messages.join('\n').toString()}`);

});