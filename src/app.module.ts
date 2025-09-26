import { Module } from '@nestjs/common';
import { IncidentsModule } from './incidents/incidents.module';
import { ConfigModule } from '@nestjs/config';
import apiConfig from './config/api.config';
import { LoggerModule } from 'nestjs-pino/LoggerModule';
import { HealthModule } from './health/health.module';

const isDev = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [apiConfig],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: isDev
          ? {
              target: 'pino-pretty',
              options: {
                colorize: true,
                translateTime: 'SYS:standard',
                singleLine: false,
              },
            }
          : undefined, // en prod -> JSON brut
        autoLogging: true,
        redact: {
          paths: ['req.headers.authorization', 'req.headers.cookie'],
          censor: '[redacted]',
        },
      },
    }),
    HealthModule,
    IncidentsModule,
  ],
})
export class AppModule {}
