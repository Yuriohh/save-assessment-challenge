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

  async create(newAssessment: CreateAssessmentDto): Promise<Assessment> {
    const assessment = new Assessment();
    await this.assessmentRepository.create(assessment);
    assessment.title = newAssessment.title;
    await this.assessmentRepository.save(assessment);
    return assessment;
  }

  async getAssessmentById(id: number): Promise<Assessment> {
    const assessment: Assessment = await this.assessmentRepository.findOne({ where: { id: id } });
    return assessment;
  }

  async getAssessmentBySlug(slug: string): Promise<Assessment> {
    const assessment: Assessment = await this.assessmentRepository.findOne({ where: { title: slug } });
    return assessment;
  }

  async read(id: number): Promise<Assessment[]> {
    const assessment: Assessment[] = await this.assessmentRepository.find({
      where: {
        id: id
      },
      relations: {
        questions: {
          alternatives: true,
        }
      }
    })

    return assessment;
  }
}
