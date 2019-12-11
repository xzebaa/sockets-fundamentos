var socket = io();

// on son para escuchar informacion
socket.on('connect', function(){
    console.log('soket.io connected');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

// emmit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'sebastian',
    mensaje: 'hola mundo',
}, function( error, resp) {

    if( error ) return console.log('error callback enviarmensaje', error);

    return console.log('exito callback enviarmensaje', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('mensaje escuchado: ', mensaje);
});