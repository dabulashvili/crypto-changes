import { Module } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Binance from 'binance-api-node';

const BinanceApiProvider = {
  provide: 'BINANCE_API',
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    return Binance({
      apiKey: config.get('BINANCE_KEY'),
      apiSecret: config.get('BINANCE_SECRET'),
    });
  },
};

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [BinanceApiProvider, BinanceService],
  exports: [BinanceService, BinanceApiProvider],
})
export class BinanceModule {}
