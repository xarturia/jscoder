console.log('Usuarios ordenados alfabéticamente:');
const loggedUsers = ['Usuario1',
    'Armando Lio',
    'Goku',
    'OtraVezSopaPipa',
    'ElPeladoDeDisturbed',
    "Jeanne d'arc",
    'Elisabeth_Bathory',
    'JUANXD._.',
    '127.0.0.1',
    'Shinmen Musashi-no-Kami Fujiwara no Harunobu',
    'Florence Nightingale',
    '2mas2son5',
    'LuisilloElPillo',
    'Kiss-Shot Acerola-Orion Heart-Under-Blade',
    'Yagyū Munenori Tajima no Kami',
    '柳生 宗 矩'
]
console.log(loggedUsers.sort()); //Utilizo sort para ordenar los nombres alfabéticamente de A-Z, como no funciona de la misma manera en números, estos estarán posicionados antes que las letras.

console.log('Números ordenados de mayor a menor');
let numeroRaro = (98989898989899 * 98) / 86 * Math.sqrt(8.6);
const numeritos = [1, 109231, 2223, 54, 5 + 10, (7 * 99) / 3.33, 0, 0.9, 1.33 * 0.1, 23, 'a' - 5, numeroRaro]; // a - 5 es NaN.
// ordena de mayor a menor los números dados
console.log((numeritos.sort(function (a, b) {
    return b - a
})));

console.log('Números ordenados de menor a mayor');
// ordena de menor a mayor los números dados
console.log((numeritos.sort(function (a, b) {
    return a - b
})));

let genteRandom = [{
    nombreComp: 'Santiago Moreno Charpentier',
    edad: 39
}, {
    nombreComp: "Jeanne d'Arc",
    edad: 19
}, {
    nombreComp: 'Mirtha Legrand',
    edad: 146002435
}, {
    nombreComp: 'David Draiman (el pelado de Disturbed)',
    edad: 48
}]
// Sin ordenar
console.table(genteRandom);

// Ordenando por menor a mayor edad
console.table(genteRandom.sort((a, b) => a.edad - b.edad));

// Ordenado de mayor a menor edad 
console.table(genteRandom.sort((a, b) => b.edad - a.edad));

// Ordenado alfabéticamente A-Z
aZGenteRandom = genteRandom.sort((a, b) => {
    if (a.nombreComp > b.nombreComp) {
        return 1;
    }
    if (a.nombreComp < b.nombreComp) {
        return -1;
    }
    return 0;
});
console.table(aZGenteRandom);

// Ordenado Alfabéticamente Z-A
zAGenteRandom = genteRandom.sort((a, b) => {
    if (a.nombreComp > b.nombreComp) {
        return -1;
    }
    if (a.nombreComp < b.nombreComp) {
        return 1;
    }
    return 0;
});
console.table(zAGenteRandom);