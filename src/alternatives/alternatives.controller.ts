/* eslint-disable prettier/prettier */
import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Alternatives } from './alternatives.entity';
import { AlternativesService } from './alternatives.service';
import { CreateAlternativesDto } from './dto/alternatives.dto';

@Controller('alternatives')
export class AlternativesController {
  constructor(
    private readonly alternativesService: AlternativesService,
  ) { }

  @Post('new-alternatives/:question_id')
  async createNewAlternative(@Param('question_id', ParseIntPipe) questionId: number, @Body() newAlternatives: CreateAlternativesDto): Promise<Alternatives> {
    return this.alternativesService.createAlternative(questionId, newAlternatives);
  }
}
