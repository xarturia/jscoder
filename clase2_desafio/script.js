// Niveles de vicio
// Dependiendo de la cantidad de animes vistos, se le asignará al usuario determinado rango.
/* 
- Ha visto 10 animes o menos: Asignar rango "Newbie"
- Ha visto entre 11 o 20 animes: Asignar rango "Rookie"
- Ha visto más de 20 pero menos que 50: Asignar rango "Adventurer"
- Ha visto más de 50 animes (inclusive 50): Asignar rango especial "Hunter" + mensaje especial + recompensa.
- Ha visto 100 animes: Asignar rango "BEAST" + mensaje especial + recompensa.
- Ha visto más de 200 animes: Asignar rango "Berserker" + mensaje especial + recompensa.
- Ha visto más de 500 animes: Asignar rango "D I V I N I T Y" + mensaje especial + recompensa.

*/
/* let watched = prompt('Ingrese la cantidad de animes que ha visto.');
let exponent = 1.5;
let baseEXP = 1000;
let level = watched/baseEXP;
let exptotal = baseEXP * (level ^ exponent);
console.log('---Información del usuario---\nAnimes vistos: '+watched + '\nExp: ' + exptotal + '\nNivel: '+ parseInt(level));
if (watched >0 && watched <=10) {
alert('Tu rango es: Newbie\n'+ 'Tu nivel actual es: '+ parseInt(level) +'\nTu EXP: '+exptotal)
} */
/* Éste script no me salió como quería, aún así lo dejo. */

let watched = prompt('Ingrese la cantidad de animes que ha visto.');
let exp = (watched / 0.3) ^ 2; // fórmula exp = (level/x)^y - reemplacé level por watched. 'x' afecta la cantidad de Exp. 'y' es la rapidez con la que debe aumentar la xp requerida por nivel.
let level = (0.3 ^ 2) * Math.sqrt(exp); // fórmula level = x * √exp - añadí una ^2 a x para que no custe tanto subir de nivel
let rank = ['Newbie', 'Rookie', 'Adventurer', 'Hunter', 'Beast!', 'Berserker', 'D i v i n i t y'];
let bonus = 10; //bonus de experiencia
let accEXP = exp + bonus; // experiencia acumulada, me servirá para almacenar valores del bonus.

if (watched > 0 && watched <= 10) {
    alert('Tu rango es: ' + rank[0] + '\nTu nivel actual es: ' + parseInt(level) + '\nEXP: ' + exp);
} else if (watched > 10 && watched <= 20) {
    alert('Tu rango es: ' + rank[1] + '\nTu nivel actual es: ' + parseInt(level) + '\nEXP: ' + exp);
} else if (watched > 20 && watched < 50) {
    alert('Tu rango es: ' + rank[2] + '\nTu nivel actual es: ' + parseInt(level) + '\nEXP: ' + exp);
} else if (watched == 50) {
    exp = accEXP + bonus;
    level = (0.3 ^ 2) * Math.sqrt(exp);
    alert('Has visto ' + parseInt(watched) + ' animes!!' +
        '\nTu nuevo rango es: ' + rank[3] +
        '\nTu nivel actual es: ' + parseInt(level) +
        '\nEXP: ' + exp +
        '\nBonus: +' + bonus + 'pts');
} else if (watched > 50 && watched < 100) {
    /* bonus = bonus */
    exp = accEXP + bonus;
    level = (0.3 ^ 2) * Math.sqrt(exp);
    alert('Tu rango es: ' + rank[3] + '\nTu nivel actual es: ' + parseInt(level) + '\nEXP: ' + exp);
} else if (watched == 100) {
    bonus = bonus * 10
    exp = accEXP + bonus;
    level = (0.3 ^ 2) * Math.sqrt(exp);
    alert('Has visto ' + parseInt(watched) + ' animes!!' +
        '\nTu nuevo rango es: ' + rank[4] +
        '\nTu nivel actual es: ' + parseInt(level) +
        '\nEXP: ' + exp +
        '\nBonus: +' + bonus + 'pts');
} else if (watched > 100 && watched < 200) {
    bonus = bonus * 10
    exp = accEXP + bonus;
    level = (0.3 ^ 2) * Math.sqrt(exp);
    alert('Tu rango es: ' + rank[4] + '\nTu nivel actual es: ' + parseInt(level) + '\nEXP: ' + exp);
} else if (watched == 200) {
    bonus = bonus * 15;
    exp = accEXP + bonus;
    level = (0.3 ^ 2) * Math.sqrt(exp);
    alert('Has visto ' + parseInt(watched) + ' animes!!' +
        '\nTu nuevo rango es: ' + rank[5] +
        '\nTu nivel actual es: ' + parseInt(level) +
        '\nEXP: ' + exp +
        '\nBonus: +' + bonus + 'pts');;
} else if (watched > 200 && watched < 500) {
    bonus = bonus * 15;
    exp = accEXP + bonus;
    level = (0.3 ^ 2) * Math.sqrt(exp);
    alert('Tu rango es: ' + rank[5] + '\nTu nivel actual es: ' + parseInt(level) + '\nEXP: ' + exp);
} else if (watched == 500) {
    bonus = bonus * 20
    exp = accEXP + bonus;
    level = (0.3 ^ 2) * Math.sqrt(exp);
    alert('Has visto ' + parseInt(watched) + ' animes!!' +
        '\nTu nuevo rango es: ' + rank[6] +
        '\nTu nivel actual es: ' + parseInt(level) +
        '\nEXP: ' + exp +
        '\nBonus: +' + bonus + 'pts');
} else if (watched > 500) {
    bonus = bonus * 20
    exp = accEXP + bonus;
    level = (0.3 ^ 2) * Math.sqrt(exp);
    alert('Tu rango es: ' + rank[6] + '\nTu nivel actual es: ' + parseInt(level) + '\nEXP: ' + exp);
}


console.log('---Información del usuario---' + 
'\nAnimes vistos: ' + watched + 
'\nExp: ' + exp + 
'\nNivel: ' + parseInt(level) + 
'\nBonus dado: ' + bonus + 'pts');