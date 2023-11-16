import mongoose from "mongoose";
import * as mongoosePaginate from 'mongoose-paginate';

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

productSchema.plugin(mongoosePaginate);
const ProductModel = mongoose.model(productCollection, productSchema);
export default ProductModel;