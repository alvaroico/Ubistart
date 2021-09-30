import { InsertMYsql } from "./connection/Mysql";

const job = async () => {
  await InsertMYsql(``)
    .then(async (resultado) => {
      // console.log(resultado);
      console.info("Tabela no MySql criada com sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });

  process.exit(1);
};
job();
