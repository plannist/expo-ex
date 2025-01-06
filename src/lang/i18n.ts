import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from '@/lang/ko/translation.json';
import en from '@/lang/en/translation.json';

//번역데이터 lang 폴더
const resources = {
    en: {
        translation: en,
    },
    ko: {
        translation: ko,
    },
}

export type Language = keyof typeof resources;

// console.log("ko: ", ko);

i18n
    .use(initReactI18next)
    .init({
        resources,
        debug:true,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;


