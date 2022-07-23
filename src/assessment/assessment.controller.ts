/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateAssessmentDto } from './dto/assessment.dto';
import { AssessmentService } from './assessment.service';
import { Assessment } from './assessment.entity';

@Controller('assessment')
export class AssessmentController {
  constructor(private assessmentService: AssessmentService) { }

  @Post('new-assessment')
  async createNewAssessment(@Body() assessment: CreateAssessmentDto): Promise<Assessment> {
    return this.assessmentService.createAssessment(assessment);
  }

  @Get('info-assessment/:id')
  async readAssessment(@Param('id', ParseIntPipe) id: number): Promise<Assessment> {
    return this.assessmentService.getAssessment(id);
  }
}
