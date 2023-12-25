import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_EN from "./locales/en/home.json";
import ABOUT_EN from "./locales/en/about.json";
import SERVICE_EN from "./locales/en/service.json";
import PROJECT_EN from "./locales/en/project.json";
import MEMBER_EN from "./locales/en/member.json";
import HOME_VI from "./locales/vi/home.json";
import ABOUT_VI from "./locales/vi/about.json";
import SERVICE_VI from "./locales/vi/service.json";
import PROJECT_VI from "./locales/vi/project.json";
import MEMBER_VI from "./locales/vi/member.json";
export const locales = {
    en: "En",
    vi: "Vi",
};

const resources = {
    en: {
        home: HOME_EN,
        about: ABOUT_EN,
        service: SERVICE_EN,
        project: PROJECT_EN,
        member: MEMBER_EN,
    },
    vi: {
        home: HOME_VI,
        about: ABOUT_VI,
        service: SERVICE_VI,
        project: PROJECT_VI,
        member: MEMBER_VI,
    },
};
const defaultNS = "home";
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem("lng") || "en",
        ns: ["home", "about", "service", "project", "member"],
        defaultNS,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
