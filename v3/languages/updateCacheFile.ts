/**
 * @internal
 * Script to run locally in development to fetch languages and cache the
 * response.
 */
import { resolve } from "https://deno.land/std@0.170.0/path/mod.ts";
import { TMDB_API_KEY } from "../../env.ts";
import { tsStringUnion } from "../../utils/codeGen.ts";
import { getLanguages } from "./getLanguages.ts";

const __dirname = new URL(".", import.meta.url).pathname;
const CACHE_FILE_PATH = resolve(__dirname, "languages.ts");
const languages = await getLanguages(TMDB_API_KEY);
const languagesTS = `// This file is generated by ./updateCacheFile.ts
import { Language } from "./types.ts"

export type LanguageCode = ${tsStringUnion(Object.keys(languages))}

export const LANGUAGES: Record<LanguageCode, Language> = ${
  JSON.stringify(languages)
}
`;

await Deno.writeTextFile(CACHE_FILE_PATH, languagesTS);
await Deno.run({ cmd: ["deno", "fmt", CACHE_FILE_PATH] }).status();
