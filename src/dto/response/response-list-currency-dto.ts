import { IsNotEmpty, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseListCurrencyDto {
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    isArray: true,
    example: {
      ALL: {
        currencyName: 'Albanian Lek',
        currencySymbol: 'Lek',
        id: 'ALL',
      },
      XCD: {
        currencyName: 'East Caribbean Dollar',
        currencySymbol: '$',
        id: 'XCD',
      },
      EUR: {
        currencyName: 'Euro',
        currencySymbol: '€',
        id: 'EUR',
      },
      BBD: {
        currencyName: 'Barbadian Dollar',
        currencySymbol: '$',
        id: 'BBD',
      },
      BTN: {
        currencyName: 'Bhutanese Ngultrum',
        id: 'BTN',
      },
      BND: {
        currencyName: 'Brunei Dollar',
        currencySymbol: '$',
        id: 'BND',
      },
      XAF: {
        currencyName: 'Central African CFA Franc',
        id: 'XAF',
      },
      CUP: {
        currencyName: 'Cuban Peso',
        currencySymbol: '$',
        id: 'CUP',
      },
      USD: {
        currencyName: 'United States Dollar',
        currencySymbol: '$',
        id: 'USD',
      },
      FKP: {
        currencyName: 'Falkland Islands Pound',
        currencySymbol: '£',
        id: 'FKP',
      },
      GIP: {
        currencyName: 'Gibraltar Pound',
        currencySymbol: '£',
        id: 'GIP',
      },
      HUF: {
        currencyName: 'Hungarian Forint',
        currencySymbol: 'Ft',
        id: 'HUF',
      },
      IRR: {
        currencyName: 'Iranian Rial',
        currencySymbol: '﷼',
        id: 'IRR',
      },
      JMD: {
        currencyName: 'Jamaican Dollar',
        currencySymbol: 'J$',
        id: 'JMD',
      },
      AUD: {
        currencyName: 'Australian Dollar',
        currencySymbol: '$',
        id: 'AUD',
      },
      LAK: {
        currencyName: 'Lao Kip',
        currencySymbol: '₭',
        id: 'LAK',
      },
      LYD: {
        currencyName: 'Libyan Dinar',
        id: 'LYD',
      },
      MKD: {
        currencyName: 'Macedonian Denar',
        currencySymbol: 'ден',
        id: 'MKD',
      },
      XOF: {
        currencyName: 'West African CFA Franc',
        id: 'XOF',
      },
      NZD: {
        currencyName: 'New Zealand Dollar',
        currencySymbol: '$',
        id: 'NZD',
      },
      OMR: {
        currencyName: 'Omani Rial',
        currencySymbol: '﷼',
        id: 'OMR',
      },
      PGK: {
        currencyName: 'Papua New Guinean Kina',
        id: 'PGK',
      },
      RWF: {
        currencyName: 'Rwandan Franc',
        id: 'RWF',
      },
      WST: {
        currencyName: 'Samoan Tala',
        id: 'WST',
      },
      RSD: {
        currencyName: 'Serbian Dinar',
        currencySymbol: 'Дин.',
        id: 'RSD',
      },
      SEK: {
        currencyName: 'Swedish Krona',
        currencySymbol: 'kr',
        id: 'SEK',
      },
      TZS: {
        currencyName: 'Tanzanian Shilling',
        currencySymbol: 'TSh',
        id: 'TZS',
      },
      AMD: {
        currencyName: 'Armenian Dram',
        id: 'AMD',
      },
      BSD: {
        currencyName: 'Bahamian Dollar',
        currencySymbol: '$',
        id: 'BSD',
      },
      BAM: {
        currencyName: 'Bosnia And Herzegovina Konvertibilna Marka',
        currencySymbol: 'KM',
        id: 'BAM',
      },
      CVE: {
        currencyName: 'Cape Verdean Escudo',
        id: 'CVE',
      },
      CNY: {
        currencyName: 'Chinese Yuan',
        currencySymbol: '¥',
        id: 'CNY',
      },
      CRC: {
        currencyName: 'Costa Rican Colon',
        currencySymbol: '₡',
        id: 'CRC',
      },
      CZK: {
        currencyName: 'Czech Koruna',
        currencySymbol: 'Kč',
        id: 'CZK',
      },
      ERN: {
        currencyName: 'Eritrean Nakfa',
        id: 'ERN',
      },
      GEL: {
        currencyName: 'Georgian Lari',
        id: 'GEL',
      },
      HTG: {
        currencyName: 'Haitian Gourde',
        id: 'HTG',
      },
      INR: {
        currencyName: 'Indian Rupee',
        currencySymbol: '₹',
        id: 'INR',
      },
      JOD: {
        currencyName: 'Jordanian Dinar',
        id: 'JOD',
      },
      KRW: {
        currencyName: 'South Korean Won',
        currencySymbol: '₩',
        id: 'KRW',
      },
      LBP: {
        currencyName: 'Lebanese Lira',
        currencySymbol: '£',
        id: 'LBP',
      },
      MWK: {
        currencyName: 'Malawian Kwacha',
        id: 'MWK',
      },
      MRO: {
        currencyName: 'Mauritanian Ouguiya',
        id: 'MRO',
      },
      MZN: {
        currencyName: 'Mozambican Metical',
        id: 'MZN',
      },
      ANG: {
        currencyName: 'Netherlands Antillean Gulden',
        currencySymbol: 'ƒ',
        id: 'ANG',
      },
      PEN: {
        currencyName: 'Peruvian Nuevo Sol',
        currencySymbol: 'S/.',
        id: 'PEN',
      },
      QAR: {
        currencyName: 'Qatari Riyal',
        currencySymbol: '﷼',
        id: 'QAR',
      },
      STD: {
        currencyName: 'Sao Tome And Principe Dobra',
        id: 'STD',
      },
      SLL: {
        currencyName: 'Sierra Leonean Leone',
        id: 'SLL',
      },
      SOS: {
        currencyName: 'Somali Shilling',
        currencySymbol: 'S',
        id: 'SOS',
      },
      SDG: {
        currencyName: 'Sudanese Pound',
        id: 'SDG',
      },
      SYP: {
        currencyName: 'Syrian Pound',
        currencySymbol: '£',
        id: 'SYP',
      },
      AOA: {
        currencyName: 'Angolan Kwanza',
        id: 'AOA',
      },
      AWG: {
        currencyName: 'Aruban Florin',
        currencySymbol: 'ƒ',
        id: 'AWG',
      },
      BHD: {
        currencyName: 'Bahraini Dinar',
        id: 'BHD',
      },
      BZD: {
        currencyName: 'Belize Dollar',
        currencySymbol: 'BZ$',
        id: 'BZD',
      },
      BWP: {
        currencyName: 'Botswana Pula',
        currencySymbol: 'P',
        id: 'BWP',
      },
      BIF: {
        currencyName: 'Burundi Franc',
        id: 'BIF',
      },
      KYD: {
        currencyName: 'Cayman Islands Dollar',
        currencySymbol: '$',
        id: 'KYD',
      },
      COP: {
        currencyName: 'Colombian Peso',
        currencySymbol: '$',
        id: 'COP',
      },
      DKK: {
        currencyName: 'Danish Krone',
        currencySymbol: 'kr',
        id: 'DKK',
      },
      GTQ: {
        currencyName: 'Guatemalan Quetzal',
        currencySymbol: 'Q',
        id: 'GTQ',
      },
      HNL: {
        currencyName: 'Honduran Lempira',
        currencySymbol: 'L',
        id: 'HNL',
      },
      IDR: {
        currencyName: 'Indonesian Rupiah',
        currencySymbol: 'Rp',
        id: 'IDR',
      },
      ILS: {
        currencyName: 'Israeli New Sheqel',
        currencySymbol: '₪',
        id: 'ILS',
      },
      KZT: {
        currencyName: 'Kazakhstani Tenge',
        currencySymbol: 'лв',
        id: 'KZT',
      },
      KWD: {
        currencyName: 'Kuwaiti Dinar',
        id: 'KWD',
      },
      LSL: {
        currencyName: 'Lesotho Loti',
        id: 'LSL',
      },
      MYR: {
        currencyName: 'Malaysian Ringgit',
        currencySymbol: 'RM',
        id: 'MYR',
      },
      MUR: {
        currencyName: 'Mauritian Rupee',
        currencySymbol: '₨',
        id: 'MUR',
      },
      MNT: {
        currencyName: 'Mongolian Tugrik',
        currencySymbol: '₮',
        id: 'MNT',
      },
      MMK: {
        currencyName: 'Myanma Kyat',
        id: 'MMK',
      },
      NGN: {
        currencyName: 'Nigerian Naira',
        currencySymbol: '₦',
        id: 'NGN',
      },
      PAB: {
        currencyName: 'Panamanian Balboa',
        currencySymbol: 'B/.',
        id: 'PAB',
      },
      PHP: {
        currencyName: 'Philippine Peso',
        currencySymbol: '₱',
        id: 'PHP',
      },
      RON: {
        currencyName: 'Romanian Leu',
        currencySymbol: 'lei',
        id: 'RON',
      },
      SAR: {
        currencyName: 'Saudi Riyal',
        currencySymbol: '﷼',
        id: 'SAR',
      },
      SGD: {
        currencyName: 'Singapore Dollar',
        currencySymbol: '$',
        id: 'SGD',
      },
      ZAR: {
        currencyName: 'South African Rand',
        currencySymbol: 'R',
        id: 'ZAR',
      },
      SRD: {
        currencyName: 'Surinamese Dollar',
        currencySymbol: '$',
        id: 'SRD',
      },
      TWD: {
        currencyName: 'New Taiwan Dollar',
        currencySymbol: 'NT$',
        id: 'TWD',
      },
      TOP: {
        currencyName: 'Paanga',
        id: 'TOP',
      },
      VEF: {
        currencyName: 'Venezuelan Bolivar',
        id: 'VEF',
      },
      DZD: {
        currencyName: 'Algerian Dinar',
        id: 'DZD',
      },
      ARS: {
        currencyName: 'Argentine Peso',
        currencySymbol: '$',
        id: 'ARS',
      },
      AZN: {
        currencyName: 'Azerbaijani Manat',
        currencySymbol: 'ман',
        id: 'AZN',
      },
      BYR: {
        currencyName: 'Belarusian Ruble',
        currencySymbol: 'p.',
        id: 'BYR',
      },
      BOB: {
        currencyName: 'Bolivian Boliviano',
        currencySymbol: '$b',
        id: 'BOB',
      },
      BGN: {
        currencyName: 'Bulgarian Lev',
        currencySymbol: 'лв',
        id: 'BGN',
      },
      CAD: {
        currencyName: 'Canadian Dollar',
        currencySymbol: '$',
        id: 'CAD',
      },
      CLP: {
        currencyName: 'Chilean Peso',
        currencySymbol: '$',
        id: 'CLP',
      },
      CDF: {
        currencyName: 'Congolese Franc',
        id: 'CDF',
      },
      DOP: {
        currencyName: 'Dominican Peso',
        currencySymbol: 'RD$',
        id: 'DOP',
      },
      FJD: {
        currencyName: 'Fijian Dollar',
        currencySymbol: '$',
        id: 'FJD',
      },
      GMD: {
        currencyName: 'Gambian Dalasi',
        id: 'GMD',
      },
      GYD: {
        currencyName: 'Guyanese Dollar',
        currencySymbol: '$',
        id: 'GYD',
      },
      ISK: {
        currencyName: 'Icelandic Króna',
        currencySymbol: 'kr',
        id: 'ISK',
      },
      IQD: {
        currencyName: 'Iraqi Dinar',
        id: 'IQD',
      },
      JPY: {
        currencyName: 'Japanese Yen',
        currencySymbol: '¥',
        id: 'JPY',
      },
      KPW: {
        currencyName: 'North Korean Won',
        currencySymbol: '₩',
        id: 'KPW',
      },
      LVL: {
        currencyName: 'Latvian Lats',
        currencySymbol: 'Ls',
        id: 'LVL',
      },
      CHF: {
        currencyName: 'Swiss Franc',
        currencySymbol: 'Fr.',
        id: 'CHF',
      },
      MGA: {
        currencyName: 'Malagasy Ariary',
        id: 'MGA',
      },
      MDL: {
        currencyName: 'Moldovan Leu',
        id: 'MDL',
      },
      MAD: {
        currencyName: 'Moroccan Dirham',
        id: 'MAD',
      },
      NPR: {
        currencyName: 'Nepalese Rupee',
        currencySymbol: '₨',
        id: 'NPR',
      },
      NIO: {
        currencyName: 'Nicaraguan Cordoba',
        currencySymbol: 'C$',
        id: 'NIO',
      },
      PKR: {
        currencyName: 'Pakistani Rupee',
        currencySymbol: '₨',
        id: 'PKR',
      },
      PYG: {
        currencyName: 'Paraguayan Guarani',
        currencySymbol: 'Gs',
        id: 'PYG',
      },
      SHP: {
        currencyName: 'Saint Helena Pound',
        currencySymbol: '£',
        id: 'SHP',
      },
      SCR: {
        currencyName: 'Seychellois Rupee',
        currencySymbol: '₨',
        id: 'SCR',
      },
      SBD: {
        currencyName: 'Solomon Islands Dollar',
        currencySymbol: '$',
        id: 'SBD',
      },
      LKR: {
        currencyName: 'Sri Lankan Rupee',
        currencySymbol: '₨',
        id: 'LKR',
      },
      THB: {
        currencyName: 'Thai Baht',
        currencySymbol: '฿',
        id: 'THB',
      },
      TRY: {
        currencyName: 'Turkish New Lira',
        id: 'TRY',
      },
      AED: {
        currencyName: 'UAE Dirham',
        id: 'AED',
      },
      VUV: {
        currencyName: 'Vanuatu Vatu',
        id: 'VUV',
      },
      YER: {
        currencyName: 'Yemeni Rial',
        currencySymbol: '﷼',
        id: 'YER',
      },
      AFN: {
        currencyName: 'Afghan Afghani',
        currencySymbol: '؋',
        id: 'AFN',
      },
      BDT: {
        currencyName: 'Bangladeshi Taka',
        id: 'BDT',
      },
      BRL: {
        currencyName: 'Brazilian Real',
        currencySymbol: 'R$',
        id: 'BRL',
      },
      KHR: {
        currencyName: 'Cambodian Riel',
        currencySymbol: '៛',
        id: 'KHR',
      },
      KMF: {
        currencyName: 'Comorian Franc',
        id: 'KMF',
      },
      HRK: {
        currencyName: 'Croatian Kuna',
        currencySymbol: 'kn',
        id: 'HRK',
      },
      DJF: {
        currencyName: 'Djiboutian Franc',
        id: 'DJF',
      },
      EGP: {
        currencyName: 'Egyptian Pound',
        currencySymbol: '£',
        id: 'EGP',
      },
      ETB: {
        currencyName: 'Ethiopian Birr',
        id: 'ETB',
      },
      XPF: {
        currencyName: 'CFP Franc',
        id: 'XPF',
      },
      GHS: {
        currencyName: 'Ghanaian Cedi',
        id: 'GHS',
      },
      GNF: {
        currencyName: 'Guinean Franc',
        id: 'GNF',
      },
      HKD: {
        currencyName: 'Hong Kong Dollar',
        currencySymbol: '$',
        id: 'HKD',
      },
      XDR: {
        currencyName: 'Special Drawing Rights',
        id: 'XDR',
      },
      KES: {
        currencyName: 'Kenyan Shilling',
        currencySymbol: 'KSh',
        id: 'KES',
      },
      KGS: {
        currencyName: 'Kyrgyzstani Som',
        currencySymbol: 'лв',
        id: 'KGS',
      },
      LRD: {
        currencyName: 'Liberian Dollar',
        currencySymbol: '$',
        id: 'LRD',
      },
      MOP: {
        currencyName: 'Macanese Pataca',
        id: 'MOP',
      },
      MVR: {
        currencyName: 'Maldivian Rufiyaa',
        id: 'MVR',
      },
      MXN: {
        currencyName: 'Mexican Peso',
        currencySymbol: '$',
        id: 'MXN',
      },
      NAD: {
        currencyName: 'Namibian Dollar',
        currencySymbol: '$',
        id: 'NAD',
      },
      NOK: {
        currencyName: 'Norwegian Krone',
        currencySymbol: 'kr',
        id: 'NOK',
      },
      PLN: {
        currencyName: 'Polish Zloty',
        currencySymbol: 'zł',
        id: 'PLN',
      },
      RUB: {
        currencyName: 'Russian Ruble',
        currencySymbol: 'руб',
        id: 'RUB',
      },
      SZL: {
        currencyName: 'Swazi Lilangeni',
        id: 'SZL',
      },
      TJS: {
        currencyName: 'Tajikistani Somoni',
        id: 'TJS',
      },
      TTD: {
        currencyName: 'Trinidad and Tobago Dollar',
        currencySymbol: 'TT$',
        id: 'TTD',
      },
      UGX: {
        currencyName: 'Ugandan Shilling',
        currencySymbol: 'USh',
        id: 'UGX',
      },
      UYU: {
        currencyName: 'Uruguayan Peso',
        currencySymbol: '$U',
        id: 'UYU',
      },
      VND: {
        currencyName: 'Vietnamese Dong',
        currencySymbol: '₫',
        id: 'VND',
      },
      TND: {
        currencyName: 'Tunisian Dinar',
        id: 'TND',
      },
      UAH: {
        currencyName: 'Ukrainian Hryvnia',
        currencySymbol: '₴',
        id: 'UAH',
      },
      UZS: {
        currencyName: 'Uzbekistani Som',
        currencySymbol: 'лв',
        id: 'UZS',
      },
      TMT: {
        currencyName: 'Turkmenistan Manat',
        id: 'TMT',
      },
      GBP: {
        currencyName: 'British Pound',
        currencySymbol: '£',
        id: 'GBP',
      },
      ZMW: {
        currencyName: 'Zambian Kwacha',
        id: 'ZMW',
      },
      BTC: {
        currencyName: 'Bitcoin',
        currencySymbol: 'BTC',
        id: 'BTC',
      },
      BYN: {
        currencyName: 'New Belarusian Ruble',
        currencySymbol: 'p.',
        id: 'BYN',
      },
      BMD: {
        currencyName: 'Bermudan Dollar',
        id: 'BMD',
      },
      GGP: {
        currencyName: 'Guernsey Pound',
        id: 'GGP',
      },
      CLF: {
        currencyName: 'Chilean Unit Of Account',
        id: 'CLF',
      },
      CUC: {
        currencyName: 'Cuban Convertible Peso',
        id: 'CUC',
      },
      IMP: {
        currencyName: 'Manx pound',
        id: 'IMP',
      },
      JEP: {
        currencyName: 'Jersey Pound',
        id: 'JEP',
      },
      SVC: {
        currencyName: 'Salvadoran Colón',
        id: 'SVC',
      },
      ZMK: {
        currencyName: 'Old Zambian Kwacha',
        id: 'ZMK',
      },
      XAG: {
        currencyName: 'Silver (troy ounce)',
        id: 'XAG',
      },
      ZWL: {
        currencyName: 'Zimbabwean Dollar',
        id: 'ZWL',
      },
    },
  })
  readonly data;
}
