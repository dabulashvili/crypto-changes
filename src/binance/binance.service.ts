import { Inject, Injectable } from '@nestjs/common';
import { Binance, CandleChartInterval, CandleChartResult } from 'binance-api-node';

@Injectable()
export class BinanceService {
  constructor(@Inject('BINANCE_API') private client: Binance) {}

  async getCandles(symbol: string, interval: CandleChartInterval, from: Date, to: Date): Promise<CandleChartResult[]> {
    return await this.client.candles({ symbol, interval, startTime: from.getTime(), endTime: to.getTime() });
  }
}
