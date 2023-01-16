import { LanguageOptions } from "../types.ts";
import { fetchJSON, languageOptionsToISO6391String } from "../utils.ts";
import { Country, CountryMap } from "./types.ts";

type RawCountry = {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
};

/** Docs: https://developers.themoviedb.org/3/configuration/get-countries */
export async function getCountries(
  apiKey: string,
  options: LanguageOptions = {},
): Promise<CountryMap> {
  const data: RawCountry[] = await fetchJSON(
    "/configuration/countries",
    apiKey,
    { language: languageOptionsToISO6391String(options) },
  );

  const countryMap: CountryMap = {};

  for (
    const {
      iso_3166_1: isoCode,
      english_name: englishName,
      native_name: nativeName,
    } of data
  ) {
    const country: Country = { isoCode, englishName, nativeName };

    countryMap[isoCode] = country;
  }

  return countryMap;
}
