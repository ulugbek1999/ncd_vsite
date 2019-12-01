export const state = () => ({
  isAuthenticated: false,
  userData: null
});

export const mutations = {
  SET_USER_DATA(state, payload) {
    state.userData = payload;
    state.isAuthenticated = true;
  }
};
