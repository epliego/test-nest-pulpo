import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiRequestLogEntity } from '../entities/api-request-log.entity';
import { DirnameService } from '../../dirname.service';

@Injectable()
export class CurrencyService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(ApiRequestLogEntity)
    private readonly apiRequestLogRepository: Repository<ApiRequestLogEntity>,
  ) {}

  /**
   * Insert event log in DB
   *
   * @param event_name
   */
  async insertApiRequestLogService(event_name: string) {
    const insertApiRequestLogService = new ApiRequestLogEntity();
    insertApiRequestLogService.user = 'user_guest';
    insertApiRequestLogService.event_name = event_name;
    insertApiRequestLogService.active = 1;
    insertApiRequestLogService.insert_date = new Date();
    insertApiRequestLogService.insert_by = 1;

    await this.apiRequestLogRepository.save(insertApiRequestLogService);
  }

  /**
   * Currency Conversion Service
   * @param parameters
   * @param response
   */
  async currencyConversionService(parameters, @Res() response) {
    try {
      const array_errors_message = [];

      if (!parameters.from_currency) {
        array_errors_message.push({
          error: 'Please enter a From Currency',
        });
      }

      if (!parameters.to_currency) {
        array_errors_message.push({
          error: 'Please enter a To Currency',
        });
      }

      if (array_errors_message.length > 0) {
        response.status(HttpStatus.NOT_FOUND).json({
          statusCode: 404,
          message: 'Error in service Currency Conversion',
          data: array_errors_message,
        });
      } else {
        const dirname_service = new DirnameService();
        const currencyConversionService = await this;

        const from_currency = encodeURIComponent(parameters.from_currency);
        const to_currency = encodeURIComponent(parameters.to_currency);
        const query = from_currency + '_' + to_currency;

        const url =
          dirname_service.getBaseUrlCurrencyApi() +
          'api/v7/convert?q=' +
          query +
          '&compact=ultra&apiKey=' +
          dirname_service.getApiKeyCurrencyApi();

        await this.httpService.get(url).forEach((res) => {
          // console.log(res.data);
          if (!res.data) {
            response.status(HttpStatus.NOT_FOUND).json({
              statusCode: 404,
              message: 'Error in service Currency Conversion',
              data: [],
            });
          } else {
            currencyConversionService.insertApiRequestLogService(
              'API Currency Conversion',
            );

            response.status(HttpStatus.OK).json({
              statusCode: 200,
              message: 'Consulted Currency Conversion successfully',
              data: res.data,
            });
          }
        });
      }
    } catch (err) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: 503,
        message: 'Error in service Currency Conversion',
        data: [
          {
            error: err,
          },
        ],
      });
    }
  }

  /**
   * List of Currencies Service
   * @param response
   */
  async listCurrenciesService(@Res() response) {
    try {
      const dirname_service = new DirnameService();

      const url =
        dirname_service.getBaseUrlCurrencyApi() +
        'api/v7/currencies?apiKey=' +
        dirname_service.getApiKeyCurrencyApi();

      await this.httpService.get(url).forEach((res) => {
        // console.log(res.data.results);
        if (!res.data.results) {
          response.status(HttpStatus.NOT_FOUND).json({
            statusCode: 404,
            message: 'Error in service List of Currencies',
            data: [],
          });
        } else {
          response.status(HttpStatus.OK).json({
            statusCode: 200,
            message: 'Consulted List of Currencies successfully',
            data: res.data.results,
          });
        }
      });
    } catch (err) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: 503,
        message: 'Error in service List of Currencies',
        data: [
          {
            error: err,
          },
        ],
      });
    }
  }
}
