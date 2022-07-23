/* eslint-disable prettier/prettier */
import { Questions } from '../questions/questions.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('assessments')
export class Assessment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Questions, questions => questions.assessment)
  questions: Questions[];
}
