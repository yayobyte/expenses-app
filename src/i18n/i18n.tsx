import i18next from 'i18next';
import ar from '../../translationService/ar.json';
import en from '../../translationService/en.json';

const resources = {
  ar: {
    ar: ar,
  },
  en: {
    en: en,
  },
};

i18next.init({
  lng: 'en',
  debug: true,
  resources,
  fallbackLng: 'en',
  saveMissing: true,
});

export default i18next;
