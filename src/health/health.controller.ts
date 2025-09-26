import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get('healthz')
  healthz() {
    return { status: 'ok' };
  }

  @Get('readyz')
  @HttpCode(200)
  readyz() {
    return {
      status: 'ok',
      checks: {
        // db: 'skipped',
        // redis: 'skipped',
      },
    };
  }
}
