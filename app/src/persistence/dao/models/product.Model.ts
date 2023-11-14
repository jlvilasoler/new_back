import mongoose from "mongoose";
import { mongoosePagination, Pagination } from "mongoose-paginate-ts";

const productCollection = "PRODUCTS";
const productSchema = new mongoose.Schema( {
    title: {type: String, required: true}, 
    description: {type: String, required: true},
    price: {type: Number, required: true},
    thumbnail: {type: String, required: true},
    code: {type: Number, required: true},
    stock: {type: Number, required: true},
    status: {type: String, required: true},
    category: {type: String, required: true}
});

productSchema.plugin(mongoosePagination);
const productModel = mongoose.model(productCollection, productSchema);
export { productModel };