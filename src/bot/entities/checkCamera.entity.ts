import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { TABLE } from "../constants/table";

@Entity(TABLE.CHECK_CAMERA)
export class CheckCamera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true })
  channelId: string;

  @Column({ nullable: true })
  enableCamera: boolean;

  @Column({ type: "decimal", nullable: true })
  createdTimestamp: number;
}
