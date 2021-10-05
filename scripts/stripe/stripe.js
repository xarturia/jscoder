import STRIPE_KEYS from '../stripe/keys.js'; // importamos nuestras keys
// require('dotenv').config() en caso de usar dotenv
const price0 = $('#pr0-0');
const price5 = $('#pr1-5');
const price10 = $('#pr2-10');

// Llamamos a la API de Stripe para consultar los productos y ver su respuesta
$(function () {
    $.ajax({
        url: 'https://api.stripe.com/v1/products',
        headers: {
            'Authorization': `Bearer ${STRIPE_KEYS.secret}`, // secret key
        },
        method: 'GET',
        dataType: 'json',
        success: (data, res) => {
            const d = JSON.stringify(data); //obtenemos los datos
            const priceObj = JSON.parse(d) // parseamos y almacenamos en priceObj
            console.log(`Status: ${res} | 200 OK`); // mostramos en consola el la respuesta del servidor
            console.log(priceObj)
        },
        error: (e) => {
            // éstos parámetros son provistos por STRIPE, revisar la documentación
            const errMsg = e.responseJSON.error.message; // mensaje de error
            const errType = e.responseJSON.error.type; // tipo de error
            const errCode = e.status; // código / status
            console.log(`Status: ${errCode} | ${errType}\n${errMsg}`);
        }
    });
    // Es conveniente configurar la consola para que preserve los registros y así seguir con detalle lo que sucede.

    // Hacemos lo mismo con los precios
    $.ajax({
        url: 'https://api.stripe.com/v1/prices',
        headers: {
            'Authorization': `Bearer ${STRIPE_KEYS.secret}`,
        },
        method: 'GET',
        dataType: 'json',
        success: (data, res) => {
            const d = JSON.stringify(data);
            const priceObj = JSON.parse(d)
            console.log(`Status: ${res} | 200 OK`);
            console.log(priceObj)
        },
        error: (e) => {
            const errMsg = e.responseJSON.error.message;
            const errType = e.responseJSON.error.type;
            const errCode = e.status;
            console.log(`Status: ${errCode} | ${errType}\n${errMsg}`);

        }
    });

    const prod0 = price0.attr('data-price') // obtenemos el producto a partir de su atributo
    $(price0).click(function (e) {
        e.preventDefault(); // evitamos la acción por defecto
        
        console.log(prod0);

        // leer doc.
        // Utilizamos el método que nos provee STRIPE para hacer checkout de nuestros prods.
        Stripe(STRIPE_KEYS.public).redirectToCheckout({ //acá usamos la public key que importamos al principio
            lineItems:[{price: prod0, quantity: 1}], // indicamos el precio y la cantidad
            mode: 'subscription', // recurrente, se cobra todos los meses
            successUrl:'https://xarturia.github.io/jscoder/success.html', // reenvío si da success
            cancelUrl: 'https://xarturia.github.io/jscoder/cancel.html', // reenvío si da cancel
        }).then(res=>{
            console.log(res);
            if(res.error){
                console.log(`Error: ${res.error.message}`) // muestra el mensaje de error
            }
        })
    });

    const prod5 = price5.attr('data-price');
    $(price5).click(function (e) {
        e.preventDefault();
        
        console.log(prod5);

        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems:[{price: prod5, quantity: 1}],
            mode: 'subscription',
            successUrl:'https://xarturia.github.io/jscoder/success.html',
            cancelUrl: 'https://xarturia.github.io/jscoder/cancel.html',
        }).then(res=>{
            console.log(res);
            if(res.error){
                console.log(`Error: ${res.error.message}`)
            }
        })
    });

    const prod10 = price10.attr('data-price');
    $(price10).click(function (e) {
        e.preventDefault();
        
        console.log(prod10);

        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems:[{price: prod10, quantity: 1}],
            mode: 'subscription',
            successUrl:'https://xarturia.github.io/jscoder/success.html',
            cancelUrl: 'https://xarturia.github.io/jscoder/cancel.html',
        }).then(res=>{
            console.log(res);
            if(res.error){
                console.log(`Error: ${res.error.message}`)
            }
        })
    });
});