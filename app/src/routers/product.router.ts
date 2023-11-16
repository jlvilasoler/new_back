import { Router } from "express";
import cors from 'cors';
import { getProductController, getProductByIdController , createProductController, deleteProductController, updateProductController} from "../core";
import ProductModel from "../persistence/dao/models/product.model";
import express, { Request, Response } from 'express';

const router = Router();

// PRODUCT
//Obtengo todos los productos
router.get('/get/product', cors(), async (req, res) => {
    const { code, data } = await getProductController();
    res.status(code).json(data);
});

//Creo un producto nuevo
router.post('/post/product', cors(), async (req, res) => {
    const { code, data } = await createProductController(req);
    res.status(code).json(data);
});

//Actualizo un producto nuevo
router.put('/put/product/:pid', cors(), async (req, res) => {
    const { code, data } = await updateProductController(req);
    res.status(code).json(data);
});

//Elimino un producto
router.delete('/delete/product/:pid', cors(), async (req, res) => {
    const { code, data } = await deleteProductController(req);
    res.status(code).json(data);
});

//Obtiene producto por numero de id
router.get("/get/product/:pid", async (req, res) => {
    const { code, data } = await getProductByIdController(req);
    res.status(code).json(data);
});





// PAGINATE
router.get('/', async (req: Request, res: Response) => {
    try {
        const { limit, page, sort, query } = req.query;

        const sortObjectMapper: any = {
            asc: { price: 1 },
            desc: { price: -1 },
        };

        const modelQuery = query ?? {};
        const modelLimit = limit ? parseInt(limit as string, 10) : 10;
        const modelPage = page ? parseInt(page as string, 10) : 1;
        const modelSort: { [key: string]: number } | undefined = sort && sortObjectMapper[sort as string];


        const products = await ProductModel.paginate(modelQuery, {
            limit: modelLimit,
            page: modelPage,
            sort: modelSort,
        });

        res.send(products);
    } catch (error) {
        console.error('Error en la paginación:', error);
        res.status(500).send('Error en la paginación');
    }
});


export default router;


