import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from '@/lang/ko';
import en from '@/lang/en';

// console.log("ko : ", ko );

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


