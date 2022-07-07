import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../data-source';
import { ApiRequestLogEntity } from './entities/api-request-log.entity';
import { DataSource } from 'typeorm';
import { HttpModule } from '@nestjs/axios';
import { CurrencyController } from './controllers/currency.controller';
import { CurrencyService } from './services/currency.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([ApiRequestLogEntity]),
    HttpModule,
  ],
  controllers: [AppController, CurrencyController],
  providers: [AppService, CurrencyService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
