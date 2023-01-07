import { BASE_URL } from "../constants.ts";
import { Language, LanguageMap } from "./types.ts";

type RawLanguage = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

/**
 * Fetches the raw data, maps it into a more idiomatic shape, then returns it
 * as a map from `string` language codes to `Language` objects.
 *
 * @throws {TypeError} when fetch encounters a network error
 * @throws {Error} when fetch succeeded but a non-200 status code was received. The `Response` will be assigned to `Error.cause`, and the `Error`'s message will be either a specific status message returned by the API if present, or the `Response.statusText` otherwise.
 */
export async function getLanguages(apiKey: string): Promise<LanguageMap> {
  const url = `${BASE_URL}/configuration/languages?api_key=${apiKey}`;
  const response = await fetch(url);

  if (response.status !== 200) {
    let message: string;
    try {
      const data = await response.json();
      if (!data.status_message) throw new Error();
      message = data.status_message;
    } catch {
      message = response.statusText;
    }
    throw new Error(message, { cause: response });
  }

  const data = await response.json() as RawLanguage[];

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
