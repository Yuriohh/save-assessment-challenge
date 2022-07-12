/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAssessmentDto } from './dto/assessment.dto';
import { AssessmentService } from './assessment.service';
import { Assessment } from './assessment.entity';

@Controller('assessment')
export class AssessmentController {
  constructor(private assessmentService: AssessmentService) { }

  @Post('new-assessment')
  async create(@Body() assessment: CreateAssessmentDto): Promise<Assessment> {
    const assessmentSaved: Promise<Assessment> = this.assessmentService.create(assessment);
    return assessmentSaved;
  }

  @Get('info-assessment/:id')
  async read(@Param('id') id: number): Promise<Assessment[]> {
    const assessment: Assessment[] = await this.assessmentService.read(id);
    return assessment;
  }
}
