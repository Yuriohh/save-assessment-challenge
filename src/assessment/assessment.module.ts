/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from 'src/questions/questions.entity';
import { QuestionsService } from 'src/questions/questions.service';
import { AssessmentController } from './assessment.controller';
import { Assessment } from './assessment.entity';
import { AssessmentService } from './assessment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Assessment, Questions])],
  controllers: [AssessmentController],
  providers: [AssessmentService, QuestionsService],
})
export class AssessmentModule { }
