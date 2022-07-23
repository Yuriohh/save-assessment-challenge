/* eslint-disable prettier/prettier */
import { QuestionsModule } from './questions/questions.module';
import { AlternativesModule } from './alternatives/alternatives.module';
import { AssessmentModule } from './assessment/assessment.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['/src/**/*.entity{.ts,.js'],
      autoLoadEntities: true,
      synchronize: false,
      migrationsTableName: 'migrations',
      migrations: ['/src/migrations/**/*{.ts,.js}'],
    }),
    AssessmentModule,
    QuestionsModule,
    AlternativesModule
  ],
})
export class AppModule { }