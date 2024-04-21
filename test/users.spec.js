
const request = require('supertest');
const Server = require('../models/server');
const server = new Server();

const { response } = require('express');

const token = "12345"
const datosprueba = [
    {
    id: 2,
    nombre:"Pepito", 
    edad:"28",
    telefono:"123456789",
    direccion:"Calle 123 # 10-10",
    },{

    }
]
const userId = 3;

describe('GET /api/users', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(server.app).get('/api/users').send();        
        expect(response.statusCode).toBe(200); 

    });
    
    test('respuesta json', async () => {
        const response = await request(server.app)
            .get('/api/users')
            .set('Accept', 'application/json') 
            .send();
    
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });

    test('obtener usuarios', async () => {
        return request(server.app)
        .get('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(({body})=>{
            console.log(body)
        })
    })

   
    // obtener numero de usuarios
    test('obtener numero de usuarios', async () => {
        return request(server.app)
        .get('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(({body})=>{
            console.log(body.length)
        })
    })    
})


describe("post /api/users", () => {

    test("Crear usuario", async () => {
        return request(server.app)
        .post('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombre=body.nombre;
            
        })
    });

    test("Se puede crear usuario", async () => {
        return request(server.app)
        .post('/api/users')
        .send(datosprueba)
        .expect(201)
    });
})


describe("put /api/users/:id", () => {

    test("Actualizacion usuario", async () => {
        return request(server.app)
        .put(`/api/users/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.id)
        })
    })
    //obtener el ultimo usuario actualizado

})

describe("Delete /api/users/:id", () => {

    test("Eliminacion usuario", async () => {
        return request(server.app)
        .delete(`/api/users/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
    
    test("Se puede eliminar usuario", async () => {
        return request(server.app)
        .delete(`/api/users/${userId}`)
        .expect(410)        
    })
    // obtener usuarios eliminados
    test ("obtener usuarios eliminados", async () => {
        return request(server.app)
        .get('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(({body })=>{
            console.log(body.deletedCount, 'usuarios eliminados', userId)//numero de usuarios eliminados
        })
    })
})
// obtener el id del usuario
describe("get /api/users/:id", () => {

    test("Obtener usuario por id", async () => {
        return request(server.app)  
        .get(`/api/users/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect('Content-Type', /json/)
        .expect(200)
    })

    test("Se puede obtener usuario por id", async () => {
        return request(server.app)  
        .get(`/api/users/${userId}`)
        .expect(200)    
    })
})



