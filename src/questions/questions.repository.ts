import { EntityRepository, Repository } from 'typeorm';
import { CreateQuestionsDto } from './dto/questions.dto';
import { Questions } from './questions.entity';

@EntityRepository(Questions)
export class QuesntionsRepository extends Repository<Questions> {
  async saveQuestion(newQuestion: CreateQuestionsDto): Promise<Questions> {
    const question = await this.save(newQuestion);
    return question;
  }

  async getQuestionById(questionId: number): Promise<Questions> {
    return this.findOne({
      where: {
        id: questionId,
      },
    });
  }
}
