import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";

export default async function (req: Request) {
    const id = req.params.id;
    const pid = req.params.pid;
    const dataActualizada = req.body;
    const mongoDB = new MongoDB();

    if (Object.values(dataActualizada).length === 0) {  // []
        //consultar a la bd si existe el id del carrito seleccionado:
        const consultaChat = await mongoDB.read(id, "CHAT");

        if (!consultaChat) {
            return { code: 404, data: "El carrito que se consulta no existe" }
        }
        //consultar a la bd si existe el id del carrito seleccionado:
        const consultaMensaje = await mongoDB.read(pid, "PRODUCTS");

        if (!consultaMensaje) {
            return { code: 404, data: "El mensaje que se consulta no existe" }
        }

        const listaDeProductosActualizada = consultaChat.productos;
        listaDeProductosActualizada.push(consultaMensaje);
        consultaChat.productos = listaDeProductosActualizada;
        const resultado = await mongoDB.update(id, consultaChat, "CARTS");

        if (!resultado) {
            return { code: 404, data: "No se pudo actualizar el chat" }
        }

        return { code: 200, data: consultaChat }
    }

    const consultaChat = await mongoDB.read(id, "CHAT");

    if (!consultaChat) {
        return { code: 404, data: "El carrito que se consulta no existe" }
    }

    const resultado = await mongoDB.update(id, dataActualizada, "CHAT");

    if (!resultado) {
        return { code: 404, data: "No se pudo actualizar el mensaje" }
    }

    return { code: 200, data: resultado }
}