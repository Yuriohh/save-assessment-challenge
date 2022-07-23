import { EntityRepository, Repository } from 'typeorm';
import { Alternatives } from './alternatives.entity';
import { CreateAlternativesDto } from './dto/alternatives.dto';

@EntityRepository(Alternatives)
export class AlternativesRepository extends Repository<Alternatives> {
  async saveAlternative(
    newAlternative: CreateAlternativesDto,
  ): Promise<Alternatives> {
    const alternative = await this.save(newAlternative);
    return alternative;
  }
}
