import { Language } from "./types.ts";

export type LanguageCode =
  | "bi"
  | "cs"
  | "ba"
  | "ae"
  | "av"
  | "de"
  | "mt"
  | "om"
  | "rm"
  | "so"
  | "ts"
  | "vi"
  | "gn"
  | "ig"
  | "it"
  | "ki"
  | "ku"
  | "la"
  | "ln"
  | "lb"
  | "ny"
  | "pl"
  | "si"
  | "to"
  | "az"
  | "ce"
  | "cu"
  | "da"
  | "hz"
  | "ie"
  | "rw"
  | "mi"
  | "no"
  | "pi"
  | "sk"
  | "se"
  | "sm"
  | "uk"
  | "en"
  | "ay"
  | "ca"
  | "eo"
  | "ha"
  | "ho"
  | "hu"
  | "io"
  | "ii"
  | "kn"
  | "kv"
  | "li"
  | "oj"
  | "ru"
  | "sr"
  | "sv"
  | "ty"
  | "zu"
  | "ka"
  | "ch"
  | "be"
  | "br"
  | "kw"
  | "fi"
  | "sh"
  | "nn"
  | "tt"
  | "tg"
  | "vo"
  | "ps"
  | "mk"
  | "fr"
  | "bm"
  | "eu"
  | "fj"
  | "id"
  | "mg"
  | "na"
  | "xx"
  | "qu"
  | "sq"
  | "ti"
  | "tw"
  | "wa"
  | "ab"
  | "bs"
  | "af"
  | "an"
  | "fy"
  | "gu"
  | "ik"
  | "ja"
  | "ko"
  | "lg"
  | "nl"
  | "os"
  | "el"
  | "bn"
  | "cr"
  | "km"
  | "lo"
  | "nd"
  | "ne"
  | "sc"
  | "sw"
  | "tl"
  | "ur"
  | "ee"
  | "aa"
  | "co"
  | "et"
  | "is"
  | "ks"
  | "kr"
  | "ky"
  | "kj"
  | "nr"
  | "or"
  | "wo"
  | "za"
  | "ar"
  | "cv"
  | "fo"
  | "hr"
  | "ms"
  | "nb"
  | "rn"
  | "sn"
  | "st"
  | "tr"
  | "am"
  | "fa"
  | "hy"
  | "pa"
  | "as"
  | "ia"
  | "lv"
  | "lu"
  | "mr"
  | "mn"
  | "pt"
  | "th"
  | "tk"
  | "ve"
  | "dv"
  | "gv"
  | "kl"
  | "kk"
  | "lt"
  | "my"
  | "sl"
  | "sd"
  | "cn"
  | "hi"
  | "cy"
  | "ht"
  | "iu"
  | "jv"
  | "mh"
  | "sa"
  | "ss"
  | "te"
  | "kg"
  | "ml"
  | "uz"
  | "sg"
  | "xh"
  | "es"
  | "su"
  | "ug"
  | "yi"
  | "yo"
  | "zh"
  | "he"
  | "bo"
  | "ak"
  | "mo"
  | "ng"
  | "dz"
  | "ff"
  | "gd"
  | "ga"
  | "gl"
  | "nv"
  | "oc"
  | "ro"
  | "ta"
  | "tn"
  | "bg";

