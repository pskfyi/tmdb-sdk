import { fetchJSONv3 } from "../../utils/fetchJSONv3.ts";
import { Language, LanguageMap } from "./types.ts";

type RawLanguage = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

/**
 * Fetches the raw data, maps it into a more idiomatic shape, then returns it
 * as a map from `string` ISO language codes to `Language` objects.
 *
 * Docs: https://developers.themoviedb.org/3/configuration/get-languages
 *
 * @throws {TypeError} when fetch encounters a network error
 * @throws {Error} when fetch succeeded but a non-200 status code was received. The `Response` will be assigned to `Error.cause`, and the `Error`'s message will be either a specific status message returned by the API if present, or the `Response.statusText` otherwise.
 */
export async function getLanguages(apiKey: string): Promise<LanguageMap> {
  const data: RawLanguage[] = await fetchJSONv3(
    "/configuration/languages",
    apiKey,
  );

  const languages = data.map(({
    iso_639_1: isoCode,
    english_name: name,
    name: nativeName,
  }): Language => {
    const lang: Language = { isoCode, name };
    if (nativeName) {
      lang.nativeName = nativeName;
    }
    return lang;
  });

  return languages.reduce(
    (map, language) => {
      map[language.isoCode] = language;
      return map;
    },
    {} as LanguageMap,
  );
}
