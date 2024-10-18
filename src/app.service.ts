import { Injectable } from '@nestjs/common';
import { BinanceService } from './binance/binance.service';
import { CandleChartResult } from 'binance-api-node';

@Injectable()
export class AppService {
  constructor(private binanceService: BinanceService){}

  async getCandles(): Promise<CandleChartResult[]> {
    return this.binanceService.getCandles('ETHBTC');
  }
}
