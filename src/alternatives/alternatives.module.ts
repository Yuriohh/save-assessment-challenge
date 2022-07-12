/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assessment } from 'src/assessment/assessment.entity';
import { AssessmentService } from 'src/assessment/assessment.service';
import { Questions } from 'src/questions/questions.entity';
import { QuestionsService } from 'src/questions/questions.service';
import { AlternativesController } from './alternatives.controller';

import { Alternatives } from './alternatives.entity';
import { AlternativesService } from './alternatives.service';

@Module({
  imports: [TypeOrmModule.forFeature([Alternatives, Questions, Assessment])],
  controllers: [AlternativesController],
  providers: [AlternativesService, QuestionsService, AssessmentService],
})
export class AlternativesModule { }
