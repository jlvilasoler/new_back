import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";

export default async function (req: Request) {
    try {
        const id = req.params.id;
        const mongoDB = new MongoDB();
        const ticket = await mongoDB.read(id, "TICKET");

        if (!ticket) {
            return { code: 404, data: "Ticket indicado no encontrado" };
        }

        return { code: 200, data: ticket };
    } catch (error) {
        console.error("Error al obtener el carrito por ID:", error);
        return { code: 500, data: "Error interno del servidor" };
    }
}