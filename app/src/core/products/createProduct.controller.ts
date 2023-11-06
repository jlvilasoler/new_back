import MongoDB from "../../lib/Mongo";
import { Request } from "express";

export default async function(req: Request) {
    const productos = req.body;
    const mongoDB = new MongoDB();
    const resultado = await mongoDB.create(productos,"PRODUCTS");
    
    if(!resultado) {
        return { code: 404, data: "No se pudo crear el/los Producto/s" }
    }

    return { code: 200, data: resultado }
}