import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {
  PriceChangeResponseDto,
  PriceChangesRequestDto,
} from './dtos/price-changes.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/price-changes')
  async getPriceChanges(
    @Query() request: PriceChangesRequestDto,
  ): Promise<PriceChangeResponseDto> {
    const priceChanges = await this.appService.getPriceChanges(request);
    return { priceChanges };
  }
}
