import express from 'express';
import cors from 'cors';
import { getChatController , createChatController, deleteChatController, updateChatController} from "../core";

const router = express.Router();


//Obtengo todos los chats
router.get('/get/chats', cors(), async (req, res) => {
  const { code, data } = await getChatController();
  res.status(code).json(data);
});

//Creo un chat nuevo
router.post('/post/chats', cors(), async (req, res) => {
  const { code, data } = await createChatController(req);
  res.status(code).json(data);
});

//Elimino un chat nuevo
router.delete('/delete/chats/:id', cors(), async (req, res) => {
  const { code, data } = await deleteChatController(req);
  res.status(code).json(data);
});

//Actualizo un chat
router.put('/put/chat/:id', cors(), async (req, res) => {
  const { code, data } = await updateChatController(req);
  res.status(code).json(data);
});




export default router;