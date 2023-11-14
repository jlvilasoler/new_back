import { Router } from 'express';
import cors from 'cors';
import { getCartController, getProductController, getChatController, createChatController } from '../core';


const router = Router();


router.get('/login', (req, res) => {
    res.render("login", {});
});

router.get('/signup', (req, res) => {
    res.render("signup", {});
});

router.get('/logout', (req, res) => {
    res.redirect('/login');
});

// Vista profile
router.get("/profile", cors(), async (req, res) => {
    res.render("profile", {});
});

// Vista profile 2
router.get("/", cors(), async (req, res) => {
    res.render("profile", {});
});

router.get('/recover', (req, res) => {
    res.render('recover')
})



// Vista productos
router.get("/products", cors(), async (req, res) => {
    const { data } = await getProductController();
    res.render("products", { products: data });
});

// Vista chat
router.get("/chat", cors(), async (req, res) => {
    const { data } = await getChatController();
    res.render("chat", { chats: data });
});


// Vista chat
router.get("/chat", cors(), async (req, res) => {
    const { data } = await createChatController(req);
    res.render("chat", { chats: data });
});

// Vista cart
router.get("/cart", cors(), async (req, res) => {
    const { data } = await getCartController();
    res.render("cart", { cart: data });
});






export default router;