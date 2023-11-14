import MongoDB from "../../persistence/dao/mongoDB/Mongo";
import { Request } from "express";


export default async function(req: Request) {
    try {
        const purchaseDatetime = new Date();

        const uniqueCode = autogeneratoorUniqueCode();
        const mongoDB = new MongoDB();

        console.log("req.body:", req.body);
        const purchaseData = {
            code: uniqueCode,
            purchase_datetime: purchaseDatetime.toISOString(),
            amount: req.body[0].amount,
            purchaser: req.body[0].purchaser,
        };
        console.log("purchaseData:", purchaseData);

        const resultado = await mongoDB.create(purchaseData, "TICKET");

        if (!resultado) {
            console.error("No se pudo crear el ticket");
            return { code: 404, data: "No se pudo crear el ticket" };
        }

        console.log("Ticket creado:", resultado);

        return { code: 200, data: resultado };
    } catch (error) {
        console.error("Error al procesar la compra:", error);
        return { code: 500, data: "Error interno del servidor" };
    }

}

//generamos un codigo automatico de ticket
function autogeneratoorUniqueCode() {
    const date = new Date();
    const year = (date.getFullYear() % 100).toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}