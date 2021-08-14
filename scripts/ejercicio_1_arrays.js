const listaNombres = [];
let cantidad = 5;

do{
    let entrada = prompt("Ingresar un nombre:");
    listaNombres.push(entrada);
    console.log(listaNombres.length);
    console.log(listaNombres.toString());
}while( listaNombres.length != cantidad )

//Creamos una nueva lista concatenando los nombres ingresados con dos mas
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
alert(nuevaLista.join("\n"));