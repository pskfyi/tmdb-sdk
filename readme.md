# TMDB SDK

Deno-first TypeScript library for interacting with
[themoviedb.org](https://www.themoviedb.org/)'s (TMDB) API.

This library transforms fetched data to make it more idiomatic for
JavaScript/TypeScript.

- Replaces `snake_case` properties with `camelCase`
- Renames properties where appropriate
- Properties which would sometimes have `null` or empty string values (`""`) now
  use optional values instead

<h2>Table of Contents</h2>

- [Error Handling](#error-handling)
- [API v3](#api-v3)
  - [Countries](#countries)
  - [Genres](#genres)
  - [Languages](#languages)
  - [Movies](#movies)
    - [Search](#search)
- [Roadmap](#roadmap)

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

| Release | Category        | Function                        |
| :------ | :-------------- | :------------------------------ |
| -       | -               | -                               |
|         | Account         | `getAccount()`                  |
|         | Account         | `getLists()`                    |
|         | Account         | `getFavoriteMovies()`           |
|         | Account         | `getFavoriteTVShows()`          |
|         | Account         | `markAsFavorite()`              |
|         | Account         | `getRatedMovies()`              |
|         | Account         | `getRatedTVShows()`             |
|         | Account         | `getRatedTVEpisodes()`          |
|         | Account         | `getMovieWatchlist()`           |
|         | Account         | `getTVShowWatchlist()`          |
|         | Account         | `addToWatchList()`              |
| -       | -               | -                               |
|         | Authentication  | `createGuestSession()`          |
|         | Authentication  | `createRequestToken()`          |
|         | Authentication  | `createSession()`               |
|         | Authentication  | `validateRequestToken()`        |
|         | Authentication  | `deleteSession()`               |
| -       | -               | -                               |
|         | Certifications  | `getAllMovieCerts()`            |
|         | Certifications  | `getAllTVCerts()`               |
| -       | -               | -                               |
|         | Changes         | `getMovieChanges()`             |
|         | Changes         | `getTVChanges()`                |
|         | Changes         | `getPersonChanges()`            |
| -       | -               | -                               |
|         | Collections     | `getCollectionDetails()`        |
|         | Collections     | `getCollectionImages()`         |
|         | Collections     | `getCollectionTranslations()`   |
| -       | -               | -                               |
|         | Companies       | `getCompanies()`                |
|         | Companies       | `getAltCompanyNames()`          |
|         | Companies       | `getCompanyImages()`            |
| -       | -               | -                               |
|         | Configuration   | `getConfiguration()`            |
| v0.1.0  | Configuration   | `getCountries()`                |
|         | Configuration   | `getJobs()`                     |
| v0.1.0  | Configuration   | `getLanguages()`                |
|         | Configuration   | `getPrimaryTranslations()`      |
|         | Configuration   | `getTimezones()`                |
| -       | -               | -                               |
|         | Credits         | `getCredits()`                  |
| -       | -               | -                               |
|         | Discover        | `discoverMovies()`              |
|         | Discover        | `discoverTV()`                  |
| -       | -               | -                               |
|         | Find            | `find()`                        |
| -       | -               | -                               |
| v0.1.0  | Genres          | `getMovieGenres()`              |
|         | Genres          | `getTVGenres()`                 |
| -       | -               | -                               |
|         | GuestSessions   | `getRatedMovies()`              |
|         | GuestSessions   | `getRatedTVShows()`             |
|         | GuestSessions   | `getRatedTVEpisodes()`          |
| -       | -               | -                               |
|         | Keywords        | `getKeywords()`                 |
|         | Keywords        | `getMoviesByKeyword()`          |
| -       | -               | -                               |
|         | Lists           | `getList()`                     |
|         | Lists           | `checkListItemStatus()`         |
|         | Lists           | `createList()`                  |
|         | Lists           | `addMovieToList()`              |
|         | Lists           | `removeMovieFromList()`         |
|         | Lists           | `clearList()`                   |
|         | Lists           | `deleteList()`                  |
| -       | -               | -                               |
|         | Movies          | `getMovie()`                    |
|         | Movies          | `getMovieAccountStates()`       |
|         | Movies          | `getAltMovieTitles()`           |
|         | Movies          | `getMovieChanges()`             |
|         | Movies          | `getMovieCredits()`             |
|         | Movies          | `getMovieExternalIDs()`         |
|         | Movies          | `getMovieImages()`              |
|         | Movies          | `getMovieKeywords()`            |
|         | Movies          | `getMovieLists()`               |
|         | Movies          | `getRecsFromMovie()`            |
|         | Movies          | `getMovieReleaseDates()`        |
|         | Movies          | `getMovieReviews()`             |
|         | Movies          | `getSimilarMovies()`            |
|         | Movies          | `getMovieTranslations()`        |
|         | Movies          | `getMovieVideos()`              |
|         | Movies          | `getMovieWatchProviders()`      |
|         | Movies          | `rateMovie()`                   |
|         | Movies          | `deleteMovieRating()`           |
|         | Movies          | `getLatestMovie()`              |
|         | Movies          | `getMoviesInTheaters()`         |
|         | Movies          | `getPopularMovies()`            |
|         | Movies          | `getTopRatedMovies()`           |
|         | Movies          | `getUpcomingMovies()`           |
| -       | -               | -                               |
|         | Networks        | `getNetworks()`                 |
|         | Networks        | `getAltNetworkNames()`          |
|         | Networks        | `getNetworkImages()`            |
| -       | -               | -                               |
|         | Trending        | `getTrending()`                 |
| -       | -               | -                               |
|         | People          | `getPerson()`                   |
|         | People          | `getPersonChanges()`            |
|         | People          | `getPersonMovieCredits()`       |
|         | People          | `getPersonTVCredits()`          |
|         | People          | `getPersonCredits()`            |
|         | People          | `getPersonExternalIDs()`        |
|         | People          | `getPersonImages()`             |
|         | People          | `getPersonTaggedImages()`       |
|         | People          | `getPersonTranslations()`       |
|         | People          | `getLatestPerson()`             |
|         | People          | `getPopularPeople()`            |
| -       | -               | -                               |
|         | Reviews         | `getReview()`                   |
| -       | -               | -                               |
|         | Search          | `searchCompanies()`             |
|         | Search          | `searchCollections()`           |
|         | Search          | `searchKeywords()`              |
| v0.1.0  | Search          | `searchMovies()`                |
|         | Search          | `search()`                      |
|         | Search          | `searchPeople()`                |
|         | Search          | `searchTVShows()`               |
| -       | -               | -                               |
|         | TV              | `getTVShow()`                   |
|         | TV              | `getTVShowAccountStates()`      |
|         | TV              | `getTVShowAggregateCredits()`   |
|         | TV              | `getAltTVShowTitles()`          |
|         | TV              | `getTVShowChanges()`            |
|         | TV              | `getTVShowCerts()`              |
|         | TV              | `getTVShowCredits()`            |
|         | TV              | `getTVShowEpisodeGroups()`      |
|         | TV              | `getTVShowExternalIDs()`        |
|         | TV              | `getTVShowImages()`             |
|         | TV              | `getTVShowKeywords()`           |
|         | TV              | `getRecsFromTVShow()`           |
|         | TV              | `getTVShowReviews()`            |
|         | TV              | `getTVShowScreened()`           |
|         | TV              | `getSimilarTVShows()`           |
|         | TV              | `getTVShowTranslations()`       |
|         | TV              | `getTVShowVideos()`             |
|         | TV              | `getTVShowWatchProviders()`     |
|         | TV              | `rateTVShow()`                  |
|         | TV              | `deleteTVShowRating()`          |
|         | TV              | `getLatestTVShow()`             |
|         | TV              | `getTVAiringToday()`            |
|         | TV              | `getTVOnTheAir()`               |
|         | TV              | `getPopularTVShows()`           |
|         | TV              | `getTopRatedTVShows()`          |
| -       | -               | -                               |
|         | TV Seasons      | `getTVSeason()`                 |
|         | TV Seasons      | `getTVSeasonRatings()`          |
|         | TV Seasons      | `getTVSeasonAggregateCredits()` |
|         | TV Seasons      | `getTVSeasonChanges()`          |
|         | TV Seasons      | `getTVSeasonCredits()`          |
|         | TV Seasons      | `getTVSeasonExternalIDs()`      |
|         | TV Seasons      | `getTVSeasonImages()`           |
|         | TV Seasons      | `getTVSeasonTranslations()`     |
|         | TV Seasons      | `getTVSeasonVideos()`           |
| -       | -               | -                               |
|         | TV Episodes     | `getTVEpisodes()`               |
|         | TV Episodes     | `getTVEpisodeRating()`          |
|         | TV Episodes     | `getTVEpisodeChanges()`         |
|         | TV Episodes     | `getTVEpisodeCredits()`         |
|         | TV Episodes     | `getTVEpisodeExternalIDs()`     |
|         | TV Episodes     | `getTVEpisodeImages()`          |
|         | TV Episodes     | `getTVEpisodeTranslations()`    |
|         | TV Episodes     | `rateTVEpisode()`               |
|         | TV Episodes     | `deleteTVEpisodeRating()`       |
|         | TV Episodes     | `getTVEpisodeVideos()`          |
| -       | -               | -                               |
|         | TV Ep. Groups   | `getEpisodeGroup()`             |
| -       | -               | -                               |
|         | Watch Providers | `getWatchProviderRegions()`     |
|         | Watch Providers | `getWatchProviderRegions()`     |
|         | Watch Providers | `getTVWatchProviders()`         |
