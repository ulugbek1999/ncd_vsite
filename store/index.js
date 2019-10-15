

import CMSService from '@/services/CMSService.js';


export const state = () => ({
  cmsData: {},
  slides: [],
});

export const mutations = {
  SET_CMS_DATA(state, cmsData) {
    state.cmsData = cmsData;
  },
};

export const actions = {
  nuxtServerInit({commit, error}, {req}) {
    return CMSService.getAPI().then((response) => {
      commit('SET_CMS_DATA', response.data);
    });
  },
};