export const LANGUAGES: Record<LanguageCode, Language> = {
  "bi": { "isoCode": "bi", "name": "Bislama" },
  "cs": { "isoCode": "cs", "name": "Czech", "nativeName": "Český" },
  "ba": { "isoCode": "ba", "name": "Bashkir" },
  "ae": { "isoCode": "ae", "name": "Avestan" },
  "av": { "isoCode": "av", "name": "Avaric" },
  "de": { "isoCode": "de", "name": "German", "nativeName": "Deutsch" },
  "mt": { "isoCode": "mt", "name": "Maltese", "nativeName": "Malti" },
  "om": { "isoCode": "om", "name": "Oromo" },
  "rm": { "isoCode": "rm", "name": "Raeto-Romance" },
  "so": { "isoCode": "so", "name": "Somali", "nativeName": "Somali" },
  "ts": { "isoCode": "ts", "name": "Tsonga" },
  "vi": { "isoCode": "vi", "name": "Vietnamese", "nativeName": "Tiếng Việt" },
  "gn": { "isoCode": "gn", "name": "Guarani" },
  "ig": { "isoCode": "ig", "name": "Igbo" },
  "it": { "isoCode": "it", "name": "Italian", "nativeName": "Italiano" },
  "ki": { "isoCode": "ki", "name": "Kikuyu" },
  "ku": { "isoCode": "ku", "name": "Kurdish" },
  "la": { "isoCode": "la", "name": "Latin", "nativeName": "Latin" },
  "ln": { "isoCode": "ln", "name": "Lingala" },
  "lb": { "isoCode": "lb", "name": "Letzeburgesch" },
  "ny": { "isoCode": "ny", "name": "Chichewa; Nyanja" },
  "pl": { "isoCode": "pl", "name": "Polish", "nativeName": "Polski" },
  "si": { "isoCode": "si", "name": "Sinhalese", "nativeName": "සිංහල" },
  "to": { "isoCode": "to", "name": "Tonga" },
  "az": { "isoCode": "az", "name": "Azerbaijani", "nativeName": "Azərbaycan" },
  "ce": { "isoCode": "ce", "name": "Chechen" },
  "cu": { "isoCode": "cu", "name": "Slavic" },
  "da": { "isoCode": "da", "name": "Danish", "nativeName": "Dansk" },
  "hz": { "isoCode": "hz", "name": "Herero" },
  "ie": { "isoCode": "ie", "name": "Interlingue" },
  "rw": { "isoCode": "rw", "name": "Kinyarwanda", "nativeName": "Kinyarwanda" },
  "mi": { "isoCode": "mi", "name": "Maori" },
  "no": { "isoCode": "no", "name": "Norwegian", "nativeName": "Norsk" },
  "pi": { "isoCode": "pi", "name": "Pali" },
  "sk": { "isoCode": "sk", "name": "Slovak", "nativeName": "Slovenčina" },
  "se": { "isoCode": "se", "name": "Northern Sami" },
  "sm": { "isoCode": "sm", "name": "Samoan" },
  "uk": { "isoCode": "uk", "name": "Ukrainian", "nativeName": "Український" },
  "en": { "isoCode": "en", "name": "English", "nativeName": "English" },
  "ay": { "isoCode": "ay", "name": "Aymara" },
  "ca": { "isoCode": "ca", "name": "Catalan", "nativeName": "Català" },
  "eo": { "isoCode": "eo", "name": "Esperanto", "nativeName": "Esperanto" },
  "ha": { "isoCode": "ha", "name": "Hausa", "nativeName": "Hausa" },
  "ho": { "isoCode": "ho", "name": "Hiri Motu" },
  "hu": { "isoCode": "hu", "name": "Hungarian", "nativeName": "Magyar" },
  "io": { "isoCode": "io", "name": "Ido" },
  "ii": { "isoCode": "ii", "name": "Yi" },
  "kn": { "isoCode": "kn", "name": "Kannada", "nativeName": "?????" },
  "kv": { "isoCode": "kv", "name": "Komi" },
  "li": { "isoCode": "li", "name": "Limburgish" },
  "oj": { "isoCode": "oj", "name": "Ojibwa" },
  "ru": { "isoCode": "ru", "name": "Russian", "nativeName": "Pусский" },
  "sr": { "isoCode": "sr", "name": "Serbian", "nativeName": "Srpski" },
  "sv": { "isoCode": "sv", "name": "Swedish", "nativeName": "svenska" },
  "ty": { "isoCode": "ty", "name": "Tahitian" },
  "zu": { "isoCode": "zu", "name": "Zulu", "nativeName": "isiZulu" },
  "ka": { "isoCode": "ka", "name": "Georgian", "nativeName": "ქართული" },
  "ch": { "isoCode": "ch", "name": "Chamorro", "nativeName": "Finu' Chamorro" },
  "be": {
    "isoCode": "be",
    "name": "Belarusian",
    "nativeName": "беларуская мова",
  },
  "br": { "isoCode": "br", "name": "Breton" },
  "kw": { "isoCode": "kw", "name": "Cornish" },
  "fi": { "isoCode": "fi", "name": "Finnish", "nativeName": "suomi" },
  "sh": { "isoCode": "sh", "name": "Serbo-Croatian" },
  "nn": { "isoCode": "nn", "name": "Norwegian Nynorsk" },
  "tt": { "isoCode": "tt", "name": "Tatar" },
  "tg": { "isoCode": "tg", "name": "Tajik" },
  "vo": { "isoCode": "vo", "name": "Volapük" },
  "ps": { "isoCode": "ps", "name": "Pushto", "nativeName": "پښتو" },
  "mk": { "isoCode": "mk", "name": "Macedonian" },
  "fr": { "isoCode": "fr", "name": "French", "nativeName": "Français" },
  "bm": { "isoCode": "bm", "name": "Bambara", "nativeName": "Bamanankan" },
  "eu": { "isoCode": "eu", "name": "Basque", "nativeName": "euskera" },
  "fj": { "isoCode": "fj", "name": "Fijian" },
  "id": {
    "isoCode": "id",
    "name": "Indonesian",
    "nativeName": "Bahasa indonesia",
  },
  "mg": { "isoCode": "mg", "name": "Malagasy" },
  "na": { "isoCode": "na", "name": "Nauru" },
  "xx": { "isoCode": "xx", "name": "No Language", "nativeName": "No Language" },
  "qu": { "isoCode": "qu", "name": "Quechua" },
  "sq": { "isoCode": "sq", "name": "Albanian", "nativeName": "shqip" },
  "ti": { "isoCode": "ti", "name": "Tigrinya" },
  "tw": { "isoCode": "tw", "name": "Twi" },
  "wa": { "isoCode": "wa", "name": "Walloon" },
  "ab": { "isoCode": "ab", "name": "Abkhazian" },
  "bs": { "isoCode": "bs", "name": "Bosnian", "nativeName": "Bosanski" },
  "af": { "isoCode": "af", "name": "Afrikaans", "nativeName": "Afrikaans" },
  "an": { "isoCode": "an", "name": "Aragonese" },
  "fy": { "isoCode": "fy", "name": "Frisian" },
  "gu": { "isoCode": "gu", "name": "Gujarati" },
  "ik": { "isoCode": "ik", "name": "Inupiaq" },
  "ja": { "isoCode": "ja", "name": "Japanese", "nativeName": "日本語" },
  "ko": { "isoCode": "ko", "name": "Korean", "nativeName": "한국어/조선말" },
  "lg": { "isoCode": "lg", "name": "Ganda" },
  "nl": { "isoCode": "nl", "name": "Dutch", "nativeName": "Nederlands" },
  "os": { "isoCode": "os", "name": "Ossetian; Ossetic" },
  "el": { "isoCode": "el", "name": "Greek", "nativeName": "ελληνικά" },
  "bn": { "isoCode": "bn", "name": "Bengali", "nativeName": "বাংলা" },
  "cr": { "isoCode": "cr", "name": "Cree" },
  "km": { "isoCode": "km", "name": "Khmer" },
  "lo": { "isoCode": "lo", "name": "Lao" },
  "nd": { "isoCode": "nd", "name": "Ndebele" },
  "ne": { "isoCode": "ne", "name": "Nepali" },
  "sc": { "isoCode": "sc", "name": "Sardinian" },
  "sw": { "isoCode": "sw", "name": "Swahili", "nativeName": "Kiswahili" },
  "tl": { "isoCode": "tl", "name": "Tagalog" },
  "ur": { "isoCode": "ur", "name": "Urdu", "nativeName": "اردو" },
  "ee": { "isoCode": "ee", "name": "Ewe", "nativeName": "Èʋegbe" },
  "aa": { "isoCode": "aa", "name": "Afar" },
  "co": { "isoCode": "co", "name": "Corsican" },
  "et": { "isoCode": "et", "name": "Estonian", "nativeName": "Eesti" },
  "is": { "isoCode": "is", "name": "Icelandic", "nativeName": "Íslenska" },
  "ks": { "isoCode": "ks", "name": "Kashmiri" },
  "kr": { "isoCode": "kr", "name": "Kanuri" },
  "ky": { "isoCode": "ky", "name": "Kirghiz", "nativeName": "??????" },
  "kj": { "isoCode": "kj", "name": "Kuanyama" },
  "nr": { "isoCode": "nr", "name": "Ndebele" },
  "or": { "isoCode": "or", "name": "Oriya" },
  "wo": { "isoCode": "wo", "name": "Wolof", "nativeName": "Wolof" },
  "za": { "isoCode": "za", "name": "Zhuang" },
  "ar": { "isoCode": "ar", "name": "Arabic", "nativeName": "العربية" },
  "cv": { "isoCode": "cv", "name": "Chuvash" },
  "fo": { "isoCode": "fo", "name": "Faroese" },
  "hr": { "isoCode": "hr", "name": "Croatian", "nativeName": "Hrvatski" },
  "ms": { "isoCode": "ms", "name": "Malay", "nativeName": "Bahasa melayu" },
  "nb": { "isoCode": "nb", "name": "Norwegian Bokmål", "nativeName": "Bokmål" },
  "rn": { "isoCode": "rn", "name": "Rundi", "nativeName": "Kirundi" },
  "sn": { "isoCode": "sn", "name": "Shona" },
  "st": { "isoCode": "st", "name": "Sotho" },
  "tr": { "isoCode": "tr", "name": "Turkish", "nativeName": "Türkçe" },
  "am": { "isoCode": "am", "name": "Amharic" },
  "fa": { "isoCode": "fa", "name": "Persian", "nativeName": "فارسی" },
  "hy": { "isoCode": "hy", "name": "Armenian" },
  "pa": { "isoCode": "pa", "name": "Punjabi", "nativeName": "ਪੰਜਾਬੀ" },
  "as": { "isoCode": "as", "name": "Assamese" },
  "ia": { "isoCode": "ia", "name": "Interlingua" },
  "lv": { "isoCode": "lv", "name": "Latvian", "nativeName": "Latviešu" },
  "lu": { "isoCode": "lu", "name": "Luba-Katanga" },
  "mr": { "isoCode": "mr", "name": "Marathi" },
  "mn": { "isoCode": "mn", "name": "Mongolian" },
  "pt": { "isoCode": "pt", "name": "Portuguese", "nativeName": "Português" },
  "th": { "isoCode": "th", "name": "Thai", "nativeName": "ภาษาไทย" },
  "tk": { "isoCode": "tk", "name": "Turkmen" },
  "ve": { "isoCode": "ve", "name": "Venda" },
  "dv": { "isoCode": "dv", "name": "Divehi" },
  "gv": { "isoCode": "gv", "name": "Manx" },
  "kl": { "isoCode": "kl", "name": "Kalaallisut" },
  "kk": { "isoCode": "kk", "name": "Kazakh", "nativeName": "қазақ" },
  "lt": { "isoCode": "lt", "name": "Lithuanian", "nativeName": "Lietuvių" },
  "my": { "isoCode": "my", "name": "Burmese" },
  "sl": { "isoCode": "sl", "name": "Slovenian", "nativeName": "Slovenščina" },
  "sd": { "isoCode": "sd", "name": "Sindhi" },
  "cn": { "isoCode": "cn", "name": "Cantonese", "nativeName": "广州话 / 廣州話" },
  "hi": { "isoCode": "hi", "name": "Hindi", "nativeName": "हिन्दी" },
  "cy": { "isoCode": "cy", "name": "Welsh", "nativeName": "Cymraeg" },
  "ht": { "isoCode": "ht", "name": "Haitian; Haitian Creole" },
  "iu": { "isoCode": "iu", "name": "Inuktitut" },
  "jv": { "isoCode": "jv", "name": "Javanese" },
  "mh": { "isoCode": "mh", "name": "Marshall" },
  "sa": { "isoCode": "sa", "name": "Sanskrit" },
  "ss": { "isoCode": "ss", "name": "Swati" },
  "te": { "isoCode": "te", "name": "Telugu", "nativeName": "తెలుగు" },
  "kg": { "isoCode": "kg", "name": "Kongo" },
  "ml": { "isoCode": "ml", "name": "Malayalam" },
  "uz": { "isoCode": "uz", "name": "Uzbek", "nativeName": "ozbek" },
  "sg": { "isoCode": "sg", "name": "Sango" },
  "xh": { "isoCode": "xh", "name": "Xhosa" },
  "es": { "isoCode": "es", "name": "Spanish", "nativeName": "Español" },
  "su": { "isoCode": "su", "name": "Sundanese" },
  "ug": { "isoCode": "ug", "name": "Uighur" },
  "yi": { "isoCode": "yi", "name": "Yiddish" },
  "yo": { "isoCode": "yo", "name": "Yoruba", "nativeName": "Èdè Yorùbá" },
  "zh": { "isoCode": "zh", "name": "Mandarin", "nativeName": "普通话" },
  "he": { "isoCode": "he", "name": "Hebrew", "nativeName": "עִבְרִית" },
  "bo": { "isoCode": "bo", "name": "Tibetan" },
  "ak": { "isoCode": "ak", "name": "Akan" },
  "mo": { "isoCode": "mo", "name": "Moldavian" },
  "ng": { "isoCode": "ng", "name": "Ndonga" },
  "dz": { "isoCode": "dz", "name": "Dzongkha" },
  "ff": { "isoCode": "ff", "name": "Fulah", "nativeName": "Fulfulde" },
  "gd": { "isoCode": "gd", "name": "Gaelic" },
  "ga": { "isoCode": "ga", "name": "Irish", "nativeName": "Gaeilge" },
  "gl": { "isoCode": "gl", "name": "Galician", "nativeName": "Galego" },
  "nv": { "isoCode": "nv", "name": "Navajo" },
  "oc": { "isoCode": "oc", "name": "Occitan" },
  "ro": { "isoCode": "ro", "name": "Romanian", "nativeName": "Română" },
  "ta": { "isoCode": "ta", "name": "Tamil", "nativeName": "தமிழ்" },
  "tn": { "isoCode": "tn", "name": "Tswana" },
  "bg": {
    "isoCode": "bg",
    "name": "Bulgarian",
    "nativeName": "български език",
  },
};
