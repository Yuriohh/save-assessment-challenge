/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsModule } from 'src/questions/questions.module';
import { AlternativesController } from './alternatives.controller';
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
