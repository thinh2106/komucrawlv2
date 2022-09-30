import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { TABLE } from "../constants/table";
import { Channel } from "./channel.entity";
import { User } from "./user.entity";

@Entity(TABLE.MSG)
export class Msg {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "author" })
  author: User;

  @ManyToOne(() => Channel)
  @JoinColumn({ name: "channelId" })
  channelId: Channel;

  @Column({ type: "text" })
  guildId: string;

  @Column({ nullable: true, type: "boolean" })
  deleted: boolean;

  @Column({ type: "decimal", nullable: true })
  createdTimestamp: number;

  @Column({ type: "text" })
  type: string;

  @Column({ type: "boolean" })
  system: boolean;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "boolean" })
  pinned: boolean;

  @Column({ type: "boolean" })
  tts: boolean;

  @Column({ type: "text", nullable: true })
  nonce: string;

  @Column("text", { array: true, nullable: true })
  embeds: string[];

  @Column("text", { array: true, nullable: true })
  components: string[];

  @Column("text", { array: true, nullable: true })
  attachments: string[];

  @Column("text", { array: true, nullable: true })
  stickers: string[];

  @Column({ type: "decimal", nullable: true })
  editedTimestamp: number;

  @Column("text", { array: true, nullable: true })
  reactions: string[];

  @Column("text", { array: true, nullable: true })
  mentions: string[];

  @Column({ nullable: true, type: "text" })
  webhookId: string;

  @Column({ nullable: true, type: "text" })
  groupActivityApplication: string;

  @Column({ nullable: true, type: "text" })
  applicationId: string;

  @Column({ nullable: true, type: "text" })
  activity: string;

  @Column({ nullable: true, type: "decimal" })
  flags: number;

  @Column({ nullable: true, type: "text" })
  reference: string;

  @Column({ nullable: true, type: "text" })
  interaction: string;
}