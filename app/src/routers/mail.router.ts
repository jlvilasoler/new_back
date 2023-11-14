import { Router } from 'express';
import cors from 'cors';
import sendMail from '../services/mail.service';

const router = Router();

router.get("/mail", cors(), async (req, res) => {
    await sendMail(res);
});

export default router;