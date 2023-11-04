import MongoDB from "../../lib/Mongo";

export default async function() {
    const mongoDB = new MongoDB();
    await mongoDB.getProduct();
    return { code: 200, data: "Get Product" }
}