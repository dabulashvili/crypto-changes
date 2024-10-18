import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BinanceModule } from './binance/binance.module';
import { BinanceService } from './binance/binance.service';

@Module({
  imports: [ConfigModule.forRoot(), BinanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
