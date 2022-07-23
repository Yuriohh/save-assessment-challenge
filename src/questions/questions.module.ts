/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssessmentModule } from 'src/assessment/assessment.module';
import { QuestionsController } from './questions.controller';
import { QuesntionsRepository } from './questions.repository';
import { QuestionsService } from './questions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuesntionsRepository]),
    AssessmentModule
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService],
  exports: [QuestionsService]
})
export class QuestionsModule { }
