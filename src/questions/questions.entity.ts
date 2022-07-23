import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Alternatives } from '../alternatives/alternatives.entity';
import { Assessment } from '../assessment/assessment.entity';

@Entity('questions')
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number_question: number;

  @Column('text')
  description: string;

  @ManyToOne(() => Assessment, (assessment) => assessment.questions)
  assessment: Assessment;

  @OneToMany(() => Alternatives, (alternatives) => alternatives.question)
  alternatives: Alternatives[];
}
