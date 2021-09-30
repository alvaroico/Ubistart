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
    const res = await supertest(app).post("/login/criar").set('Accept', 'application/json').send({Mensagem: "Usuario Criado"});    
    expect(res.status).toEqual(200);
    expect(res.text).toBe(JSON.stringify({Mensagem: "Usuario Criado"}));
  });
});