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

// también podría haberlo hecho con una función de éste modo:
// pero utilizando funciones anónimas me ahorro un par de líneas de código
/* sign_up_btn.addEventListener("click", signUpMode);

function signUpMode() {
    container.classList.add("sign-up-mode");
} */

const loginButton = document.querySelector(".loginButton");
const username = document.getElementById("inputUsername"); // user
const password = document.getElementById("inputPassword"); // pass
class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        // Ingreso de usuario/contraseña
        // defino la const del botón
        // Eventos a realizar al hacer click sobre el botón de logueo
        loginButton.addEventListener("click", () => {

            console.log(`Username: ${username.value}`); // obtengo los valores ingresados y los muestro en consola
            console.log(`Password: ${password.value}`);
        });
    }
}

function loginAction() {
    let usr = document.getElementById("inputUsername");;
    let pwd = document.getElementById("inputPassword");;
    new user(usr, pwd); //creación de usuario nuevo
}


const errorElement = document.getElementById('error');
const signInForm = document.querySelector('.sign-in-form');
signInForm.addEventListener("submit", (e) => {
    let messages = [];
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
    }
    messages.push(`Welcome ${username}`)
    console.log('password is: ' + password.value.length);
    console.log(messages.toString());
})