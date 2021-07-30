// Calcular años de una persona en días y horas
let userAge = prompt('Ingrese su edad en años:');
console.log('La edad ingresada es: ' + userAge + ' años.');
let daysAge = userAge * 365;
let hoursAge = userAge * 8760;
console.log('Estás vivo desde hace: \n' + daysAge + ' días o ' + hoursAge + ' horas.');
alert('Estás vivo desde hace: \n' + daysAge + ' días o ' + hoursAge + ' horas.');

//También se puede hacer de esta forma
let userAge = prompt('Ingrese su edad en años:');
console.log('La edad ingresada es: ' + userAge + ' años.');
const year = 365;
const hours = 8760;
let daysAge = userAge * year;
let hoursAge = userAge * hours;
console.log('Estás vivo desde hace: \n' + daysAge + ' días o ' + hoursAge + ' horas.');
alert('Estás vivo desde hace: \n' + daysAge + ' días o ' + hoursAge + ' horas.');