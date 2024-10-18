import { Test, TestingModule } from '@nestjs/testing';
import { BinanceService } from '../../src/binance/binance.service';
import { BinanceApiMock } from './binance-api-mock.service';
import { CandleChartInterval } from 'binance-api-node';
import * as moment from "moment";

describe('BinanceService', () => {
  let binanceService: BinanceService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        {
          provide: 'BINANCE_API',
          useClass: BinanceApiMock,
        },
        BinanceService,
      ],
    }).compile();

    binanceService = app.get<BinanceService>(BinanceService);
  });

  describe('getCandles', () => {
    it('fetches not data when date range is small', async () => {
      const data = await binanceService.getCandles(
        'ETHBTC',
        CandleChartInterval.ONE_DAY,
        new Date(),
        new Date(),
      );

      expect(data).toEqual([]);
    });

    it('fetches candle data properly', async () => {
        const data = await binanceService.getCandles(
          'ETHBTC',
          CandleChartInterval.ONE_DAY,
          moment().subtract(1, 'month').toDate(),
          new Date(),
        );
  
        expect(data.length).toEqual(1);
      });
  });
});
