
// Importamos la función io desde socket.io-client
import { io } from 'socket.io-client';

// Definimos la URL del socket, asegúrate de que coincida con tu configuración de servidor
const SOCKET_URL = 'http://localhost:8000';
// Inicializamos el socket
const socket = io(SOCKET_URL);

// Exportamos el socket para su uso en otros componentes
export default socket;