import { Request, Response, NextFunction } from "express";
import { QueryMYsql, OkPacket } from "../connection/Mysql";
import { Usuario } from "../interfaces/usuario";

const criarUsuario = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { email, senha } = request.body as Usuario;

  Promise.all([
    QueryMYsql(`
    INSERT INTO admin.Usuario
    (USR_EMAIL, USR_SENHA)
    VALUES('${email}', '${senha}')
    `),
  ])
    .then((retorno) => {
      response.status(201).json({ mensagem: "Usuário Criado"});
    })
    .catch((erro) => {
      if (erro.code === "ER_DUP_ENTRY") {
        response.status(400).json({ error: "Usuário já existe" })
      } 
      else {
        response.status(500).json({ error: erro.code });
      }
    });
};

export default {
  criarUsuario: criarUsuario,
};
