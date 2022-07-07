import { Body, Controller, Post, Res } from '@nestjs/common';
import { CurrencyService } from '../services/currency.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { RequestCurrencyConversionDto } from '../dto/request/request-currency-conversion-dto';
import { ResponseListCurrencyDto } from '../dto/response/response-list-currency-dto';
import { ResponseCurrencyConversionDto } from '../dto/response/response-currency-conversion-dto';

@ApiBearerAuth()
@Controller('v1/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  /**
   * API Currency Conversion
   * @param parameters
   * @param response
   */
  @ApiOperation({ summary: 'API Currency Conversion' })
  @ApiOkResponse({
    description: 'Consulted Currency Conversion successfully',
    type: ResponseCurrencyConversionDto,
  })
  @ApiResponse({
    status: 503,
    description: 'Error in service Currency Conversion',
  })
  @Post('currency-conversion')
  async currencyConversion(
    @Body() parameters: RequestCurrencyConversionDto,
    @Res() response,
  ): Promise<any> {
    return this.currencyService.currencyConversionService(parameters, response);
  }

  /**
   * API List of Currencies
   * @param response
   */
  @ApiOperation({ summary: 'API List of Currencies' })
  @ApiOkResponse({
    description: 'Consulted List of Currencies successfully',
    type: ResponseListCurrencyDto,
  })
  @ApiResponse({
    status: 503,
    description: 'Error in service List of Currencies',
  })
  @Post('list-currencies')
  async listCurrencies(@Res() response): Promise<any> {
    return this.currencyService.listCurrenciesService(response);
  }
}
