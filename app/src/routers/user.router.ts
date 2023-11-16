import { Router } from "express";
import bcrypt from "bcrypt"
import passport from "passport";




const router = Router();


//registrar el usuario en la base de datos
router.post('/signup', passport.authenticate('register',
  { failureRedirect: '/failregister' }), async (req, res) => {
    res.redirect('/login'); // en vez de redirigirlo a profile , lo redirigimos a login
  });


  
  router.post('/login', passport.authenticate('login', { failureRedirect: '/failogin' }), async (req: any, res) => {
    if (!req.user) {
      res.status(400).send();
    }
  
    req.session.user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      age: req.user.age,
      cart: req.user.cart,
      role: req.user.role,
  
    };
    res.redirect('/profile')});




  export default router;