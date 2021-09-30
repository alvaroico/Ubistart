import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

router.get(
  "/",
  function (request: Request, response: Response, next: NextFunction) {
    response.send("Rota Login");
  }
);
router.post(
  "/criar",
  function (request: Request, response: Response, next: NextFunction) {
    response.send(request.body);
  }
);

export default router;
