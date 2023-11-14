import { Router } from "express";
import cors from 'cors';
import { getTicketController, getTicketByIdController , createTicketController, deleteTicketController} from "../core";

const router = Router();

//Obtengo todos los tickets 
router.get('/get/ticket', cors(), async (req, res) => {
    const { code, data } = await getTicketController();
    res.status(code).json(data);
});

//Creo un ticket nuevo
router.post('/post/ticket', cors(), async (req, res) => {
    const { code, data } = await createTicketController(req);
    console.log(data)
    res.status(code).json(data);
});

//Elimino un ticket
router.delete('/delete/ticket/:id', cors(), async (req, res) => {
    const { code, data } = await deleteTicketController(req);
    res.status(code).json(data);
});

//Obtiene ticket por numero de id
router.get("/get/ticket/:id", async (req, res) => {
    const { code, data } = await getTicketByIdController(req);
    res.status(code).json(data);
});


export default router;