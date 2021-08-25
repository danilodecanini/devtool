import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("developers")
class Developer {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  sexo: number;

  @Column()
  hobby: string;

  @Column()
  idade: number;

  @Column({
    type: "date",
  })
  datanascimento: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Developer };
