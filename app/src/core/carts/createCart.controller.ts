import MongoDB from "../../lib/Mongo";

export default async function() {
    const mongoDB = new MongoDB();
    await mongoDB.createNewCart();
    return { code: 200, data: "Create Cart" }
}