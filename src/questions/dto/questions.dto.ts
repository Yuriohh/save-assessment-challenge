import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Assessment } from 'src/assessment/assessment.entity';

export class CreateQuestionsDto {
  @IsNumber()
  @IsNotEmpty()
  number_question: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  assessment: Assessment;
}
