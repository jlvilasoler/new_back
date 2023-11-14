import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";

export default async function (req: Request) {
    try {
        const id = req.params.id;
        const mongoDB = new MongoDB();
        const cart = await mongoDB.findById(id, "CARTS");

        if (!cart) {
            return { code: 404, data: "Carrito indicado no encontrado" };
        }

        return { code: 200, data: cart };
    } catch (error) {
        console.error("Error al obtener el carrito por ID:", error);
        return { code: 500, data: "Error interno del servidor" };
    }
}