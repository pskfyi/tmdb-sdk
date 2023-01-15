import { BASE_URL } from "../v3/constants.ts";
import { handleNon200Response } from "./handleNon200Response.ts";

/** @internal */
export async function fetchJSONv3(
  path: `/${string}`,
  apiKey: string,
  params?: Record<string, string>,
) {
  const url = `${BASE_URL}${path}?api_key=${apiKey}`;

  const response = await fetch(
    params ? `${url}&${new URLSearchParams(params)}` : url,
  );

  await handleNon200Response(response);

  return await response.json();
}
