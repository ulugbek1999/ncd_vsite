import CMSService from "@/services/CMSService.js";

export const state = () => ({
  cmsData: {},
  slides: [],
  lang: "ru"
});

export const mutations = {
  SET_CMS_DATA(state, cmsData) {
    state.cmsData = cmsData;
  },
  CHANGE_LANGUAGE(state, language) {
    state.lang = language;
  }
};

export const actions = {
  nuxtServerInit({ commit, error }, { req }) {
    console.log(error);
    console.log(req);
    return CMSService.getAPI().then(response => {
      commit("SET_CMS_DATA", response.data);
    });
  }
};
