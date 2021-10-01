import supertest  from 'supertest'
import app from "./app";

describe("Teste de Rotas Home", () => {
  it('Testando Rota Login (route: GET /login)', async () => {
    const res = await supertest(app).get("/login");    
    expect(res.status).toEqual(200);
    expect(res.text).toBe("Rota Login");
  });
});

describe("Teste Criar Usuario", () => {
  it('Testando Criacao do Usuario (route: GET /login/criar)', async () => {
    const usuario = {
      email: `alvaro.r.p${Math.floor(Math.random() * 100)}@hotmail.com`, 
      senha: 'teste'
    }    
    const Criado = await supertest(app).post("/login/criar").set('Accept', 'application/json').send(usuario);    
    // console.log(Criado);
    
    expect(Criado.status).toEqual(201) 
    expect(Criado.text).toBe(JSON.stringify({mensagem: "Usuário Criado"}))


    const Duplicado = await supertest(app).post("/login/criar").set('Accept', 'application/json').send(usuario);    
    expect(Duplicado.status).toEqual(400) 
    expect(Duplicado.text).toBe(JSON.stringify({error:"Usuário já existe"}))


    const Erro = await supertest(app).post("/login/criar").set('Accept', 'application/json').send({email: "alvaro.r.p@hotmail.comalvaro.r.p@hotmail.comalvaro.r.p@hotmail.comalvaro.r.p@hotmail.comalvaro.r.p@hotmail.comalvaro.r.p@hotmail.com", senha: 'teste'});    
    expect(Erro.status).toEqual(500) 

  });
})