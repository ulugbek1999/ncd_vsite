import Vue from "vue";
import dict from "~/settings/dictionary";

export const CMS_DOMAIN = "https://manage.uzncd.com";
export const AUTH_DOMAIN = "http://127.0.0.1:8000";

// DICTIONARY is used to handle different languages
export const DICTIONARY = dict;

export const eventBus = new Vue();

export const ga_id = "UA-149343577-2";

export const languages = {
  en: {
    image: require("~/static/pages/english-icon.png"),
    lang: "En"
  },
  ru: {
    image: require("~/static/pages/russian-icon.png"),
    lang: "Ru"
  },
  uz: {
    image: require("~/static/pages/uzbek-icon.png"),
    lang: "Uz"
  },
  kz: {
    image: require("~/static/pages/kazakh-icon.png"),
    lang: "Kz"
  }
};
