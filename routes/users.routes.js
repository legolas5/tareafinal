const { Router} = require('express');
// controlador de usuarios
const {viewUsers, usuariosGet, usuariosPut, usuariosPatch, usuariosDelete, usuariosPost} = require('../controllers/users.controller');// me indicado que el controlador se encuentra en el directorio controllers

const routerUser = Router();
routerUser.get('/', viewUsers);
routerUser.post('/', usuariosPost);
routerUser.get('/:id', usuariosGet);
routerUser.put('/:id', usuariosPut);
routerUser.patch('/:id', usuariosPatch);
routerUser.delete('/:id', usuariosDelete);



module.exports = routerUser;