import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Candidate } from "./Candidate";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @ManyToMany(() => Candidate, (candidate) => candidate.skills)
  candidates!: Candidate[];
}
