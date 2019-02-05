const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connect', (client) => {
    console.log('Usuario conectado');


    const {} = require('../server');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente();
        callback(siguiente);
        console.log(siguiente);
    });

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            });
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);

        callback(atenderTicket);

        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimos4()
        });

        //actualizar o notificar cambios en los ultimos 4

    });
    // //Escucha info desde el cliente
    // client.on('enviarMensaje', (data, callback) => {
    //     console.log(data);
    //     //emite info escuchada de un cli a todos los clientes
    //     client.broadcast.emit('enviarMensaje', data);

    //     // if (mensaje.usuario) {
    //     //     callback({
    //     //         resp: 'Todo salio bien'
    //     //     });
    //     // } else {
    //     //     callback({
    //     //         resp: 'Todo salio mal'
    //     //     })
    //     // }


    // });

    // //emite info hacia el cliente
    // client.emit('enviarMensaje', {
    //     usuario: 'Admin',
    //     mensaje: 'Bienvenido al chat'
    // })
});