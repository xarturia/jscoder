class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
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

    login() {
        if (this.username != "" && this.password != "") {
            console.log('Hola ' + this.username + '! Bienvenido nuevamente.' +
                '\nHas iniciado sesión correctamente.');
        } else if (this.username == "" && this.password == "") {
            console.log('Los datos ingresados son inválidos, ingréselos nuevamente');
        }
    }

    viewlog() {
        console.log('Usuario: ' + this.username + '\n' +
            'Contraseña: ' + this.password + '\n');
        console.log(this);
    }
}
addUser();

function fecha() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    console.log(dateTime);
}


function addUser() {
    for (i = 0; i < 3; i++) { // pide 3 veces los datos para poder almacenarlos en la lista
        var usr = prompt('Ingrese su usuario');
        var pwd = prompt('Ingrese su contraseña');
        const newUser = new user(usr, pwd);
        const admin = {
            uID: 'admin',
            PWDID: ';root;@:g_d{//}',
            inicio: true
        }
        const exampleUser = {
            uID: 'exampleUID',
            PWDID: 'examplePWD',
            inicio: true
        }
        const userList = [{
            uID: admin.uID,
            PWDID: admin.PWDID,
            inicio: admin.inicio
        }, exampleUser, {
            uID: 'otroEjemplo',
            PWDID: ' ',
            inicio: false,
        }, {
            uID: 'Ejemplo',
            PWDID: 'ezzzzz',
            inicio: false
        }];
        userList.push(newUser);
        console.log('Recently logged user list: \n', userList.sort());
        newUser.login();
        newUser.inicio();
        newUser.viewlog();
        console.log('- - - - - - - - - - - - - -');
        console.log('                                   ');
        console.log(userList.sort());
    }
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
    creationDate = new Date;
    authEnabled = false;
    accRecovery = false;
    isPremium = false;
    const newInfo = new accountInfo(creationDate, authEnabled, accRecovery, isPremium);

    if (authEnabled == false && accRecovery == false) {
        console.log('This user has disabled security options. [ Account not secured ]\n' +
            "See user account details below:");
    } else if (authEnabled == true && accRecovery == true) {
        console.log('This user has enabled security options. [ Account secured ]' +
            "See user account details below:");
    }
    console.log(JSON.stringify(newInfo));
}