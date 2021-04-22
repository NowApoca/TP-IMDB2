import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import translationES from './public/locales/es/translation.json';
import translationEN from './public/locales/en/translation.json';

// the translations
const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
