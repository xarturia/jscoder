

console.log("CICLO de 0 a 9\n");
for (let indice=0;indice<10;indice++){
    // alert("Valor indice:" + indice); 
    console.log("Valor indice:" + indice);
}

alert("Ahora vamos a ver otro ciclo: \n CICLO de 1 a 10");

console.log("\nCICLO de 1 a 10\n");

for (let indice=1;indice<=10;indice++){
    alert("Valor indice:" + indice); 
    console.log("Valor indice:" + indice);
}



//Ejemplo de tablas de multiplicar
let numeroIngresado = parseInt(prompt("Ingresar un numero: "));

for ( let numero = 1; numero<=10 ; numero++){

    console.log(numeroIngresado + " * " + numero + " = " + (numeroIngresado * numero));

}


//Ejemplo de ingreso de turnos por personas
let cant = 0;
for ( let turno = 35 ; turno<=40; turno++, cant++){
    //Ingresamos el nombre completo
    let nombreCompleto = prompt("Ingrese nombre completo:");
    //Visualizamos el turno que le toco a la persona   
    alert("Hola " + nombreCompleto + ", su turno es:" + turno);
}

console.log("Cantidad de turnos: " + cant);


//Ejemplo de BREAK

for ( let i=0; i<=10;i++ ){
    //Cuando llegue a 5 que corte
    if( i == 5){
        console.log("Aca se corto!");
        break;        
    }
    alert("Numero:" + i);
    console.log("Numero:" + i);
}

console.log("Estoy fuera del for");

//Ejemplo de CONTINUE
let sumatoria=0;
for ( let i=0; i<=10; i++){
    
    if ( i == 5 ){
        console.log("Encontro el 5");
        continue;
    }

    console.log("Numero: " + i);

    sumatoria = sumatoria + i;
    console.log("Ssumatoria:" + sumatoria);



}

console.log("Ya estoy fuera del for");

console.log(sumatoria);