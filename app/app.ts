import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import socketChatService from './src/sockets/chat';
import sethandlebars from './src/middlewares/hbs';
import mail from "./src/routers/mail.router";
import cart from "./src/routers/cart.router";
import viewsRouter from './src/routers/views.router';
import product from './src/routers/product.router';
import chat from './src/routers/chat.router';
import ticket from './src/routers/ticket.router';


const app = express();
const router = express.Router();
sethandlebars(app);

app.use(express.urlencoded({ extended: true, limit: "1500gb" }));
app.use(express.json({ limit: "1500gb" }));
app.use(cors());
app.use(morgan("tiny"));
app.use(express.static('./app/src/public'));

app.use(express.static('public', { 'extensions': ['html', 'htm'] }));
app.use(express.static('public', { 'extensions': ['js'] }));


app.use('/api', viewsRouter);
app.use('/api', mail);
app.use('/api', cart);
app.use('/api', chat);

app.use('/api', product);
app.use('/api', ticket);


app.use('/', viewsRouter);
app.use('/', mail);
app.use('/', cart);
app.use('/', chat);



const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`SERVIDOR CONECTADO EN PUERTO: ${PORT}`);
});
socketChatService(httpServer);


