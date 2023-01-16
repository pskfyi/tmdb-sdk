import { BASE_URL } from "../v3/constants.ts";
import { handleNon200Response } from "./handleNon200Response.ts";

/** @internal */
export async function fetchJSONv3(
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
