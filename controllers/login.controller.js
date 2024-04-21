const{ response, request} = require('express');
const validator = require('validator');


const LoginGetprueba = async (req, res = response) => {
    res.status(200).json({
        'msg': 'exito'
    });
}
//crear login
const LoginPost = (req, res = response) => {

    const { correo,contraseña } = req.body;
        res.status(201).json({
            msg: 'post API - loginPost',
            correo, 
            contraseña,            
        });           
    
} 
function validarCorreo(correo) {
    //const validator = require('validator');
    const correoOk = validator.isEmail(correo);    
    return correoOk.test(correo);
}
function validarContrasenia(contraseña) {
    const contraseñaOk = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    return contraseñaOk.test(contraseña);
}
const validarCredenciales = (correo,contraseña) => {
    return (validarCorreo(correo) && validarContrasenia(contraseña));
}

const LoginGet = (req, res = response) => {
    const { correo,contraseña } = req.body;

    if (validarCredenciales(correo,contraseña)) {
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
        });
    } else {
        res.status(400).json({
            message: 'Credenciales incorrectas',
        });    
    }
}

module.exports = {    
    LoginPost,      
    LoginGetprueba,
    LoginGet,
    validarCredenciales,
    validarContrasenia,
    validarCorreo ,
    

}
