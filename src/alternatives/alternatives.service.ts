/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionsService } from 'src/questions/questions.service';
import { Repository } from 'typeorm';
import { Alternatives } from './alternatives.entity';
import { CreateAlternativesDto } from './dto/alternatives.dto';

@Injectable()
export class AlternativesService {
  constructor(
    @InjectRepository(Alternatives)
    private readonly alternativesRepository: Repository<Alternatives>,
    private readonly questionsService: QuestionsService,
  ) { }

  async create(questionNumber: number, newAlternatives: CreateAlternativesDto) {
    const alternative = new Alternatives();
    const question = await this.questionsService.getQuestionById(questionNumber);

    await this.alternativesRepository.create(newAlternatives);
    alternative.text = newAlternatives.text;
    alternative.right_alternative = newAlternatives.right_alternative;
    alternative.question = question;
    await this.alternativesRepository.save(alternative);

    return alternative;
  }
}
