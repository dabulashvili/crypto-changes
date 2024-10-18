import { CandleChartInterval } from 'binance-api-node';
import { Transform, Type } from 'class-transformer';
import { IsDate, IsEnum } from 'class-validator';

export class PriceChangesRequestDto {
    symbol: string;

    interval: CandleChartInterval;

    @Type(() => Date)
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    @IsDate()
    from: Date;

    @Type(() => Date)
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    @IsDate()
    to: Date;
}

export class PriceChangeDto {
    price: string;
    change?: number;
}

export class PriceChangeResponseDto {
    priceChanges: PriceChangeDto[];
}

// http://localhost:3000/price-changes?symbol=ETHBTC&interval=1d&from=1629245855&to=1729245855