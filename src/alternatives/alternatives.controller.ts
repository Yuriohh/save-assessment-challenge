/* eslint-disable prettier/prettier */
import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AlternativesService } from './alternatives.service';
import { CreateAlternativesDto } from './dto/alternatives.dto';

@Controller('alternatives')
export class AlternativesController {
  constructor(
    private readonly alternativesService: AlternativesService,
  ) { }

  @Post('new-alternatives/:question_id')
  async create(@Param('question_id', ParseIntPipe) questionId: number, @Body() newAlternatives: CreateAlternativesDto) {
    const question = questionId;
    const alternatives = await this.alternativesService.create(question, newAlternatives);
    return alternatives;
  }
}
