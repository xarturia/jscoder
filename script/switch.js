//ejemplo de SWITCH

let nombre = prompt("Ingresar el nombre(escriba ESC para salir): ");

while ( nombre != 'ESC' ){
    //si ingresa ESC, se termina el ciclo
    switch (nombre){
        case 'ANA':
                alert("Hola ANA!!");
                break;
        case 'JUAN':
                alert("Hola JUAN");
                break;
        default:
            //Si no es ANA y no es JUAN
            alert("QUIEN SOS?")
            break;
    }
    //Vuelvo a ingresar un dato para que el ciclo no sea infinito
    nombre = prompt("Ingresar el nombre(escriba ESC para salir): ");

}