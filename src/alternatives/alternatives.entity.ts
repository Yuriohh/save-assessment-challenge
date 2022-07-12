import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Questions } from '../questions/questions.entity';

@Entity()
export class Alternatives {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Column()
  right_alternative: boolean;

  @ManyToOne(() => Questions, (questions) => questions.alternatives)
  question: Questions;
}
