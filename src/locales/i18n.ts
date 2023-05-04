import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import { getLocales } from "expo-localization";
import en from "./en/translation.json";
import ar from "./ar/translation.json";

const deviceLanguage = getLocales()[0].languageCode;

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

// i18n
// 	.use(I18NextHttpBackend)
// 	.use(initReactI18next)
// 	.init({
// 		debug: true,
// 		fallbackLng: 'ar',
// 		lng: deviceLanguage,
// 		resources,
// 	})

const TRANSLATION_SERVICE = "http://192.168.70.2:3000";
const requestOptions: HttpBackendOptions["requestOptions"] = {
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  headers: {
    Accept: "application/json, text/html",
    host: TRANSLATION_SERVICE,
  },
};
// const loadTranslations = (options: HttpBackendOptions) => {
//   return fetch(`${TRANSLATION_SERVICE}/strings`, { ...options.requestOptions })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log({ res });
//       return res;
//     });
// };

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
      //   request: (options, url, payload, callback) => {
      //     try {
      //       loadTranslations(options).then((result) => {
      //         console.log({ result });
      //         callback(null, {
      //           data: result,
      //           status: 200,
      //         });
      //       });
      //     } catch (e) {
      //       console.error(e);
      //       callback(null, {
      //         data: {},
      //         status: 500,
      //       });
      //     }
      //   },
    },
  },
  (err, t) => {
    if (err) return console.error(err);
  }
);

export default i18n;
