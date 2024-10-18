import { CandlesOptions } from 'binance-api-node';
import * as moment from "moment";

export class BinanceApiMock {
    candles(options: CandlesOptions) {
        if (options.endTime - options.startTime < 100) {
            return [];
        }

        return [{
            openTime: moment().subtract(1, 'day').toDate().getTime(),
            open: '1.11111',
            high: '1.11112',
            low:'1.11110',
            close: '1.11113',
            volume: 223.3434,
            closeTime: moment().toDate().getTime(),
            quoteVolume: '',
            trades: 123,
        }]
    }
}