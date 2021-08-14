class Producto{
    constructor (nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

    sumarIva(){
        this.precio = this.precio * 1.21;
    }

    visualizar(){
        console.log(this.nombre + " : " + this.precio);
    }
}

//Declaramos un array donde insertaremos productos
const listaProductos = [];
listaProductos.push(new Producto("Arroz",125));
listaProductos.push(new Producto("Arroz",100));
listaProductos.push(new Producto("Fideos",70));
listaProductos.push(new Producto("Pan", 50 ));
//REcorremos nuestro array y le sumamos el iva al precio de cada elemento
for( const producto of listaProductos){
    producto.visualizar();
    producto.sumarIva();
    producto.visualizar();
}

//USAMOS metodo FIND
const encontrando = listaProductos.find( parProd => parProd.nombre == "Arroz");

console.log("Cantidad de productos que tengo " + listaProductos.length);

console.log(encontrando);


//USAMOS  FILTER

const productoFiltrado = listaProductos.filter ( parProd => parProd.nombre == "Arroz" );

console.log(productoFiltrado);


//USAMOS MAP

const numeros = [ 2,5,10,22];
const multiPorDos = numeros.map( x => x * 2); // [4,10,20,44]
console.log(numeros.toString());
console.log(multiPorDos.toString());