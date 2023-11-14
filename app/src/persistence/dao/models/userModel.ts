import mongoose from "mongoose";

const userCollection = "USERS";

const userSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String, required: true},
    age: {type: Number},
    password: {type: String},
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'CARTS'},
    role: {type: String},
});

const userModel = mongoose.model(userCollection, userSchema);
export { userModel };   