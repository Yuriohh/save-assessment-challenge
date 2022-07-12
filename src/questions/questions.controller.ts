/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateQuestionsDto } from './dto/questions.dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) { }

  @Post('new-questions/:slug')
  async create(@Param('slug') slug: string, @Body() createQuestionsDto: CreateQuestionsDto) {
    const newQuestions = await this.questionsService.create(slug, createQuestionsDto);
    return newQuestions;
  }
}
