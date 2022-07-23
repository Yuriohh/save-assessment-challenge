/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Assessment } from './assessment.entity';

@EntityRepository(Assessment)
export class AssessmentRepository extends Repository<Assessment> {
  async getAssessmentById(id: number): Promise<Assessment> {
    return this.findOne({
      where: {
        id: id
      }
    });
  }

  async getAssessmentBySlug(slug: string): Promise<Assessment> {
    return this.findOne({
      where: {
        title: slug
      }
    });
  }

  getAssessment(id: number): Promise<Assessment> {
    return this.findOne({
      where: {
        id: id,
      },
      relations: ['questions', 'questions.alternatives']
    })
  }
}
