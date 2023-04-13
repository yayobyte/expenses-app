import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n/i18n';
import App from './App';
import './i18n';

<I18nextProvider i18n={i18n}>
  <App />
</I18nextProvider>;
