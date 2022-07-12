/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssessmentService } from 'src/assessment/assessment.service';
import { Repository } from 'typeorm';
import { CreateQuestionsDto } from './dto/questions.dto';
import { Questions } from './questions.entity';

@Injectable()
export class QuestionsService {

  constructor(@InjectRepository(Questions)
  private readonly questionsRepository: Repository<Questions>,
    private readonly assessmentService: AssessmentService,
  ) { }

  async create(slug: string, newQuestions: CreateQuestionsDto) {
    const questions = new Questions();
    const assessment = await this.assessmentService.getProvaByName(slug);

    await this.questionsRepository.create(questions);
    questions.number_question = newQuestions.number_question;
    questions.description = newQuestions.description;
    questions.assessment = assessment;
    await this.questionsRepository.save(questions);

    return questions;
  }

  async getQuestionById(questionId: number) {
    const question = await this.questionsRepository.findOne({ where: { id: questionId } });
    return question;
  }
}
