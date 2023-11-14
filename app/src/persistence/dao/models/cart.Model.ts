import mongoose from "mongoose";

const cartCollection = "CARTS";

const cartSchema = new mongoose.Schema( {
    products: [
    {
        id: { type: String, },
        quantity: { type: Number, },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "PRODUCTS" }
    },
],
});

const cartModel = mongoose.model(cartCollection, cartSchema);
export { cartModel };