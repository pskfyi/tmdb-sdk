import { handleNon200Response } from "../utils/handleNon200Response.ts";
import { BASE_URL } from "./constants.ts";
import { LanguageOptions } from "./types.ts";

/** @internal */
export async function fetchJSON(
  path: `/${string}`,
  apiKey: string,
  params?: Record<string, string | number | boolean>,
) {
  const url = `${BASE_URL}${path}?api_key=${apiKey}`;

  const response = await fetch(
    params
      ? `${url}&${new URLSearchParams(params as Record<string, string>)}`
      : url,
  );

  await handleNon200Response(response);

  return await response.json();
}

/** @internal */
export function languageOptionsToISO6391String<T extends LanguageOptions>(
  options: T,
) {
  return options.language !== undefined
    ? "country" in options
      ? `${options.language}-${options.country}`
      : options.language
    : "";
}
