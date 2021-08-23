import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDevelopers1629758396638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "developers",
        columns: [
          {
            name: "id",
            type: "char",
            length: "36",
            isPrimary: true,
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "idade",
            type: "integer",
          },
          {
            name: "sexo",
            type: "char",
          },
          {
            name: "hobby",
            type: "varchar",
          },
          {
            name: "datanascimento",
            type: "date",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("developers");
  }
}
