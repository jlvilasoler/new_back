import { Router } from "express";
import cors from 'cors';
import { getCartByIdController, getCartController , createCartController, updateCartController, deleteCartController} from "../core";

const router = Router();



//Obtengo todos los  carritos
router.get('/get/cart', cors(), async (req, res) => {
    const { code, data } = await getCartController();
    res.status(code).json(data);
});

//Creo carrito
router.post('/post/cart', cors(), async (req, res) => {
    const { code, data } = await createCartController(req);
    res.status(code).json(data);
});

//Actualizo carrito
router.put('/put/cart/:id', cors(), async (req, res) => {
    const { code, data } = await updateCartController(req);
    res.status(code).json(data);
});

//Actualizo producto por carrito
router.put('/put/cart/:id/product/:pid', cors(), async (req, res) => {
    const { code, data } = await updateCartController(req);
    res.status(code).json(data);
});

//Elimino carrito
router.delete('/delete/cart/:id', cors(), async (req, res) => {
    const { code, data } = await deleteCartController(req);
    res.status(code).json(data);
});

//Obtiene carrito por numero de id
router.get("/get/cart/:id", async (req, res) => {
    const { code, data } = await getCartByIdController(req);
    res.status(code).json(data);
});

export default router;