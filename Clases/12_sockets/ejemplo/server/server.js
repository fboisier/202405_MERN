
import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);

// Configuración Básica:
// Usamos express para servir archivos estáticos desde la carpeta public.
app.use(express.static('public'));

// Creamos un servidor HTTP y lo vinculamos con socket.io.
// Permitimos el CORS en el servidor socket.io para permitir conexiones desde cualquier origen.
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Manejo de Conexiones:
// Cuando un nuevo usuario se conecta, se imprime un mensaje en la consola.
io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');

    // Se escucha el evento newMessage para recibir mensajes del cliente
    // y se reenvían a todos los clientes conectados usando io.emit.
    socket.on('newMessage', (message) => {
        console.log('Mensaje recibido:', message);
        io.emit('message', message);
    });

    // Desconexión: 
    // Cuando un usuario se desconecta, se imprime un mensaje en la consola.
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

server.listen(8000, () => {
    console.log('El servidor está listo en el puerto 8000');
});