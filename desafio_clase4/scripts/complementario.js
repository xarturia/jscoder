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

    if (bienes <= 2000000) {
        alert(mensaje.mensaje1);
    } else if (bienes > 2000000 && bienes <= 3000000) {
        alert(mensaje.mensaje2);
    } else if (bienes > 3000000 && bienes <= 6500000) {
        alert(mensaje.mensaje3);
    } else if (bienes > 6500000 && bienes <= 18000000) {
        alert(mensaje.mensaje4)
    } else if (bienes >= 18000000) {
        alert(mensaje.mensaje5)
    }
}