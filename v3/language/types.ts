export type Language = {
  /**
   * An ISO 639-1 language code.
   *
   * @example "en" // English
   */
  isoCode: string;
  /**
   * The name of the language as written within English.
   *
   * The raw API calls this `englishName`. It is renamed here for brevity,
   * size, and given that it is the only name given for most languages.
   *
   * @example "English"
   */
  name: string;
  /**
   * The name of the language as written within the language.
   *
   * The raw API calls this `name`. It is renamed here and made optional
   * because it is commonly blank and so is not a useful primary label within
   * this dataset.
   *
   * @example "Italiano"
   */
  nativeName?: string;
};

export type LanguageMap = {
  [ISOLanguageCode: string]: Language;
};
