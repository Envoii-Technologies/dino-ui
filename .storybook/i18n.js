import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './../translations/translations/en/';
import deTranslations from './../translations/translations/de/';

const supportedLngs = ['en', 'de'];


i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        lng: 'de',
        fallbackLng: 'de',
        interpolation: {escapeValue: false},
        react: {useSuspense: false},
        supportedLngs,
        resources: {
            en: { translation: enTranslations },
            de: { translation: deTranslations },
          },
    });

export default i18n;