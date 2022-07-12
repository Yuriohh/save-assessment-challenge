/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assessment } from 'src/assessment/assessment.entity';
import { AssessmentService } from 'src/assessment/assessment.service';
import { QuestionsController } from './questions.controller';
import { Questions } from './questions.entity';
import { QuestionsService } from './questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Questions, Assessment])],
  controllers: [QuestionsController],
  providers: [QuestionsService, AssessmentService],
})
export class QuestionsModule { }
