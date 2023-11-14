import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";

export default async function(req: Request) {
    const pid = req.params.pid;
    const dataActualizada = req.body;
    const mongoDB = new MongoDB();
    const resultado = await mongoDB.update(pid, dataActualizada, "PRODUCTS");
    if(!resultado) {
        return { code: 404, data: "No se pudo actualizar el producto" }
    }
    
    return { code: 200, data: resultado }
}
