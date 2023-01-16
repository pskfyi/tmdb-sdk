# TMDB SDK

Deno-first TypeScript library for interacting with
[themoviedb.org](https://www.themoviedb.org/)'s (TMDB) API.

This library transforms fetched data to make it more idiomatic for
JavaScript/TypeScript.

- Replaces `snake_case` properties with `camelCase`
- Renames properties where appropriate
- Properties which would sometimes have empty string values (`""`) now use
  optional values instead

## Error Handling

The API returns 200, 401, and 404 responses. The SDK throws an
[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
when a 401 or 404 response is received. The full
[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) will be
assigned to
[`Error.cause`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause),
and
[`Error.message`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
will be either a specific status message returned by the API if present, or the
value of
[`Response.statusText`](https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText)
otherwise.

Additionally the standard
[`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) function used
internally throws a
[`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
when a network issue is encountered.

## API v3

https://developers.themoviedb.org/3/getting-started/introduction

### Countries

Source:

- https://developers.themoviedb.org/3/configuration/get-countries

```ts
import { COUNTRIES, getCountries } from "path/to/v3/countries/mod.ts";
import type {
  Country,
  CountryCode,
  CountryMap,
} from "path/to/v3/countries/mod.ts";
```

### Genres

Source:

- https://developers.themoviedb.org/3/genres/get-movie-list

```ts
import { getMovieGenres, MOVIE_GENRES } from "path/to/v3/genres/mod.ts";
import type { GenreMap, MovieGenre } from "path/to/v3/genres/mod.ts";
```

### Languages

Source:

- https://developers.themoviedb.org/3/getting-started/languages
- https://developers.themoviedb.org/3/configuration/get-languages

```ts
import { getLanguages, LANGUAGES } from "path/to/v3/languages/mod.ts";
import type {
  Language,
  LanguageCode,
  LanguageMap,
} from "path/to/v3/languages/mod.ts";
```

### Movies

#### Search

Source:

- https://developers.themoviedb.org/3/search/search-movies

```ts
import { searchMovies } from "path/to/v3/movies/mod.ts";
import type {
  MovieSearchResult,
  SearchMoviesOptions,
  SearchResultsPage,
} from "path/to/v3/languages/mod.ts";
```

## Roadmap

- Current Version: 0.1.0
- Completed: 4
- Slated: 145

|    | SDK  | Category        | Function                        |
| :- | :--- | :-------------- | :------------------------------ |
|    | -    | Account         | -                               |
|    | v0.0 | Account         | `getAccount()`                  |
|    | v0.0 | Account         | `getLists()`                    |
|    | v0.0 | Account         | `getFavoriteMovies()`           |
|    | v0.0 | Account         | `getFavoriteTVShows()`          |
|    | v0.0 | Account         | `markAsFavorite()`              |
|    | v0.0 | Account         | `getRatedMovies()`              |
|    | v0.0 | Account         | `getRatedTVShows()`             |
|    | v0.0 | Account         | `getRatedTVEpisodes()`          |
|    | v0.0 | Account         | `getMovieWatchlist()`           |
|    | v0.0 | Account         | `getTVShowWatchlist()`          |
|    | v0.0 | Account         | `addToWatchList()`              |
|    | -    | Authentication  | -                               |
|    | v0.0 | Authentication  | `createGuestSession()`          |
|    | v0.0 | Authentication  | `createRequestToken()`          |
|    | v0.0 | Authentication  | `createSession()`               |
|    | v0.0 | Authentication  | `validateRequestToken()`        |
|    | v0.0 | Authentication  | `deleteSession()`               |
|    | -    | Certifications  | -                               |
|    | v0.0 | Certifications  | `getAllMovieCerts()`            |
|    | v0.0 | Certifications  | `getAllTVCerts()`               |
|    | -    | Changes         | -                               |
|    | v0.0 | Changes         | `getMovieChanges()`             |
|    | v0.0 | Changes         | `getTVChanges()`                |
|    | v0.0 | Changes         | `getPersonChanges()`            |
|    | -    | Collections     | -                               |
|    | v0.0 | Collections     | `getCollectionDetails()`        |
|    | v0.0 | Collections     | `getCollectionImages()`         |
|    | v0.0 | Collections     | `getCollectionTranslations()`   |
|    | -    | Companies       | -                               |
|    | v0.0 | Companies       | `getCompanies()`                |
|    | v0.0 | Companies       | `getAltCompanyNames()`          |
|    | v0.0 | Companies       | `getCompanyImages()`            |
|    | -    | Configuration   | -                               |
|    | v0.0 | Configuration   | `getConfiguration()`            |
| ✅  | v0.1 | Configuration   | `getCountries()`                |
|    | v0.0 | Configuration   | `getJobs()`                     |
| ✅  | v0.1 | Configuration   | `getLanguages()`                |
|    | v0.0 | Configuration   | `getPrimaryTranslations()`      |
|    | v0.0 | Configuration   | `getTimezones()`                |
|    | -    | Credits         | -                               |
|    | v0.0 | Credits         | `getCredits()`                  |
|    | -    | Discover        | -                               |
|    | v0.0 | Discover        | `discoverMovies()`              |
|    | v0.0 | Discover        | `discoverTV()`                  |
|    | -    | Find            | -                               |
|    | v0.0 | Find            | `find()`                        |
|    | -    | Genres          | -                               |
| ✅  | v0.1 | Genres          | `getMovieGenres()`              |
|    | v0.0 | Genres          | `getTVGenres()`                 |
|    | -    | GuestSessions   | -                               |
|    | v0.0 | GuestSessions   | `getRatedMovies()`              |
|    | v0.0 | GuestSessions   | `getRatedTVShows()`             |
|    | v0.0 | GuestSessions   | `getRatedTVEpisodes()`          |
|    | -    | Keywords        | -                               |
|    | v0.0 | Keywords        | `getKeywords()`                 |
|    | v0.0 | Keywords        | `getMoviesByKeyword()`          |
|    | -    | Lists           | -                               |
|    | v0.0 | Lists           | `getList()`                     |
|    | v0.0 | Lists           | `checkListItemStatus()`         |
|    | v0.0 | Lists           | `createList()`                  |
|    | v0.0 | Lists           | `addMovieToList()`              |
|    | v0.0 | Lists           | `removeMovieFromList()`         |
|    | v0.0 | Lists           | `clearList()`                   |
|    | v0.0 | Lists           | `deleteList()`                  |
|    | -    | Movies          | -                               |
|    | v0.0 | Movies          | `getMovie()`                    |
|    | v0.0 | Movies          | `getMovieAccountStates()`       |
|    | v0.0 | Movies          | `getAltMovieTitles()`           |
|    | v0.0 | Movies          | `getMovieChanges()`             |
|    | v0.0 | Movies          | `getMovieCredits()`             |
|    | v0.0 | Movies          | `getMovieExternalIDs()`         |
|    | v0.0 | Movies          | `getMovieImages()`              |
|    | v0.0 | Movies          | `getMovieKeywords()`            |
|    | v0.0 | Movies          | `getMovieLists()`               |
|    | v0.0 | Movies          | `getRecsFromMovie()`            |
|    | v0.0 | Movies          | `getMovieReleaseDates()`        |
|    | v0.0 | Movies          | `getMovieReviews()`             |
|    | v0.0 | Movies          | `getSimilarMovies()`            |
|    | v0.0 | Movies          | `getMovieTranslations()`        |
|    | v0.0 | Movies          | `getMovieVideos()`              |
|    | v0.0 | Movies          | `getMovieWatchProviders()`      |
|    | v0.0 | Movies          | `rateMovie()`                   |
|    | v0.0 | Movies          | `deleteMovieRating()`           |
|    | v0.0 | Movies          | `getLatestMovie()`              |
|    | v0.0 | Movies          | `getMoviesInTheaters()`         |
|    | v0.0 | Movies          | `getPopularMovies()`            |
|    | v0.0 | Movies          | `getTopRatedMovies()`           |
|    | v0.0 | Movies          | `getUpcomingMovies()`           |
|    | -    | Networks        | -                               |
|    | v0.0 | Networks        | `getNetworks()`                 |
|    | v0.0 | Networks        | `getAltNetworkNames()`          |
|    | v0.0 | Networks        | `getNetworkImages()`            |
|    | -    | Trending        | -                               |
|    | v0.0 | Trending        | `getTrending()`                 |
|    | -    | People          | -                               |
|    | v0.0 | People          | `getPerson()`                   |
|    | v0.0 | People          | `getPersonChanges()`            |
|    | v0.0 | People          | `getPersonMovieCredits()`       |
|    | v0.0 | People          | `getPersonTVCredits()`          |
|    | v0.0 | People          | `getPersonCredits()`            |
|    | v0.0 | People          | `getPersonExternalIDs()`        |
|    | v0.0 | People          | `getPersonImages()`             |
|    | v0.0 | People          | `getPersonTaggedImages()`       |
|    | v0.0 | People          | `getPersonTranslations()`       |
|    | v0.0 | People          | `getLatestPerson()`             |
|    | v0.0 | People          | `getPopularPeople()`            |
|    | -    | Reviews         | -                               |
|    | v0.0 | Reviews         | `getReview()`                   |
|    | -    | Search          | -                               |
|    | v0.0 | Search          | `searchCompanies()`             |
|    | v0.0 | Search          | `searchCollections()`           |
|    | v0.0 | Search          | `searchKeywords()`              |
| ✅  | v0.1 | Search          | `searchMovies()`                |
|    | v0.0 | Search          | `search()`                      |
|    | v0.0 | Search          | `searchPeople()`                |
|    | v0.0 | Search          | `searchTVShows()`               |
|    | -    | TV              | -                               |
|    | v0.0 | TV              | `getTVShow()`                   |
|    | v0.0 | TV              | `getTVShowAccountStates()`      |
|    | v0.0 | TV              | `getTVShowAggregateCredits()`   |
|    | v0.0 | TV              | `getAltTVShowTitles()`          |
|    | v0.0 | TV              | `getTVShowChanges()`            |
|    | v0.0 | TV              | `getTVShowCerts()`              |
|    | v0.0 | TV              | `getTVShowCredits()`            |
|    | v0.0 | TV              | `getTVShowEpisodeGroups()`      |
|    | v0.0 | TV              | `getTVShowExternalIDs()`        |
|    | v0.0 | TV              | `getTVShowImages()`             |
|    | v0.0 | TV              | `getTVShowKeywords()`           |
|    | v0.0 | TV              | `getRecsFromTVShow()`           |
|    | v0.0 | TV              | `getTVShowReviews()`            |
|    | v0.0 | TV              | `getTVShowScreened()`           |
|    | v0.0 | TV              | `getSimilarTVShows()`           |
|    | v0.0 | TV              | `getTVShowTranslations()`       |
|    | v0.0 | TV              | `getTVShowVideos()`             |
|    | v0.0 | TV              | `getTVShowWatchProviders()`     |
|    | v0.0 | TV              | `rateTVShow()`                  |
|    | v0.0 | TV              | `deleteTVShowRating()`          |
|    | v0.0 | TV              | `getLatestTVShow()`             |
|    | v0.0 | TV              | `getTVAiringToday()`            |
|    | v0.0 | TV              | `getTVOnTheAir()`               |
|    | v0.0 | TV              | `getPopularTVShows()`           |
|    | v0.0 | TV              | `getTopRatedTVShows()`          |
|    | -    | TV Seasons      | -                               |
|    | v0.0 | TV Seasons      | `getTVSeason()`                 |
|    | v0.0 | TV Seasons      | `getTVSeasonRatings()`          |
|    | v0.0 | TV Seasons      | `getTVSeasonAggregateCredits()` |
|    | v0.0 | TV Seasons      | `getTVSeasonChanges()`          |
|    | v0.0 | TV Seasons      | `getTVSeasonCredits()`          |
|    | v0.0 | TV Seasons      | `getTVSeasonExternalIDs()`      |
|    | v0.0 | TV Seasons      | `getTVSeasonImages()`           |
|    | v0.0 | TV Seasons      | `getTVSeasonTranslations()`     |
|    | v0.0 | TV Seasons      | `getTVSeasonVideos()`           |
|    | -    | TV Episodes     | -                               |
|    | v0.0 | TV Episodes     | `getTVEpisodes()`               |
|    | v0.0 | TV Episodes     | `getTVEpisodeRating()`          |
|    | v0.0 | TV Episodes     | `getTVEpisodeChanges()`         |
|    | v0.0 | TV Episodes     | `getTVEpisodeCredits()`         |
|    | v0.0 | TV Episodes     | `getTVEpisodeExternalIDs()`     |
|    | v0.0 | TV Episodes     | `getTVEpisodeImages()`          |
|    | v0.0 | TV Episodes     | `getTVEpisodeTranslations()`    |
|    | v0.0 | TV Episodes     | `rateTVEpisode()`               |
|    | v0.0 | TV Episodes     | `deleteTVEpisodeRating()`       |
|    | v0.0 | TV Episodes     | `getTVEpisodeVideos()`          |
|    | -    | TV Ep. Groups   | -                               |
|    | v0.0 | TV Ep. Groups   | `getEpisodeGroup()`             |
|    | -    | Watch Providers | -                               |
|    | v0.0 | Watch Providers | `getWatchProviderRegions()`     |
|    | v0.0 | Watch Providers | `getWatchProviderRegions()`     |
|    | v0.0 | Watch Providers | `getTVWatchProviders()`         |
