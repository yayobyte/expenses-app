import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from '../../translationService/ar.json';
import en from '../../translationService/en.json';
import I18NextHttpBackend from 'i18next-http-backend';

const resources = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
};

i18next.use(I18NextHttpBackend).use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources,
  fallbackLng: 'ar',
});

export default i18next;
