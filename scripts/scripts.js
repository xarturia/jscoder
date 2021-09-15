$(function () {
    let btn = $('#search');
    let input = $('#pokeID');
    let imageContainer = $('#pokemonimg');
    let p_name = $('.pokename');
    let baseExpTxt = $('.base_exp');
    let abilityTxt = $('.ability');
    let movesTxt = $('.moves');

    /* Capitalizar la primera letra */
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Función para enviar datos al presionar enter
    $(input).keyup((e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            $(btn).trigger('click');
        }
    });

    /* Llamada a la API de Pokemon*/
    $(btn).click(() => {
        $.get(`https://pokeapi.co/api/v2/pokemon/${input.val()}`, //reemplazo por el valor que ingrese el usuario
            (data, response) => {
                let pokemon = data; //datos generales (revisar API)
                let pokeName = pokemon.name.toUpperCase();
                let status = capitalize(response); //estado de la petición
                let image = pokemon.sprites.other["official-artwork"].front_default; //imagen del pokemon
                let url = $('#pokeurl');
                let expBase = pokemon.base_experience;
                let ability = pokemon.abilities; //arrays con las habilidades

                // HTTP REQUEST
                if (response === 'success') { // en caso de success (200OK)

                    let showAbilities = () => {
                        for (let i in ability) {
                            console.log(ability[i]) //por cada array de habilidades, mostrar en consola
                        }
                    };;
                    showAbilities(); // muestra el array de objetos con las habilidades


                    let abilityName = "";
                    // loopeo en 'ability' para poder extraer sólo los nombres
                    for (i = 0; i < ability.length; i++) {
                        // busco la key nombre
                        if (i + 1 == ability.length) {
                            abilityName += ability[i].ability.name;
                        } else {
                            abilityName += ability[i].ability.name + ', ';
                        }
                    }
                    $('#extrabtn').show().css('display', 'block'); //mostrar botón de detalles

                    $('.hiddenCard').html(`<div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Pokestats</h5>
                      <h6 class="card-subtitle mb-2 text-muted"></h6>
                      <p class="card-text">Estadísticas de ${pokeName} [${input.val()}]</p>
                      <ul>
                        <li class="base_exp">Exp. Base: <span class="extraspan">${expBase}</span></li>
                        <li class="ability">Habilidad: ${abilityName}<span class="extraspan"></span></li>
                        <li class="moves"><span class="extraspan"></span></li>
                    </ul>
                      <a href="#" class="card-link">Pokedex</a>
                      <a href="#" class="card-link"></a>
                    </div>
                  </div>`)
                    //detalles del pokemon en la consola
                    console.log(`Pokemon: ${pokeName}
                    \nStatus: ${status} | 200 OK |
                    \nImage url: ${image}`);
                    $(url).attr('href', `https://www.pokemon.com/es/pokedex/${input.val()}`); // reenvío a pokedex
                    $(imageContainer).attr('src', image); // añadir el src a la imagen
                    $(p_name).text(`#${input.val()} ${pokeName}`); // añadir nombre
                    $(input).val(''); // resetear el campo de input una vez clickeado el botón
                } else {
                    alert('Epa! creo que tenemos un error.\nRevisa la consola para más detalles');
                    console.log(`\nStatus: ${status}`);
                };
            }
        );
    });
});