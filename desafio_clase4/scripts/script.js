// Calcular consumo de combustible (Gasoil) en función a la distancia recorrida y el tipo de vehículo
// Se asume las capacidades del tanque de los vehiculos según un modelo estándar: 
// 1. Camión: Mercedes Benz L 1620
// 2. Auto: Volkswage Bora 2.0 2001
// 3. Moto: Rouser NS160 FI
// Para calcular el consumo de combustible se utiliza la siguiente formula: 
// capacidad del tanque / distancia recorrida = consumo de combustible 
// Para calcular el rendimiento del combustible se utiliza la siguiente formula: 
// distancia recorrida / capacidad del tanque  = rendimiento del combustible
// Se asume que la velocidad del vehículo es constante durante la distancia recorrida.
// Al faltar la variable velocidad habrá casos en los que el consumo o rendimiento calculado dé 0


let consumo = (_consTotal) => {
    const capacidad = {
        camion: 300, // Mercedes Benz L 1620
        auto: 55, // Volkswage Bora 2.0 2001
        moto: 12 // Rouser NS160 FI
    };
    let vehiculo = prompt('Ingrese un vehículo de la lista:\n' +
        '\n• Camión' +
        '\n• Auto' +
        '\n• Moto');
    let distancia = parseInt(prompt('Ingrese la distancia recorrida por el vehículo (en km)'));
    console.log('Vehículo ingresado: ' + vehiculo +
        '\n Distancia ingresada: ' + distancia + 'km');
    while (isNaN(vehiculo)) {
        switch (vehiculo) {
            case 'Camión':
            case 'Camion':
            case 'camion':
            case 'camión':
                alert('El consumo de su vehículo es ' +
                    parseInt(capacidad.camion / distancia) + ' l/km' + ' (' + (capacidad.camion / distancia) + ' l/km' +
                    '\nEl rendimiento del combustible es: ' + parseInt(distancia / capacidad.camion) + ' km/l' + ' (' + (distancia / capacidad.camion) + ' km/l)');
                break;
            case 'Auto':
            case 'auto':
                alert('El consumo de su vehículo es ' +
                    parseInt(capacidad.auto / distancia) + ' l/km' + ' (' + (capacidad.auto / distancia) + ' l/km)' +
                    '\nEl rendimiento del combustible es: ' + parseInt(distancia / capacidad.auto) + 'km/l' + ' (' + (distancia / capacidad.auto) + ' km/l)');
                break;
            case 'Moto':
            case 'moto':
                alert('El consumo de su vehículo es ' +
                    parseInt(capacidad.moto / distancia) + ' l/km' + ' (' + (capacidad.moto) + ' l/km)' +
                    '\nEl rendimiento del combustible es: ' + parseInt(distancia / capacidad.moto) + ' km/l' + ' (' + (distancia / capacidad.moto) + ' km/l)');
                break;
            default:
                alert('Revisa que los datos ingresados sean correctos');
        }
        console.log('Vehículo ingresado: ' + vehiculo +
            '\nDistancia ingresada: ' + distancia + 'km');
        vehiculo = prompt('Ingrese un vehículo de la lista:\n' +
            '\n• Camión' +
            '\n• Auto' +
            '\n• Moto');
        distancia = parseInt(prompt('Ingrese la distancia recorrida por el vehículo (en km)'));
    }
}
consumo();