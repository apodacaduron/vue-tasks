const state = {
  tasks: []
};

const mutations = {
  SET_TASKS({ state }, tasks) {
    state.tasks = tasks;
  }
};

const actions = {
  async getTasks({ commit }) {
    try {
      commit("SET_TASKS");
    } catch (error) {
      console.log(error);
    }
  }
};

const getters = {
  tasks: (state) => state.tasks
};

export default {
  state,
  mutations,
  actions,
  getters
};
