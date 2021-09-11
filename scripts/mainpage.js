$(document).ready(function () {
    // animación al presionar el header
    /* let controlador = true;
    $('header').on('click', function () {
        if (controlador) {
            $('header').animate({
                height: '200px'
            });
        } else {
            $('header').animate({
                height: '75px'
            });
        }
        controlador = !controlador;
    }); */
    // arreglar logo container
    // Animación para el botón de subir
    let giro = true;
    $('#back-to-top').click(function () {
        if (giro) {
            $('.fa-arrow-circle-up').css({
                'margin-top': '15px',
                'transform': 'rotate(360deg)'
            }, 4000);
        } else {
            $('.fa-arrow-circle-up').css({
                'margin-top': '15px',
                'transform': 'rotate(720deg)'
            }, 4000);
        }
        giro = !giro;
    });
});