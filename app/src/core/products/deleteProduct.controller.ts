import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";

export default async function(req: Request) {
    const pid = req.params.pid;
    const mongoDB = new MongoDB();
    const resultado = await mongoDB.delete(pid, "PRODUCTS");

    if(!resultado) {
        return { code: 500, data: "No se pudo eliminar el producto" }
    }

    if(!resultado.deletedCount) {
        return { code: 404, data: "Producto indicado no existe" }
    }
    
    return { code: 200, data: `Producto ${pid} borrado exitosamente` }
}
