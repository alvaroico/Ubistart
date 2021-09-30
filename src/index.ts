import app from "./app";

const port = parseInt(process.env.APP_PORT as string) || 8822;
app.listen(port, () => {
  console.log(`🙌😎 Servidor HTTP rodando porta: ${port} 👌`);
});
