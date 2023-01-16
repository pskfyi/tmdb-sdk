import { fetchJSON } from "../utils.ts";
import { Language, LanguageMap } from "./types.ts";

type RawLanguage = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

/**
 * Docs: https://developers.themoviedb.org/3/configuration/get-languages
 */
export async function getLanguages(apiKey: string): Promise<LanguageMap> {
  const data: RawLanguage[] = await fetchJSON(
    "/configuration/languages",
    apiKey,
  );

  const languageMap: LanguageMap = {};

  for (const rawLanguage of data) {
    const {
      iso_639_1: isoCode,
      english_name: name,
      name: nativeName,
    } = rawLanguage;

    const language: Language = { isoCode, name };
    if (nativeName) {
      language.nativeName = nativeName;
    }

    languageMap[isoCode] = language;
  }

  return languageMap;
}
