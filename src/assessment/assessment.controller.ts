/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAssessmentDto } from './dto/assessment.dto';
import { AssessmentService } from './assessment.service';

@Controller('assessment')
export class AssessmentController {
  constructor(private assessmentService: AssessmentService) { }

  @Post('new-assessment')
  async create(@Body() assessment: CreateAssessmentDto) {
    const provaSaved = this.assessmentService.create(assessment);
    return provaSaved;
  }

  @Get('info-assessment/:id')
  async read(@Param('id') id: number) {
    const prova = await this.assessmentService.read(id);
    return prova;
  }
}
