import express from 'express'
import mongoose from "mongoose";
import {registrationValidation} from './validation/registration.js'
import checkUser from './utils/checkUser.js'
import {register, login, getMe} from './controllers/userControllers.js'

export const appServer = express();
appServer.use(express.json());

mongoose.connect('mongodb+srv://nikitavegas95:7412@cluster0.kyp5gki.mongodb.net/user?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

appServer.post('/login', login)
appServer.post('/registration', registrationValidation, register)
appServer.get('/me', checkUser, getMe)
appServer.listen(5173, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});

