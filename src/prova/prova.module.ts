/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProvaController } from './prova.controller';
import { ProvaService } from './prova.service';

@Module({
  controllers: [ProvaController],
  providers: [ProvaService],
})
export class ProvaModule { }
