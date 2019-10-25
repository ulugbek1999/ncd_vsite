

import CMSService from '@/services/CMSService.js';


export const state = () => ({
  cmsData: {},
  slides: [],
  services: [
    {
        image: require("~/static/pages/database.jpg"),
        title: "База данных соискателей",
        content: "Структурированные данные и быстрый поиск"
    },
    {
        image: require("~/static/pages/profile.jpg"),
        title: "Профиль соискателя",
        content: "Личная карточка для оценки квалификации"
    },
    {
        image: require("~/static/pages/consulting.jpg"),
        title: "Бесплатная консультация",
        content: "Мы ответим на все интересующие вас вопросы"
    },
    {
        image: require("~/static/pages/visa.jpg"),
        title: "Содействие в получении виз",
        content: "Консультации по визовым вопросам"
    },
    {
        image: require("~/static/pages/departure.jpg"),
        title: "Подготовка к отъезду",
        content: "Финальные шаги"
    },
    {
        image: require("~/static/pages/education.jpg"),
        title: "Предоставления обучения",
        content: "Повышение квалификации и уровня владения языком"
    }
  ]
});

export const mutations = {
  SET_CMS_DATA(state, cmsData) {
    state.cmsData = cmsData;
  }
};

export const actions = {
  nuxtServerInit({commit, error}, {req}) {
    return CMSService.getAPI().then((response) => {
      commit('SET_CMS_DATA', response.data);
    });
  },
};
