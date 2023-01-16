import { fetchJSONv3 } from "../../utils/fetchJSONv3.ts";
import { GenreMap } from "./types.ts";

type RawGenre = { id: number; name: string };

/**
 * Docs: https://developers.themoviedb.org/3/genres/get-movie-list
 */
export async function getMovieGenres(apiKey: string): Promise<GenreMap> {
  const data: { genres: RawGenre[] } = await fetchJSONv3(
    "/genre/movie/list",
    apiKey,
  );

  const genreMap: GenreMap = {};

  for (const { id, name } of data.genres) {
    genreMap[id] = name;
  }

  return genreMap;
}
