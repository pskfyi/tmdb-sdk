import { LanguageOptions } from "../types.ts";
import { fetchJSON, languageOptionsToISO6391String } from "../utils.ts";
import { GenreMap } from "./types.ts";

type RawGenre = { id: number; name: string };

/** Docs: https://developers.themoviedb.org/3/genres/get-movie-list */
export async function getMovieGenres(
  apiKey: string,
  options: LanguageOptions = {},
): Promise<GenreMap> {
  const data: { genres: RawGenre[] } = await fetchJSON(
    "/genre/movie/list",
    apiKey,
    { language: languageOptionsToISO6391String(options) },
  );

  const genreMap: GenreMap = {};

  for (const { id, name } of data.genres) {
    genreMap[id] = name;
  }

  return genreMap;
}
