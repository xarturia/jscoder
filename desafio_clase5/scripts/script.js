class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        // Función para verificar que los datos ingresados no estén vacíos.
        // Cambia el estado de inicio a true si los datos son correctos.
        this.inicio = function () {
            if (this.username != "" && this.password != "") {
                this.inicio = true;
                console.log('Sesión iniciada: ' + this.inicio);
                console.log('Fecha de acceso: '); + fecha()
            } else if (this.username == "" && this.password == "") {
                this.inicio = false;
                console.log('Sesión iniciada: ' + this.inicio);
            }
        };
    }
    // El método login también verifica que no se hayan ingresado datos vacíos y dá un mensaje al usuario.
    login() {
        if (this.username != "" && this.password != "") {
            console.log('Hola ' + this.username + '! Bienvenido nuevamente.' +
                '\nHas iniciado sesión correctamente.');
        } else if (this.username == "" && this.password == "") {
            console.log('Los datos ingresados son inválidos, ingréselos nuevamente');
        }
    }
    // Muestra un registro de la clase user y los datos del inicio de sesión.
    viewlog() {
        console.log('Usuario: ' + this.username + '\n' +
            'Contraseña: ' + this.password + '\n');
        console.log(this);
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
//Añadir usuario
function addUser() {
    const usr = prompt('user');
    const pwd = prompt('password');
    const newUser = new user(usr, pwd);
    newUser.login();
    newUser.inicio();
    newUser.viewlog();
    console.log('- - - - - - - - - - - - - -');
}
/*
const user2 = new user('', '');
const user$ = new user(prompt('Ingrese usuario'), prompt('ingrese contraseña')); 
*/