/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assessment } from 'src/assessment/assessment.entity';
import { AssessmentService } from 'src/assessment/assessment.service';
import { CreateQuestionsDto } from './dto/questions.dto';
import { Questions } from './questions.entity';
import { QuesntionsRepository } from './questions.repository';

@Injectable()
export class QuestionsService {

  constructor(
    @InjectRepository(QuesntionsRepository)
    private readonly questionsRepository: QuesntionsRepository,
    private readonly assessmentService: AssessmentService,
  ) { }

  async saveQuestion(slug: string, newQuestion: CreateQuestionsDto): Promise<Questions> {
    const assessment: Assessment = await this.assessmentService.getAssessmentBySlug(slug);

    newQuestion.assessment = assessment;

    const question = await this.questionsRepository.saveQuestion(newQuestion);
    return question;
  }

  async getQuestionById(questionId: number): Promise<Questions> {
    return this.questionsRepository.getQuestionById(questionId);
  }
}
