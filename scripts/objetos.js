let nombre = "Homero";
let edad = 39;
let domicilio = "Av. Siempre Verde 153, Springfield";

//El objeto agrupamos todas las variables que en conjunto definen una entidad

const persona1 = { 
                    nombre: "Homero", 
                    edad: 39, 
                    domicilio: "Av. Siempre Verde 153, Springfield" 
                };

//Vemos las propiedas usando .
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.domicilio);

//Vemos las propiedades usando ["propiedad"]
console.log(persona1["nombre"]);
console.log(persona1["edad"]);
console.log(persona1["domicilio"]);

//Asignacion de datos a propiedades

persona1.nombre = "Marche";
persona1.edad = 36;

console.log(persona1["nombre"]);
console.log(persona1["edad"]);
console.log(persona1["domicilio"]);


//Crear un objeto auto con las propiedades marca, modelo, color y visualizar en consola

const auto1 = {
    marca: "FIAT",
    modelo: "MAREA",
    color: "BLANCO"
};

//Cambiamos el contenido de una propiedad
auto1.modelo = "MAREA 2.0 20v";

//Agregamos una nueva propiedad
auto1.anio = 2010;

//Visualizamos en consola

console.log("Mi primer auto fue un " + auto1.marca + " " + auto1["modelo"] + " color " + auto1.color + " año " + auto1.anio);

//CONSTRUCTORES

function Persona(nombre, edad, domicilio){
    this.nombre = nombre;
    this.edad = edad;
    this.domicilio = domicilio;
}

const persona2 = new Persona("Bart", 11, "Av. Siempre Verde 153, Springfield");
const persona3 = new Persona("Lisa", 8, "Av. Siempre Verde 153, Springfield");

console.log(persona2);
console.log(persona3.nombre + " " + persona3.edad + " " + persona3.domicilio);

//CONSTRUCTOR que recibe un objeto como parametro
function Persona(parametro){
    this.nombre = parametro.nombre;
    this.edad = parametro.edad;
    this.domicilio = parametro.domicilio;
}

const persona4 = new Persona(
    {nombre: "Magui", edad:1, domicilio: "el mismo que Homero"});

console.log(persona4);


function Torta(ingrediente1, ingrediente2, preparacion){
    this.ingrediente1 = ingrediente1;
    this.ingrediente2 = ingrediente2;
    this.preparacion = preparacion;
}

const tortaVainilla = new Torta("Harina de trigo", "Vainilla", "Mezclar y hornear");
const cheeseCake = new Torta("masa galleta", "cheese con azucar", "Poner cheese en galleta y enfriar");


//Metodos en objetos JS

let cadena = "Hola Mundo!!";

console.log(cadena.length); //propiedad que contiene la longitud de la cadena
console.log(cadena.toLowerCase()); //metodo que nos permite pasar a minusculas todo el contenido
console.log(cadena.toUpperCase()); //metodo que nos permite pasar a mayusculas todo el contenido




//Metodo personalizado

function Persona(nombre, edad, domicilio){
    this.nombre = nombre;
    this.edad = edad;
    this.domicilio = domicilio;
    //Metodo hablar
    this.hablar = function(){ console.log("Hola soy " + this.nombre); };
}

const persona5 = new Persona("Salvador", 39, "Ciudadela");
const persona6 = new Persona("Homero", 39, "Siempre viva 200");

persona5.hablar(); //Va a ejecutar el metodo hablar() usando el nombre "Salvador"
persona6.hablar(); //Va a ejecutar el metodo hablar() usando el nombre "Homero"


// Operador IN devuelve true o false si existe la propiedad en el objeto


console.log("nombre" in persona5); //devuelve true

console.log("apellido" in persona6); //devuelve false

//Operador FOR..IN

for (const propiedad in persona5){
    console.log(propiedad + ":" + persona5[propiedad]); //Nos muestra el contenido de cada propiedad
}


//CLASES

class Persona{
    constructor(nombre, edad, domicilio){
        this.nombre = nombre;
        this.edad = edad;
        this.domicilio = domicilio;
    }

    //metodo hablar()

    hablar(){
        console.log("Hola soy " + this.nombre);
    }


}

const persona7 = new Persona("Homero", 39, "Siempre viva 200");

console.log(persona7);

//invocamos el metodo hablar() y devuelve "Hola soy Homero"
persona7.hablar();


/*
Ejemplo
*/

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    sumaIVA(){
        //Sumamos el 21% al precio
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;
    }
    visualizar(){
        console.log(this);
    }
}

const producto1 = new Producto("arroz", 125);
const producto2 = new Producto("fideos", 50);
producto1.visualizar();
producto1.sumaIVA();
producto1.visualizar();
producto2.sumaIVA();
producto1.vender();
producto1.visualizar();
producto2.visualizar();