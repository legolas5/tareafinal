const {Router} = require('express');
const {LoginGet, LoginPost } = require('../controllers/login.controller');


const roterLogin = Router();

roterLogin.get('/', LoginGet);
roterLogin.post('/', LoginPost);
roterLogin.post('/login', LoginPost);
roterLogin.get('/login', LoginGet);

module.exports = roterLogin;


