import MongoDB from "../persistence/dao/mongoDB/Mongo";

const mongo = new MongoDB() 
export default class ChatService {
    async createChat(message: object) {
        const resultado = await mongo.create([message], "CHAT")
        return resultado
    }

    async getChats() {
        const resultado = await mongo.read(undefined, "CHAT");
        return resultado
    }
}
