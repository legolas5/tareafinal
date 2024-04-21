const {response, request} = require('express');


const viewUsers = async (req = request, res = response) => {
    res.json({
        'msg': 'exito'
    });    
}

const usuariosGet = (req = request, res = response) => {

    //Ejemplo de desestructuración de variables por parte del query
    const { id, nombre = 'No name', apikey, page = 1, limit } = req.query;

    //ejemplo de respuesta tipo json
    res.json({
        msg: 'get API - controlador',
        id,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPost = (req, res = response) => {

    //ejemplo de desestructuración de datos del body
    const { nombre, edad } = req.body;

    //ejemplo de respuesta del body
    res.status(201).json({
        msg: 'post API - usuariosPost',
        nombre, 
        edad,
    });
}

const usuariosPut = (req, res = response) => {

    //ejemplo de desestructuracion de datos que viajan por los params
    const { id } = req.params;

    //ejemplo de respuesta del body
    res.status(201).json({
        msg: 'put API - usuariosPut',
        id,
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}
const usuariosDelete = (req, res = response) => {
    res.status(410).json({
        msg: 'delete API - usuariosDelete'
    });
}
   

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    viewUsers
}

