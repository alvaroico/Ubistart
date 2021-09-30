import express from "express";
const app = express();
app.use(express.json());

import homeRota from "./Routes/home";
import { JWTDecode } from "./Middleware/JWTDecode";

app.use("/",  JWTDecode('alvaroico'), homeRota);

app.listen(8822, () => {
  console.log(`🙌😎 Servidor HTTP rodando porta: ${8822} 👌`);
});
