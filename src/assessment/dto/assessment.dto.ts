import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAssessmentDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
