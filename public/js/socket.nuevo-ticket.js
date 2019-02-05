//import { emit } from "cluster";

//comando para establecer la comunicacion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(resp) {

    label.text(resp.actual);

});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});


// socket.emit('enviarMensaje', {
//     mensaje: 'Hola'
// }, function(resp) {
//     console.log('Respuesta server: ', resp);
// });
// socket.on('enviarMensaje', function(mensaje) {
//     console.log(mensaje);
// });