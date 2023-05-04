import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18NextHttpBackend, { HttpBackendOptions,  } from "i18next-http-backend";
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

// i18n
// 	.use(I18NextHttpBackend)
// 	.use(initReactI18next)
// 	.init({
// 		debug: true,
// 		fallbackLng: 'ar',
// 		lng: deviceLanguage,
// 		resources,
// 	})

const httpBackendOptions: HttpBackendOptions = {
	requestOptions: {
		mode: 'cors',
		credentials: 'same-origin',
		cache: 'default',
		headers: {
			'Accept': 'application/json',
			host: 'localhost:3000'
		}
	}
}

const TRANSLATION_SERVICE = 'http://localhost:3000'

const fetchTranslation = (options: HttpBackendOptions) =>
	fetch(`${TRANSLATION_SERVICE}/strings`, {
		...options.requestOptions,
	})
		// .then((res) => {
		// 	return res.json()
		// })
		// .then ((res) => {
		// 	console.log(res)
		// })




i18n
	.use(I18NextHttpBackend)
	.init<HttpBackendOptions>({
		backend: {
			...httpBackendOptions,
			request: fetchTranslation,
		}
	})

export default i18n
