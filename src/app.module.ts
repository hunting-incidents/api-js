import { Module } from '@nestjs/common';
import { IncidentsModule } from './incidents/incidents.module';
import { ConfigModule } from '@nestjs/config';
import apiConfig from './config/api.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [apiConfig],
    }),
    IncidentsModule,
  ],
})
export class AppModule {}
