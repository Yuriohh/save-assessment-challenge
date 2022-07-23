/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAssessmentDto } from './dto/assessment.dto';
import { Assessment } from './assessment.entity';
import { AssessmentRepository } from './assessment.repository';

@Injectable()
export class AssessmentService {
  constructor(
    @InjectRepository(AssessmentRepository)
    private readonly assessmentRepository: AssessmentRepository,
  ) { }

  async createAssessment(newAssessment: CreateAssessmentDto): Promise<Assessment> {
    return this.assessmentRepository.save(newAssessment);
  }

  async getAssessmentById(id: number): Promise<Assessment> {
    return this.assessmentRepository.findOne({ where: { id: id } });
  }

  async getAssessmentBySlug(slug: string): Promise<Assessment> {
    return this.assessmentRepository.getAssessmentBySlug(slug);
  }

  async getAssessment(id: number): Promise<Assessment> {
    return this.assessmentRepository.getAssessment(id);
  }
}
