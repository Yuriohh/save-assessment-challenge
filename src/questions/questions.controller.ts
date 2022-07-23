/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateQuestionsDto } from './dto/questions.dto';
import { Questions } from './questions.entity';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) { }

  @Post('new-questions/:slug')
  async createNewQuestion(@Param('slug') slug: string, @Body() createQuestionsDto: CreateQuestionsDto): Promise<Questions> {
    return await this.questionsService.saveQuestion(slug, createQuestionsDto);
  }
}
