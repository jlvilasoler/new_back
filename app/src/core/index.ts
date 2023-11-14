import createCartController from "./carts/createCart.controller";
import deleteCartController from "./carts/deleteCart.controller";
import getCartController from "./carts/getCart.controller";
import getCartByIdController from "./carts/getCartById.controller";
import updateCartController from "./carts/updateCart.controller";
import createProductController from "./products/createProduct.controller";
import deleteProductController from "./products/deleteProduct.controller";
import getProductController from "./products/getProduct.controller";
import getProductByIdController from "./products/getProductById.controller";
import updateProductController from "./products/updateProduct.controller";

import createChatController from "./chat/createChat.controller";
import getChatController from "./chat/getChat.controller";
import deleteChatController from "./chat/deleteChat.controller";
import updateChatController from "./chat/updateChat.controller";

import createTicketController from "./ticket/createTicket.controller";
import getTicketController from "./ticket/getTicket.controller";
import deleteTicketController from "./ticket/deleteTicket.controller";
import getTicketByIdController from "./ticket/getTicketById.controller";

export { 
    createCartController, 
    deleteCartController,
    getCartController,
    getCartByIdController,
    updateCartController,

    getProductByIdController,
    createProductController,
    deleteProductController,
    getProductController,
    updateProductController,

    createChatController,
    getChatController,
    deleteChatController,
    updateChatController,

    createTicketController,
    getTicketByIdController,
    getTicketController,
    deleteTicketController
}