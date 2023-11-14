/*import { Router } from "express";
import passport from 'passport-local'
import bcrypt from "bcrypt"
import { Session } from "express-session";


const router = Router();


//registrar el usuario en la base de datos
router.post('/signup', passport.authenticate('register',
  { failureRedirect: '/failregister' }), async (req, res) => {
    res.redirect('/login'); // en vez de redirigirlo a profile , lo redirigimos a login
  });

router.post('/login', passport.authenticate('login', { failureRedirect: '/failogin' }), async (req, res) => {
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

router.post('/recover', async (req, res) => {
  const { email, password } = req.body; // leemos los datos que llegan de formulario
  const user = await userModel.findOne({ email }).lean();

  if (!user) {
    return res.send("The email is not valid");
  }

  user.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await userModel.updateOne({ email }, user);
  res.redirect('/login');
});

router.get('/github', passport.authenticate('github', { scope: ['user:email'] })); // nos lleva a github

router.get('/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    //console.log()req.user);
    req.session.user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      age: req.user.age,
      cart: req.user.cart,
      role: req.user.role,
    }
    req.session.isLogged = true;

    res.redirect('/profile');
  }
);

export default router;


*/

















/*

import { Router } from "express";
import { userModel } from "../persistence/dao/models/userModel";


const router = Router();

router.post('/signup', async (req,res) => {
    const { first_name, last_name, email, age, password } = req.body;
    const userExits = await userModel.findOne({ email });

    if (userExits) {
        return res.send('Ya estas registrado');
    }

    const user = await userModel.create({
        first_name,
        last_name,
        email,
        age,
        password
});

req.session.first_name = first_name;
req.session.last_name = last_name;
req.session.email = email;
req.session.age = age;
req.session.isLogged = true;

res.redirect('/profile')
});

*/