import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18NextHttpBackend from "i18next-http-backend";
import { getLocales } from 'expo-localization';
import en from './en/translation.json'
import ar from './ar/translation.json'

const deviceLanguage = getLocales()[0].languageCode;

const resources = {
	en: {
		translation: en,
	},
	ar: {
		translation: ar,
	}
}

i18n
	.use(I18NextHttpBackend)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'ar',
		lng: deviceLanguage,
		resources,
	})

export default i18n
