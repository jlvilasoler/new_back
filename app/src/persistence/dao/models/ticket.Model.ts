import mongoose from "mongoose";

const ticketCollection = "TICKET";

const ticketSchema = new mongoose.Schema({
    purchase_datetime: { type: Date, default: Date.now },
    code: { type: String, required: true },
    amount: { type: Number, required: true },
    ticket: { type: String, required: true },
});


const ticketModel = mongoose.model(ticketCollection, ticketSchema);
export { ticketModel };