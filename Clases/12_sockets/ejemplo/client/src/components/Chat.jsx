import { useEffect, useState } from 'react';
import socket from '../sockets.js';

const Chat = () => {
    // Estado para almacenar los mensajes recibidos
    const [messages, setMessages] = useState([]);
    // Estado para el nuevo mensaje a enviar
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Configuramos el listener para el evento 'message'
        socket.on('message', (message) => {
            // Actualizamos el estado con el nuevo mensaje
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Función de limpieza para quitar el listener cuando el componente se desmonte
        return () => {
            socket.off('message');
        };
    }, []);

    // Función para enviar un mensaje
    const sendMessage = () => {
        socket.emit('newMessage', newMessage);
        setNewMessage('');
    };

    return (
        <div>
            <h1>Chat</h1>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;