import { CountryCode } from "./countries/countries.ts";
import { LanguageCode } from "./languages/languages.ts";

type Language = {
  /**
   * Translation language of the results. NOT language of the movie or TV show. */
  language: LanguageCode;
};

export type LanguageOptions =
  | Partial<Language>
  | (Language & {
    /**
     * Country for language of the search results, ex. Swiss French vs
     * Canadian French. NOT country of the movie.
     */
    country?: CountryCode;
  });
