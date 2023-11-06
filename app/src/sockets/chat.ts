import ChatService from "../services/chat.service";
import { Server } from 'socket.io';
import { Server as ServerHttp } from 'http'

const chatSocketServer = (httpServer: ServerHttp) => {



/////////////////////////////////////////////////
//TENGO QUE LEER EN MONGODB EL CHAT Y REGISTRAR 
const chatService = new ChatService()
const socketServer = new Server(httpServer);
socketServer.on('connection', (socket) => {
    socket.on('mensaje', async (mensaje) => {
        try {
            // Req = {user: "Jose" , mensaje: "hola"}
            // Crear un nuevo mensaje en la base de datos 'CHATS'
            await chatService.createChat(mensaje);

            // Obtener todos los mensajes de la base de datos 'CHATS' sin filtrar
            const mensajes = await chatService.getChats();
            // Emitir los mensajes a través de Socket.IO
            socketServer.emit('nuevo-mensaje', mensajes);
        } catch (error) {
            console.error("Error al interactuar con la base de datos CHATS:", error);
        }
    });

    socket.on('disconnect', () => {
        console.log(`Usuario desconectado con ID: ${socket.id}`);
    });
});

}

export default chatSocketServer;