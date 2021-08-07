// Multiplicar dos números
let n = parseInt(prompt('Ingrese un número'));
let m = parseInt(prompt('Ingrese el multiplicador'));

while (n > 0) {
    alert('Resultado: ' + n * m);
    n = parseInt(prompt('Ingrese un número'));
    m = parseInt(prompt('Ingrese el multiplicador'));
}

// calcular IMC 
let peso = parseInt(prompt('Ingrese su peso en kilogramos: '));
let estatura = parseInt(prompt('Ingrese su estatura en centímetros: '));
let imc = peso / (estatura / 100) ** 2;
while (peso && estatura > 0 && estatura < 300) {
    alert(
        'Estatura: ' + estatura + 'cm' + ' (' + estatura / 100 + 'm)\n' +
        'Peso: ' + peso + 'kg' + ' (' + peso * 1000 + 'g)\n' +
        'índice de Masa corporal: ' + imc);
    peso = parseInt(prompt('Ingrese su peso en kilogramos: '));
    estatura = parseInt(prompt('Ingrese su estatura en centímetros: '));
}


// Quiz
alert('¿Cuál es la capital de EEUU?');
let answer = prompt('Introduzca su respuesta');
let correctAns = 'Washington D.C.';
const invalidAns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
while (answer != invalidAns[i]) {
    switch (answer) {
        case 'Washington':
            alert('Tu respuesta es correcta!');
            break;
        case 'Washington D.C.':
            alert('Tu respuesta es correcta!');
            break;
        case 'Washington DC':
            alert('Tu respuesta es correcta!');
            break;
        case 'Washington D.C':
            alert('Tu respuesta es correcta!');
            break;
        default:
            alert('Hoy toca estudiar Geografía eh...\n' +
                'La respuesta correcta es: ' + correctAns);
            break;
    }
    alert('¿Cuál es la capital de EEUU?');
    answer = prompt('Introduzca su respuesta');
}