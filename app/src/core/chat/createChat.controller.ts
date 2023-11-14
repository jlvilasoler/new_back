import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";
import ChatService from "../../services/chat.service";

const chatService = new ChatService();

export default async function(req: Request) {
    const chats = req.body;
    //const mongoDB = new MongoDB();
    //const resultado = await mongoDB.create(chats, "CHAT");

    const resultado = await chatService.createChat(chats);
    if(!resultado) {
        return { code: 404, data: "No se pudo crear mensaje" }
    }
    
    return { code: 200, data: resultado }
}