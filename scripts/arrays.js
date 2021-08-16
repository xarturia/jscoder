//DEclarando un lista vacio
const listaVacio = [];
//Lista de elementos numeros
const listaNumeros = [72,5,34,47];
//Lista de elementos String
const listaStrings = ["String1", "String2", "String3"];
//Lista de elementos Boolean
const listaBooleans = [true, false,false,true];
//Lista de elementos mixta
const listaMixto = [35, "Cualquier texto", true];

//Accediendo a elementos del lista

console.log(listaNumeros[0] + listaNumeros[1] + listaNumeros[2] + listaNumeros[3]);

let suma = listaNumeros[0] + listaNumeros[1] + listaNumeros[2] + listaNumeros[3];

console.log("Suma de elementos de lista numeros: " + suma);

console.log("Longitud de lista Numeros: " + listaNumeros.length);


//Recorriendo un lista utilizando for y el indice con cantidad de elementos conocidos
for (let index = 1;index < 3; index++ ){
    console.log("Elemento " + index + ":" + listaStrings[index]);
}

//Recorriendo un lista utilizando for con la propiedad length
//USANDO LENGTH
for (let index = 0;index < listaStrings.length; index++ ){
    console.log("Elemento " + index + ":" + listaStrings[index]);
}
 
//USANDO TOSTRING
console.log(listaMixto.toString() + " - Cantidad : " + listaMixto.length); 
//USANDO PUSH
listaMixto.push("Otro elemento agregado con push");
listaMixto.push(true);
listaMixto.push("ultimo elemento");
console.log(listaMixto.toString() + " - Cantidad : " + listaMixto.length); 

//USANDO JOIN
let variableJoin = listaMixto.join("|");

console.log(variableJoin);

//USANDO CONCAT
let listaConcat = listaMixto.concat(listaStrings);
console.log(listaConcat.join("-"));

//USANDO SLICE

let listaSlice = listaConcat.slice(2, listaConcat.length - 1);

console.log(listaSlice.toString());
