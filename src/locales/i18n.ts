import i18n from "i18next";
import I18NextHttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import { getLocales } from "expo-localization";

const deviceLanguage = getLocales()[0].languageCode;

const TRANSLATION_SERVICE = "http://localhost:3000";
const requestOptions: HttpBackendOptions["requestOptions"] = {
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  headers: {
    Accept: "application/json, text/html",
    host: TRANSLATION_SERVICE,
  },
};

i18n.use(I18NextHttpBackend).init<HttpBackendOptions>(
  {
    debug: true,
    fallbackLng: "ar",
    lng: deviceLanguage,
    load: "languageOnly",
    partialBundledLanguages: true,
    react: {
      useSuspense: true,
    },
    backend: {
      requestOptions,
      loadPath: `${TRANSLATION_SERVICE}/locales/{{lng}}/{{ns}}.json`,
    },
  },
  (err, t) => {
    if (err) return console.error(err);
  }
);

export default i18n;
