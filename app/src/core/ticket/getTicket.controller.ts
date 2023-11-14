import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";

export default async function() {

    const mongoDB = new MongoDB();
    const resultado = await mongoDB.read(undefined, "TICKET");

    if(!resultado) {
        return { code: 404, data: "No se pueden visualizar los tickets" }
    }
    
    return { code: 200, data: resultado }
}
