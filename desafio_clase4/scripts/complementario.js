/*

Este script calcula el porcentaje de Impuestos a Bienes Personales que una persona debe pagar dependiendo del monto del mismo.

Hice una función con otra dentro como para que quede prolijo el código.
La primera parte de la función almacena el valor de los bienes que el usuario ingresa en la variable 'bienes', luego se define el cálculo de los porcentajes y el monto a pagar siguiendo la sig. fórmula:
// (bienes / 100) * porcentaje //

hice la constante 'mensaje' para no tener el código tan junto y que se diferencie del resto.
Y por último, la función calcBienes mira el valor ingresado por el usuario, hace una comparación y dependiendo de si el monto es mayor o menor a determinada cifra, que muestre un alert.
*/



calcExcedente();
function calcExcedente() {
    let bienes = prompt('Ingrese valor de sus bienes personales en pesos. Por ejemplo: ' +
        '\n1694767 (sin puntos y/o comas)');
    let calculo = bienes / 100;
    let porcentaje = [0.50, 0.75, 1.00, 1.25];
    const excedente = {
        igual3M: (calculo) * porcentaje[0],
        mayor3M: (calculo) * porcentaje[1],
        mayor6M: (calculo) * porcentaje[2],
        mayor18M: (calculo) * porcentaje[3]
    };
    const mensaje = {
        mensaje1: 'Usted no es alcanzado por el impuesto a bienes personales.',
        mensaje2: 'El valor de sus bienes personales es: ' + bienes + ' pesos.' +
            '\nEl impuesto aplicado es del ' + porcentaje[0] + '%' +
            '\nEl monto total a pagar calculado es: ' + excedente.igual3M + ' pesos.',
        mensaje3: 'El valor de sus bienes personales es: ' + bienes + ' pesos.' +
            '\nEl impuesto aplicado es del ' + porcentaje[1] + '%' +
            '\nEl monto total a pagar calculado es: ' + excedente.mayor3M + ' pesos.',
        mensaje4: 'El valor de sus bienes personales es: ' + bienes + ' pesos.' +
            '\nEl impuesto aplicado es del ' + porcentaje[2] + '%' +
            '\nEl monto total a pagar calculado es: ' + excedente.mayor6M + ' pesos.',
        mensaje5: 'El valor de sus bienes personales es: ' + bienes + ' pesos.' +
            '\nEl impuesto aplicado es del ' + porcentaje[3] + '%' +
            '\nEl monto total a pagar calculado es: ' + excedente.mayor18M + ' pesos.'
    };
    function calcBienes(){
        if (bienes <= 2000000) {
            parseFloat(alert(mensaje.mensaje1));
        } else if (bienes > 2000000 && bienes <= 3000000) {
            parseFloat(alert(mensaje.mensaje2));
        } else if (bienes > 3000000 && bienes <= 6500000) {
            parseFloat(alert(mensaje.mensaje3));
        } else if (bienes > 6500000 && bienes <= 18000000) {
            parseFloat(alert(mensaje.mensaje4));
        } else if (bienes >= 18000000) {
            parseFloat(alert(mensaje.mensaje5));
        }
    }
    calcBienes();
    calcExcedente();
}