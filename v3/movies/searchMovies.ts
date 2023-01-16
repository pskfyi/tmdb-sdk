import { CountryCode } from "../countries/countries.ts";
import { MOVIE_GENRES, MovieGenre } from "../genre/genres.ts";
import { LanguageCode } from "../languages/languages.ts";
import { LanguageOptions } from "../types.ts";
import { fetchJSON, languageOptionsToISO6391String } from "../utils.ts";

type RawMovieSearchResult = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: LanguageCode;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type RawSearchResultsPage<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

type RawSearchMoviesOptions = {
  query: string;
  page?: number;
  language?: string;
  region?: CountryCode;
  year?: number;
  primary_release_year?: number;
  include_adult?: boolean;
};

export type SearchMoviesOptions = LanguageOptions & {
  /**
   * Defaults to page 1. The API does not have a way to retrieve multiple
   * pages.
   */
  page?: number;
  /** The first, original release year. */
  year?: number;
  /** Choose a region for release dates. Defaults to "US". */
  releaseRegion?: CountryCode;
  /** Year of release in the releaseRegion, "US" by default. */
  releaseYear?: number;
  /**
   * Whether or not pornography should be included in the search results.
   * Defaults to `false`.
   */
  includeAdult?: boolean;
};

export type MovieSearchResult = {
  adult: boolean;
  backdropPath?: string;
  /** English names of the genres. */
  genres: MovieGenre[];
  genreIDs: number[];
  id: number;
  originalLanguage: LanguageCode;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath?: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

export type SearchResultsPage<T> = {
  page: number;
  totalPages: number;
  totalResults: number;
  results: T[];
};

/**
 * Fetches the raw data, maps it into a more idiomatic shape, then returns it
 * as a map from `string` language codes to `Language` objects.
 *
 * Docs: https://developers.themoviedb.org/3/search/search-movies
 */
export async function searchMovies(
  apiKey: string,
  query: string,
  options: SearchMoviesOptions = {},
) {
  const params: RawSearchMoviesOptions = { query };

  if ("includeAdult" in options) params.include_adult = options.includeAdult;
  if ("page" in options) params.page = options.page;
  if ("year" in options) params.primary_release_year = options.year;
  if ("releaseRegion" in options) params.region = options.releaseRegion;
  if ("releaseYear" in options) params.year = options.releaseYear;

  if ("language" in options) {
    params.language = languageOptionsToISO6391String(options);
  }

  const data: RawSearchResultsPage<RawMovieSearchResult> = await fetchJSON(
    "/search/movie",
    apiKey,
    params,
  );

  const output: SearchResultsPage<MovieSearchResult> = {
    page: data.page,
    totalPages: data.total_pages,
    totalResults: data.total_results,
    results: [],
  };

  for (
    const {
      adult,
      backdrop_path,
      genre_ids: genreIDs,
      id,
      original_language: originalLanguage,
      original_title: originalTitle,
      overview,
      popularity,
      poster_path,
      release_date: releaseDate,
      title,
      video,
      vote_average: voteAverage,
      vote_count: voteCount,
    } of data.results
  ) {
    const genres = genreIDs.map((id) => MOVIE_GENRES[id]);

    const result: MovieSearchResult = {
      adult,
      genres,
      genreIDs,
      id,
      originalLanguage,
      originalTitle,
      overview,
      popularity,
      releaseDate,
      title,
      video,
      voteAverage,
      voteCount,
    };

    if (backdrop_path !== null) result.backdropPath = backdrop_path;
    if (poster_path !== null) result.posterPath = poster_path;

    output.results.push(result);
  }

  return output;
}
