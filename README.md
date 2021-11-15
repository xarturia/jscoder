# Xarturia
Xarturia es una WebApp de streaming de anime, cuenta con un directorio extenso de series, reproductor integrado, cuentas de usuario y muchas características más.

## Dependencias
* [node.js](https://nodejs.org/es/download/)
* [dotenv](https://www.npmjs.com/package/dotenv) 10.0.0+
* Las dependencias adicionales pueden ser vistas en el archivo [package.json](https://github.com/xarturia/jscoder/blob/prerelease/package.json)

inicia ``npm``
```bash
npm init -y
```

## Variables
Llena los datos requeridos en ``.env_sample``

* Genera tu [STRIPE API](https://dashboard.stripe.com/test/apikeys)

Tan pronto como sea posible, al inicio de tu script requiere y configura ``dotenv``
```javascript
require('dotenv').config()
```
### Reemplazando
#### Primer método (usando dotenv)
Éste método sólo es conveniente usarlo en caso de hostear la repo públicamente, como puede ser el ejemplo de GitHub Pages, vercel, heroku, etc. para evitar dejar expuestas nuestras ``API KEY``


En ``stripe.js`` tendrás 2 peticiones con AJAX hacia la API de Stripe con el siguiente formato:
```javascript
   $.ajax({
        url: 'https://api.stripe.com/v1/products',
        headers: {
            'Authorization': `Bearer STRIPE_SECRET`,
        }...
```
Reemplazas ``STRIPE_SECRET`` utilizando el método que nos ofrece dotenv
* ``process.env.{key}``
```javascript
'Authorization': `Bearer ${process.env.STRIPE_SECRET}`, ...
```
Lo mismo hacemos con las siguientes llamadas Stripe, reemplazando con nuestras propias variables o las que vienen por defecto en la repo.

```javascript
Stripe(process.env.STRIPE_PUBLIC).redirectToCheckout({
            lineItems:[{price: prod0, quantity: 1}], ...
```
### Segundo método (más simple)
Éste método es el que preferiblemente utilizaremos en caso de simplemente querer testear de manera local las distintas APIs.

Ésta vez, tomaremos por ejemplo el archivo ``keys_sample.js``
```javascript
export default {
    public: "tu public key",
    secret: "tu secret key"
}
```
Reemplazamos los datos correspondientes y renombramos el archivo a ``keys.js``

* #### Con éste método NO es necesario modificar nuestro archivo ``stripe.js``

## License
[MIT](https://choosealicense.com/licenses/mit/)