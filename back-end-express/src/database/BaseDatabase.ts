import { knex } from "knex";

export abstract class BaseDatabase {
  protected static connection = knex({
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "scorpions13",
      database: "shoppe-teste",
    },
  });
}