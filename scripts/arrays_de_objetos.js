//Creamos un objeto producto
const producto1 = { id: 1, nombre: "Arroz"};
//Creamos un array de productos
const listaProductos = [producto1, { id: 2, nombre: "Fideo"}];

listaProductos.push({id:3,nombre: "Pan"});


//No muestra datos, vemos Object
console.log(listaProductos.join("|"));

for (const producto of listaProductos){
    console.log("Id:" + producto.id + " - Producto : " + producto["nombre"]);

} 




//USANDO TYPEOF

let mifuncion = (a,b) => a + b;
let forma = " redonda ";
let tamanio = 1;

let tipo = typeof mifuncion;
console.log( tipo + " " + mifuncion); //function
console.log( typeof forma + " " + forma); //string
console.log( typeof tamanio + " " + tamanio); //number

console.log(forma);

if ( typeof forma == "string" ){
    forma = forma.trim(); 
    //recortamos los espacios de inicio y fin del contenido de mi variable string
}

console.log(forma);





