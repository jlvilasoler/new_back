import { Router } from "express";
import cors from 'cors';
import { getProductController, getProductByIdController , createProductController, deleteProductController, updateProductController} from "../core";
import { productModel } from "../persistence/dao/models/product.model";


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


/*
router.get('/', async (req, res) => {
    const { limit, page, sort, query } = req.query;

    const sortObjectMapper = {
        asc: { price: 1 },
        desc: { price: -1 },
    };

    const ModelQuery = query ?? {};
    const modelLimit = limit ? parseInt(limit as string, 10) : 10;
    const modelPage = page ? parseInt(page as string, 10) : 1;
    const modelSort: { [key: string]: number } | undefined = sort && sortObjectMapper[sort as string];

    const products = await productModel.paginate(ModelQuery, {
        limit: modelLimit,
        page: modelPage,
        sort: modelSort,
    });
    res.send(products);
});


*/

export default router;