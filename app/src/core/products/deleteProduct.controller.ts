import MongoDB from "../../lib/Mongo";

export default async function() {
    const mongoDB = new MongoDB();
    await mongoDB.deleteProduct();
    return { code: 200, data: "Delete Product" }
}