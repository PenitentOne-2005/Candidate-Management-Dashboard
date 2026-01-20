import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { StatusType } from "../types";
import { Skill } from "./Skill";

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  position!: string;

  @Column({
    type: "enum",
    enum: ["active", "interview", "rejected"],
    default: "active",
  })
  status!: StatusType;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column({ type: "text" })
  description!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToMany(() => Skill, (skill) => skill.candidates, { cascade: true })
  @JoinTable({
    name: "candidate_skill",
    joinColumn: { name: "candidateId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "skillId", referencedColumnName: "id" },
  })
  skills!: Skill[];
}
