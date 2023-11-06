import MongoDB from "../../lib/Mongo";

export default async function() {
    const mongoDB = new MongoDB();
    const resultado = await mongoDB.read(undefined, "PRODUCTS");
    if(!resultado) {
        return { code: 404, data: "No se pueden visualizar los productos" }
    }
    
    return { code: 200, data: resultado }
}
