/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from 'src/questions/questions.entity';
import { QuestionsService } from 'src/questions/questions.service';
import { Alternatives } from './alternatives.entity';
import { AlternativesRepository } from './alternatives.repository';
import { CreateAlternativesDto } from './dto/alternatives.dto';

@Injectable()
export class AlternativesService {
  constructor(
    @InjectRepository(AlternativesRepository)
    private readonly alternativesRepository: AlternativesRepository,
    private readonly questionsService: QuestionsService,
  ) { }

  async createAlternative(questionNumber: number, newAlternatives: CreateAlternativesDto): Promise<Alternatives> {
    const question: Questions = await this.questionsService.getQuestionById(questionNumber);

    newAlternatives.question = question;
    const alternative = await this.alternativesRepository.saveAlternative(newAlternatives);

    return alternative;
  }
}
