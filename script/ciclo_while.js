//Ejemplo de Ingreso de datos

let datoIngresado = prompt("Ingresar cualquier texto ('ESC' para terminar):");

while ( datoIngresado != 'ESC' ){   
    console.log("El texto ingresado es :" + datoIngresado);
    //Volvemos a ingresar el dato
    datoIngresado = prompt("Ingresar cualquier texto ('ESC' para terminar):");
}
 
//DO WHILE

let repetir=false;

do {
    console.log("Esto se ejecuta una sola vez!");
}while(repetir)

console.log("Ya estoy afuera del DO...WHILE");




//Ejemplo 2 de DO..WHILE

let numero = 0;

do {
    //pedimos el ingreso de numero
    numero = parseInt(prompt("Ingreso un numero: "));
    
    if ( numero ){
        console.log("El numero ingresado es " + numero);
    }

    //el while se ejecuta siempre que el dato ingresado sea un numero
    //Si el parseInt no puede convertir a numero, devuelve false
}while(numero)

