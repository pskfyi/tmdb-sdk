import { fetchJSONv3 } from "../../utils/fetchJSONv3.ts";
import { LanguageOptions } from "../types.ts";
import { languageOptionsToISO6391String } from "../utils.ts";
import { GenreMap } from "./types.ts";

type RawGenre = { id: number; name: string };

/** Docs: https://developers.themoviedb.org/3/genres/get-movie-list */
export async function getMovieGenres(
  apiKey: string,
  options: LanguageOptions = {},
): Promise<GenreMap> {
  const data: { genres: RawGenre[] } = await fetchJSONv3(
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
