import express, { Request, Response, NextFunction } from "express";
import criarUsuario from '../Controllers/login'
const router = express.Router();

router.get(
  "/",
  function (request: Request, response: Response, next: NextFunction) {
    response.send("Rota Login");
  }
);
router.post("/criar",criarUsuario.criarUsuario);

export default router;
