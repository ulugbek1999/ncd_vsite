export const state = () => ({
  employees: null
});

export const mutations = {
  SET_EMPLOYEES_DATA(state, payload) {
    state.employees = payload;
  }
};
