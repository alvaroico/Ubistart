import express from "express";
const app = express();
app.use(express.json());

import homeRota from "./Routes/home";
import loginRota from "./Routes/login";
import { JWTDecode } from "./Middleware/JWTDecode";

app.use("/login", loginRota);
app.use("/", JWTDecode("alvaroico"), homeRota);

export default app