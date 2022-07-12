/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssessmentDto } from './dto/assessment.dto';
import { Assessment } from './assessment.entity';

@Injectable()
export class AssessmentService {
  constructor(
    @InjectRepository(Assessment)
    private readonly assessmentRepository: Repository<Assessment>,
  ) { }

  async create(newAssessment: CreateAssessmentDto) {
    const assessment = new Assessment();
    await this.assessmentRepository.create(assessment);
    assessment.title = newAssessment.title;
    await this.assessmentRepository.save(assessment);
    return assessment;
  }

  async getProvaById(id: number) {
    const prova = await this.assessmentRepository.findOne({ where: { id: id } });
    return prova;
  }

  async getProvaByName(slug: string) {
    const prova = await this.assessmentRepository.findOne({ where: { title: slug } });
    return prova;
  }

  async read(id: number) {
    const prova = await this.assessmentRepository.find({
      where: {
        id: id
      },
      relations: {
        questions: {
          alternatives: true,
        }
      }
    })

    return prova;
  }
}
