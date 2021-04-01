const state = {
  user: {},
  isAuthenticated: false
};

const mutations = {
  SET_USER({ state }, user) {
    state.user = user;
    state.isAuthenticated = true;
  }
};

const actions = {
  async login({ commit }, payload) {
    try {
      await localStorage.setItem(payload);
      commit("SET_USER", payload);
    } catch (error) {
      console.log(error);
    }
  }
};

const getters = {
  user: (state) => state.users,
  isAuthenticated: (state) => state.isAuthenticated
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
