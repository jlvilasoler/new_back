import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";

export default async function (req: Request) {
    try {
        const pid = req.params.pid;
        const mongoDB = new MongoDB();
        const cart = await mongoDB.findById(pid, "PRODUCTS");

        if (!cart) {
            return { code: 404, data: `Producto ${pid} indicado no encontrado` };
        }

        return { code: 200, data: cart };
    } catch (error) {
        console.error("Error al obtener el carrito por ID:", error);
        return { code: 500, data: "Error interno del servidor" };
    }
}