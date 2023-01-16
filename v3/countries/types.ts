export type Country = {
  /**
   * An ISO 3166-1 country code.
   *
   * @example "FR" // France
   */
  isoCode: string;
  englishName: string;
  nativeName: string;
};

export type CountryMap = Record<string, Country>;
