import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import koJSON from '@assets/i18n/ko.json';
import enJSON from '@assets/i18n/en.json';

/* https://github.com/i18next/i18next
 */
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: {
        translations: koJSON,
      },
      en: {
        translations: enJSON,
      },
    },
    fallbackLng: 'ko',
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
