import express from "express";
import morgan from 'morgan';
import cors from 'cors';

import socketChatService from './src/sockets/chat'

import sethandlebars from './src/middlewares/hbs'

import {
    createCartController, 
    deleteCartController,
    getCartController,
    updateCartController,
    createProductController,
    deleteProductController,
    getProductController,
    updateProductController,

    createChatController,
    getChatController,
    deleteChatController,
    updateChatController,
 } from "./src/core/";





const app = express();
const router = express.Router();
sethandlebars(app);

app.use(express.urlencoded({ extended: true, limit: "1500gb" }));
app.use(express.json({ limit: "1500gb" }));
app.use(cors());
app.use(morgan("tiny"));
app.use(express.static('./app/src/public'));

app.use('/servicio/api', router);

app.use(express.static('public', { 'extensions': ['html', 'htm'] }));
app.use(express.static('public', { 'extensions': ['js'] }));

// CART
router.get('/get/cart', cors(), async (req, res) => {
    const { code, data } = await getCartController();
    res.status(code).json(data);
});

router.post('/post/cart', cors(), async (req, res) => {
    const { code, data } = await createCartController(req);
    res.status(code).json(data);
});

router.put('/put/cart/:id', cors(), async (req, res) => {
    const { code, data } = await updateCartController(req);
    res.status(code).json(data);
});

router.put('/put/cart/:id/product/:pid', cors(), async (req, res) => {
    const { code, data } = await updateCartController(req);
    res.status(code).json(data);
});

router.delete('/delete/cart/:id', cors(), async (req, res) => {
    const { code, data } = await deleteCartController(req);
    res.status(code).json(data);
});


// PRODUCT
router.get('/get/product', cors(), async (req, res) => {
    const { code, data } = await getProductController();
    res.status(code).json(data);
});

router.post('/post/product', cors(), async (req, res) => {
    const { code, data } = await createProductController(req);
    res.status(code).json(data);
});

router.put('/put/product/:pid', cors(), async (req, res) => {
    const { code, data } = await updateProductController(req);
    res.status(code).json(data);
});

router.delete('/delete/product/:pid', cors(), async (req, res) => {
    const { code, data } = await deleteProductController(req);
    res.status(code).json(data);
});

app.get("/products", cors(), async (req, res) => {
    const { data } = await getProductController();
    res.render("products", { products: data });
});


// CHATS
router.get('/get/chats', cors(), async (req, res) => {
    const { code, data } = await getChatController();
    res.status(code).json(data);
});

router.post('/post/chats', cors(), async (req, res) => {
    const { code, data } = await createChatController(req);
    res.status(code).json(data);
});

router.delete('/delete/chats/:id', cors(), async (req, res) => {
    const { code, data } = await deleteChatController(req);
    res.status(code).json(data);
});

router.put('/put/chat/:id', cors(), async (req, res) => {
    const { code, data } = await updateChatController(req);
    res.status(code).json(data);
});

app.get("/chat", cors(), async (req, res) => {
    const { data } = await getChatController();
    res.render("chat", { chats: data });
});

app.get("/profile", cors(), async (req, res) => {
    res.render("profile", {  });
});



const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`SERVIDOR CONECTADO EN PUERTO: ${PORT}`);
});
socketChatService(httpServer);