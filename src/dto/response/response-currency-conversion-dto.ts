import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseCurrencyConversionDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly EUR_USD: number;
}
