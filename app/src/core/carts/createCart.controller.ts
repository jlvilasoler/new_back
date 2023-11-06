import MongoDB from "../../lib/Mongo";
import { Request } from "express";

export default async function(req: Request) {
    const carrito = req.body;
    const mongoDB = new MongoDB();
    const resultado = await mongoDB.create(carrito, "CARTS");

    if(!resultado) {
        return { code: 404, data: "No se pudo crear el carrito" }
    }
    
    return { code: 200, data: resultado }
}