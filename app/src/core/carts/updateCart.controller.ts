import MongoDB from "../../lib/Mongo";

export default async function() {
    const mongoDB = new MongoDB();
    await mongoDB.updateCart();
    return { code: 200, data: "Update Cart" }
}