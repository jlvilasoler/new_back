import MongoDB from "../../lib/Mongo";

export default async function() {
    const mongoDB = new MongoDB();
    await mongoDB.getCart();
    return { code: 200, data: "Get Cart" }
}