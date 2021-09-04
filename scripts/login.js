// obtiene el primer elemento con id #sign-in-btn
const sign_in_btn = $('#sign-in-btn');
// obtiene el primer elemento con id #sign-up-btn
const sign_up_btn = $('#sign-up-btn');
// obtiene el primer elemento con la clase .container (En este caso es el contenedor de todos los elementos del login)
const container = $('.container');
const loginButton = $(".loginButton");
const username = $("#inputUsername"); // user
const password = $("#inputPassword"); // pass

$(document).ready(function () {
    // useragent
    let ua = navigator.userAgent;

    function get_userAgent() {
        localStorage.setItem('userAgent', ua);
        let userAgent = localStorage.getItem('userAgent');
        console.log(userAgent);
    }
    get_userAgent();
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

function loginAction() {
    let usr = username;
    let pwd = password;
    new user(usr, pwd); //creación de usuario nuevo
};

const errorElement = $('#error'); // Obtengo el div error
const signInForm = $('.sign-in-form'); // Obtengo el formulario de inicio de sesión
const errorDiv = $('.errorContainer'); // div con estilos,elemento padre de los mensajes de error

// cuando clickee en el boton de login:
sign_up_btn.click(() => {
    // añado la clase al contenedor
    $(container).addClass('sign-up-mode');
    errorDiv.css('display', 'none');
});

// cuando clickee en el boton de registro:
sign_in_btn.click(() => {
    // quito la clase al contenedor
    $(container).removeClass('sign-up-mode');
    errorDiv.css('display', 'none');
});

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
    } else(validation = true); // Si todo está correcto, validado = true
    errorDiv.css('display', 'flex'); // Muestro el div oculto si hay algún mensaje de error

    sessionStorage.setItem('isValidated', validation);
    let validated = sessionStorage.getItem(validation);

    messages.push(`Welcome ${username.val()}`);
    console.log(`password is ${password.val().length} character(s) length\nValidation: ${validation.toString()}`);
    console.log(`Messages:\n${messages.join('\n').toString()}`);

});