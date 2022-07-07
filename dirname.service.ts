import { Injectable } from '@nestjs/common';

@Injectable()
export class DirnameService {
  getDirName(): string {
    return __dirname;
  }

  getBaseUrlCurrencyApi(): string {
    return 'https://free.currconv.com/';
  }

  getApiKeyCurrencyApi(): string {
    return '904dc2f947af500d1c92';
  }
}
