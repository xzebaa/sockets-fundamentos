const io  = require('../server');

io.on('connection', (cliente) => {
    console.log('usuario conectado');

    cliente.on('disconnect', () => {
        console.log('usuario desconectado');
    })

    // escuchar el cliente
    cliente.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        cliente.broadcast.emit('enviarMensaje', mensaje);

        // if (mensaje.usuario){
        //     return callback(null, {
        //         ok: true,
        //         message: 'TODO SALIO BIEN !!!!',
        //     });
        // }

        // return callback({
        //     code: 500,
        //     message: 'SALIO MAL !!!!!!!!!',
        // }, null);
        

    });

    // enviar mensaje
    cliente.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'bienvenidos',
    })
});