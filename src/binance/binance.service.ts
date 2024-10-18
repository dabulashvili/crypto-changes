import { Inject, Injectable } from '@nestjs/common';
import { Binance, CandleChartResult } from 'binance-api-node';

@Injectable()
export class BinanceService {
  constructor(@Inject('BINANCE_API') private client: Binance) {}

  async getCandles(symbol: string): Promise<CandleChartResult[]> {
    return await this.client.candles({ symbol: 'ETHBTC', interval: '15m' });
  }
}
