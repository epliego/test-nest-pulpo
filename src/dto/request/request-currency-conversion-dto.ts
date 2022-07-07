import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RequestCurrencyConversionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly from_currency: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly to_currency: string;
}
