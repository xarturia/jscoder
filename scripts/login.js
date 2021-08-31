// obtiene el primer elemento con id #sign-in-btn
const sign_in_btn = document.querySelector("#sign-in-btn");
// obtiene el primer elemento con id #sign-up-btn
const sign_up_btn = document.querySelector("#sign-up-btn");
// obtiene el primer elemento con la clase .container (En este caso es el contenedor de todos los elementos del login)
const container = document.querySelector(".container");

// cuando clickee en el boton de login:
sign_up_btn.addEventListener("click", () => {
    // añado la clase al contenedor
    container.classList.add("sign-up-mode");
});

// cuando clickee en el boton de registro:
sign_in_btn.addEventListener("click", () => {
    // quito la clase al contenedor
    container.classList.remove("sign-up-mode");
});

const loginButton = document.querySelector(".loginButton");
const username = document.getElementById("inputUsername"); // user
const password = document.getElementById("inputPassword"); // pass
// useragent
let ua = navigator.userAgent;

function get_userAgent() {
    localStorage.setItem('userAgent', ua);
    let userAgent = localStorage.getItem('userAgent');
    console.log(userAgent);
}
get_userAgent();
// class usuario
class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
// Guardar temporalmente el usuario y contraseña ingresados
loginButton.addEventListener("click", () => {
    sessionStorage.setItem('username', username.value);
    sessionStorage.setItem('password', password.value);
    console.log(`Username: ${username.value}`); // obtengo los valores ingresados y los muestro en consola
    console.log(`Password: ${password.value}`);
});

function loginAction() {
    let usr = document.getElementById("inputUsername");;
    let pwd = document.getElementById("inputPassword");;
    new user(usr, pwd); //creación de usuario nuevo
}

const errorElement = document.getElementById('error'); // Obtengo el div error
const signInForm = document.querySelector('.sign-in-form'); // Obtengo el formulario de inicio de sesión
const errorDiv = document.querySelector('.errorContainer'); // div con estilos,elemento padre de los mensajes de error
signInForm.addEventListener("submit", (e) => {
    let messages = [];
    let validation = false;
    if (username.value === '' || username.value == null) {
        messages.push('Username is required');
    }
    if (username.value.length <= 4) {
        messages.push('Username must be longer than 4 characters');
    }
    if (username.value.length >= 16) {
        messages.push('Username must be shorter than 16 characters');
    }
    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
    }
    if (password.value.length >= 20) {
        messages.push('Password must be shorter than 20 characters');
    }
    if (password.value === 'password') {
        messages.push('Password cannot be password');
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join('\n ');
    } else(validation = true); // Si todo está correcto, validado = true
    errorDiv.style.display = 'flex'; // Muestro el div oculto si hay algún mensaje de error
    
    sessionStorage.setItem('isValidated', validation);
    let validated = sessionStorage.getItem(validation);

    messages.push(`Welcome ${username.value}`);
    console.log(`password is ${password.value.length} characters length\nValidation: ${validation.toString()}`);
    console.log(`Messages:\n${messages.join('\n').toString()}`);

})