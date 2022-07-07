import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvaModule } from './prova/prova.module';

@Module({
  imports: [ProvaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
