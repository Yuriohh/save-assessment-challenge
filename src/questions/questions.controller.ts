/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateQuestionsDto } from './dto/questions.dto';
import { Questions } from './questions.entity';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) { }

  @Post('new-questions/:slug')
  async create(@Param('slug') slug: string, @Body() createQuestionsDto: CreateQuestionsDto): Promise<Questions> {
    const newQuestions: Questions = await this.questionsService.create(slug, createQuestionsDto);
    return newQuestions;
  }
}
