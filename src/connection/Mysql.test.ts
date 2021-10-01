import {QueryMYsql,OkPacket} from "./Mysql";

describe("Testando consulta de usuario", () => {
  it('Select para teste de usuario', async () => {
    const res = await QueryMYsql(`SELECT USR_ID FROM admin.Usuario WHERE USR_ID = 89`) as [{USR_ID:number}]
    expect(res[0].USR_ID).toBe(89);
  });
});
