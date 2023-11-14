import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";

export default async function (req: Request) {
    const id = req.params.id;
    const pid = req.params.pid;
    const dataActualizada = req.body;
    const mongoDB = new MongoDB();

    if (Object.values(dataActualizada).length === 0) {  // []
        //consultar a la bd si existe el id del carrito seleccionado:
        const consultaCarritos = await mongoDB.read(id, "CARTS");

        if (!consultaCarritos) {
            return { code: 404, data: "El carrito que se consulta no existe" }
        }
        //consultar a la bd si existe el id del carrito seleccionado:
        const consultaProductos = await mongoDB.read(pid, "PRODUCTS");

        if (!consultaProductos) {
            return { code: 404, data: "El producto que se consulta no existe" }
        }

        const listaDeProductosActualizada = consultaCarritos.productos;
        listaDeProductosActualizada.push(consultaProductos);
        consultaCarritos.productos = listaDeProductosActualizada;
        const resultado = await mongoDB.update(id, consultaCarritos, "CARTS");

        if (!resultado) {
            return { code: 404, data: "No se pudo actualizar el carrito" }
        }

        return { code: 200, data: consultaCarritos }
    }

    const consultaCarritos = await mongoDB.read(id, "CARTS");

    if (!consultaCarritos) {
        return { code: 404, data: "El carrito que se consulta no existe" }
    }

    const resultado = await mongoDB.update(id, dataActualizada, "CARTS");

    if (!resultado) {
        return { code: 404, data: "No se pudo actualizar el carrito" }
    }

    return { code: 200, data: resultado }
}