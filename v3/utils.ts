import { LanguageOptions } from "./types.ts";

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
