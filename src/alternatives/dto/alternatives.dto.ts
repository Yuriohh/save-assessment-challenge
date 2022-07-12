import { IsBoolean, IsString } from 'class-validator';
import { Questions } from 'src/questions/questions.entity';

export class CreateAlternativesDto {
  @IsString()
  text: string;

  @IsBoolean()
  right_alternative: boolean;

  question: Questions;
}
