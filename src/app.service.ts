import { Injectable } from '@nestjs/common';
import { BinanceService } from './binance/binance.service';
import { PriceChangeDto, PriceChangesRequestDto } from './dtos/price-changes.dto';

@Injectable()
export class AppService {
  constructor(private binanceService: BinanceService){}

  async getPriceChanges(request: PriceChangesRequestDto): Promise<PriceChangeDto[]> {
    const candles = await this.binanceService.getCandles(request.symbol, request.interval, request.from, request.to);

    return candles.map(candle => ({
      price: candle.close,
    }))
  }
}
