import MongoDB from "../../lib/Mongo";

export default async function() {
    const mongoDB = new MongoDB();
    await mongoDB.createNewProduct();
    return { code: 200, data: "Create Product" }
}