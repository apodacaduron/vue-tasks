import Vue from "vue";
import numberGenerator from "@/utils/numberGenerator";

const state = {
  user: null,
  users: [],
  isAuthenticated: false
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
    state.isAuthenticated = true;
  },
  REGISTER_USER(state, user) {
    state.users.unshift(user);
    state.isAuthenticated = true;
  },
  LOGOUT(state) {
    state.user = null;
    state.isAuthenticated = false;
  }
};

const actions = {
  login({ commit, state }, payload) {
    try {
      const user = state.users.find((user) => user.email === payload.email);

      if (!user) {
        Vue.notify({
          title: "User not found",
          type: "error"
        });
        return { status: 404, message: "User not found" };
      }

      if (user.password !== payload.password) {
        Vue.notify({
          title: "Invalid password",
          type: "error"
        });
        return { status: 401, message: "Invalid password" };
      }
      commit("SET_USER", user);
      return { status: 200, message: "Ok" };
    } catch (error) {
      Vue.notify({
        title: error,
        type: "error"
      });
    }
  },
  signUp({ commit, state }, payload) {
    try {
      const userIdx = state.users.findIndex(
        (user) => user.email === payload.email
      );

      if (userIdx > -1) {
        Vue.notify({
          title: "Email already taken",
          type: "error"
        });
        return { status: 409, message: "Email already taken" };
      }

      delete payload.confirmPassword;
      commit("REGISTER_USER", { ...payload, id: numberGenerator(1, 100) });
      commit("SET_USER", payload);
      return { status: 200, message: "Ok" };
    } catch (error) {
      Vue.notify({
        title: error,
        type: "error"
      });
    }
  },
  logout({ commit }) {
    try {
      commit("LOGOUT");
    } catch (error) {
      Vue.notify({
        title: error,
        type: "error"
      });
    }
  }
};

const getters = {
  user: (state) => state.user,
  users: (state) => state.users,
  isAuthenticated: (state) => state.isAuthenticated
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
