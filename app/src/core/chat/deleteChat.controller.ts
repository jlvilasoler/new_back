import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";

export default async function(req: Request) {
    const id = req.params.id;
    const mongoDB = new MongoDB();
    const resultado = await mongoDB.delete(id, "CHAT");

    if(!resultado) {
        return { code: 500, data: "No se pudo eliminar el mensaje" }
    }
    
    if(!resultado.deletedCount) {
        return { code: 404, data: "Mensaje indicado no existe" }
    }

    return { code: 200, data: `Mensaje ${id} borrado exitosamente` }
}