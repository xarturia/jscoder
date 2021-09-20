$(document).ready(function () {
    // animación del botón btt
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