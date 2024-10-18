import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CandleChartResult } from 'binance-api-node';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/candles')
  getCandles(): Promise<CandleChartResult[]> {
    return this.appService.getCandles();
  }
}
