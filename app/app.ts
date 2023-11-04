import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import {
    createCartController, 
    deleteCartController,
    getCartController,
    updateCartController,
    createProductController,
    deleteProductController,
    getProductController,
    updateProductController
 } from "./src/core/";

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true, limit: "1500gb" }));
app.use(express.json({ limit: "1500gb" }));
app.use(cors());
app.use(morgan("tiny"));
app.use('/servicio/api', router);

// CART
router.get('/get/cart', cors(), async (req, res) => {
    const { code, data } = await getCartController();
    res.status(code).json(data);
});

router.post('/post/cart', cors(), async (req, res) => {
    const { code, data } = await createCartController();
    res.status(code).json(data);
});

router.put('/put/cart', cors(), async (req, res) => {
    const { code, data } = await updateCartController();
    res.status(code).json(data);
});

router.delete('/delete/cart', cors(), async (req, res) => {
    const { code, data } = await deleteCartController();
    res.status(code).json(data);
});

// PRODUCT
router.get('/get/product', cors(), async (req, res) => {
    const { code, data } = await getProductController();
    res.status(code).json(data);
});

router.post('/post/product', cors(), async (req, res) => {
    const { code, data } = await createProductController();
    res.status(code).json(data);
});

router.put('/put/product', cors(), (req, res) => {
    const { code, data } = updateProductController();
    res.status(code).json(data);
});

router.delete('/delete/product', cors(), async (req, res) => {
    const { code, data } = await deleteProductController();
    res.status(code).json(data);
});

app.listen(8080, () => {
    console.log("SERVIDOR ESCUCHANDO EN PUERTO: 8080");
})