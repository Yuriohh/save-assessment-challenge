/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssessmentService } from 'src/assessment/assessment.service';
import { Questions } from 'src/questions/questions.entity';
import { QuestionsModule } from 'src/questions/questions.module';
import { QuestionsService } from 'src/questions/questions.service';
import { AlternativesController } from './alternatives.controller';

import { Alternatives } from './alternatives.entity';
import { AlternativesRepository } from './alternatives.repository';
import { AlternativesService } from './alternatives.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlternativesRepository]),
    QuestionsModule
  ],
  controllers: [AlternativesController],
  providers: [AlternativesService],
  exports: [AlternativesService]
})
export class AlternativesModule { }
