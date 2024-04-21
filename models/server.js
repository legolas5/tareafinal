const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.userPath = '/api/users';// ruta de users  
        this.loginPath = '/api/login';// ruta de login 
        this.middlewares();
        this.routes();        
    }
    middlewares() {
        this.app.use(cors()); //le decimos que vamos a usar cors
        this.app.use(express.json());// le decimos que vamos a usar json para las peticiones post y put en express 
    } 
    routes() {
        
        this.app.use(this.userPath, require('../routes/users.routes')); // ruta de users
        this.app.use(this.loginPath, require('../routes/login.routes')); // ruta de login         
        
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port );
        });
    }  
}

module.exports = Server;