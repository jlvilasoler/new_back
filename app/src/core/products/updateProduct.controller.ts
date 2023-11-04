import MongoDB from "../../lib/Mongo";

export default function() {
    const mongoDB = new MongoDB();
    console.log(mongoDB.updateProduct());
    return { code: 200, data: "Update Product" }
}