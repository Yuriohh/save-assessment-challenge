/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assessment } from 'src/assessment/assessment.entity';
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

  async create(slug: string, newQuestions: CreateQuestionsDto): Promise<Questions> {
    const questions = new Questions();
    const assessment: Assessment = await this.assessmentService.getAssessmentBySlug(slug);

    await this.questionsRepository.create(questions);
    questions.number_question = newQuestions.number_question;
    questions.description = newQuestions.description;
    questions.assessment = assessment;
    await this.questionsRepository.save(questions);

    return questions;
  }

  async getQuestionById(questionId: number): Promise<Questions> {
    const question: Questions = await this.questionsRepository.findOne({ where: { id: questionId } });
    return question;
  }
}
