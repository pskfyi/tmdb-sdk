import { LanguageCode } from "./language/languages.ts";

type Language = {
  /**
   * Translation language of the results. NOT language of the movie or TV show. */
  language: LanguageCode;
};

type CountryCode = "US";

export type LanguageOptions =
  | Partial<Language>
  | (Language & {
    /**
     * Country for language of the search results, ex. Swiss French vs
     * Canadian French. NOT country of the movie.
     */
    country?: CountryCode;
  });
