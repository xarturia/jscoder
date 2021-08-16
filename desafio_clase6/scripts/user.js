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
                console.log('Fecha de acceso: '); + fecha();
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


function addUser() {
    let usr = prompt('Ingrese su usuario');
    let pwd = prompt('Ingrese su contraseña');
    const newUser = new user(usr, pwd); //creación de usuario nuevo
    const admin = { // admin
        uID: 'admin', // user ID
        PWDID: ';root;@:g_d{//}', // password ID
        inicio: true // inició sesión
    }
    const exampleUser = { // usuario de ejemplo
        uID: 'exampleUID',
        PWDID: 'examplePWD',
        inicio: true
    }

    const userList = [{ //Lista para almacenar usuarios
        uID: admin.uID,
        PWDID: admin.PWDID,
        inicio: admin.inicio
    }, exampleUser, { // ejemplo de inicio de sesión fallido
        uID: 'otroEjemplo',
        PWDID: ' ',
        inicio: false
    }];
    userList.push(newUser); //Pushea el nuevo usuario a la lista
    console.log('Recently logged user list: \n', userList); // muestra la lista de los usuarios recientemente logueados
    newUser.login();
    newUser.inicio();
    newUser.viewlog();
    console.log('- - - - - - - - - - - - - -');
}

class accountInfo {
    constructor(creationDate, authEnabled, accRecovery, isPremium) {
        this.creationDate = creationDate;
        this.authEnabled = authEnabled;
        this.accRecovery = accRecovery;
        this.isPremium = isPremium;
        /* console.log(this); */
    }
}

showInfo();

function showInfo(creationDate, authEnabled, accRecovery, isPremium) {
    creationDate = new Date; // Fecha de creación (la misma que la del inicio)
    authEnabled = false; // Autenticación en dos pasos
    accRecovery = false; // Tiene activo métodos para recuperar su cuenta
    isPremium = false; // Es usuario premium
    const newInfo = new accountInfo(creationDate, authEnabled, accRecovery, isPremium);

    if (authEnabled == false && accRecovery == false) { // Comprueba si tiene opciones de seguridad activas
        console.log('This user has disabled security options. [ Account not secured ]\n' +
            "See user account details below:");
    } else if (authEnabled == true && accRecovery == true) {
        console.log('This user has enabled security options. [ Account secured ]' +
            "See user account details below:");
    }
    console.log(JSON.stringify(newInfo)); // convierte la info recibida a JSON
}