const request = require('supertest'); 
const Server = require('../models/server');
const server = new Server();
const validator = require('validator');


describe("GET /api/login", () => {
    
    test("login respuesta 200", async () => {
        return request(server.app)
        const response = await request(server.app).get('/api/login').send();
        expect(response.statusCode).toBe(200);        
    })   
    test ("login respuesta json", async () => {
        const response = await request(server.app)
            .post('/api/login')
            .set('Accept', 'application/json') 
            .send();
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));         
    }) 
    test('respuesta json', async () => {
      const response = await request(server.app)
          .get('/api/users')
          .set('Accept', 'application/json') 
          .send();
  
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
  });
})


describe("POST /api/login", () => {

    test("crear contrasenia, correo", async () => {
        return request(server.app)
        .post('/api/login')
        .send({
            correo:"pepitoperez@gmail.com",
            contraseña:"pasword123"
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .then(({body})=>{
            console.log(body)            
        })
    })    
    
    test('Contraseña es una combinación de letras y números', async () => {        
        const contraseña = 'Pas123';
        const contraseñaOk = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/;
        
        expect(contraseñaOk.test(contraseña)).toBe(true)       
    });
    
    test('Contraseña tiene al menos 8 caracteres', () => {         
        const contraseña = 'fail12'; 
        const contraseñaOk = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
      
        //expect(contraseñaOk.test(contraseña)).toBe(true)   
         expect(contraseñaOk.test(contraseña)).toBe(false)     
    });  
    
    test('correo es un correo valido', () => {        
        const correo = 'antaresjohn@gmail.com';//antaresjohn@gmail.com
        expect(validator.isEmail(correo)).toBe(true)

    });    



})



