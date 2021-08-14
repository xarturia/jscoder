class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.inicio = function () {
            if (this.username != "" && this.password != "") {
                this.inicio = true;
                console.log('Sesión iniciada: ' + this.inicio);
                console.log('Fecha de acceso: '); fecha()
            } else if (this.username == "" && this.password == "") {
                this.inicio = false;
                console.log('Sesión iniciada: ' + this.inicio);
            }
        };
    }
    login() {
        if (this.username != "" && this.password != "") {
            console.log('Hola ' + this.username + '! Bienvenido nuevamente.' +
                '\nHas iniciado sesión correctamente.');
        } else if (this.username == "" && this.password == "") {
            console.log('Los datos ingresados son inválidos, ingréselos nuevamente');
        }
    }
    viewlog() {
        console.log(this);
        console.log('Usuario: ' + this.username + '\n' +
            'Contraseña: ' + this.password + '\n');
    }
}
addUser();
//Fecha
function fecha() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    console.log(dateTime);
}
//añadir usuario
function addUser() {
    const usr = prompt('user');
    const pwd = prompt('password');
    const newUser = new user(usr, pwd);
    newUser.login();
    newUser.inicio();
    newUser.viewlog();
    console.log('- - - - - - - - - - - -');
}
/*
const user2 = new user('', '');
const user$ = new user(prompt('Ingrese usuario'), prompt('ingrese contraseña')); 
*/