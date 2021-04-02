import Vue from "vue";
import axios from "axios";
import dayjs from "dayjs";

const state = {
  tasks: [],
  isLoading: false
};

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  UPDATE_TASK(state, { column, value, task }) {
    const idx = state.tasks.findIndex((_task) => _task.id === task.id);
    if (idx === -1) return;

    Vue.set(state.tasks, idx, { ...state.tasks[idx], [column]: value });
  },
  ADD_TASK(state, task) {
    state.tasks.unshift(task);
  },
  DELETE_TASK(state, task) {
    const idx = state.tasks.findIndex((_task) => _task.id === task.id);
    if (idx === -1) return;

    Vue.delete(state.tasks, idx);
  },
  CLEAN_TASKS(state) {
    state.tasks = [];
  },
  IS_LOADING(state) {
    state.isLoading = false;
  }
};

const actions = {
  async loadTasks({ commit, getters }) {
    try {
      commit("IS_LOADING", true);
      const result = await axios.get(
        `http://jsonplaceholder.typicode.com/todos?userId=${getters.user.id}`
      );
      result.data.forEach(
        (task) => (task.date = dayjs().format("YYYY-MM-DD HH:mm:ss"))
      );
      commit("SET_TASKS", result.data);
      commit("IS_LOADING", false);
    } catch (error) {
      Vue.notify({
        title: error,
        type: "error"
      });
    }
  },
  async addTask({ commit, getters, state }, taskText) {
    commit("ADD_TASK", {
      title: taskText,
      completed: false,
      id: Math.max(...state.tasks.map((task) => task.id)) + 1,
      userId: getters.user.id,
      date: dayjs().format("YYYY-MM-DD HH:mm:ss")
    });
  },
  async updateTask({ commit }, { column, value, task }) {
    setTimeout(() => {
      commit("UPDATE_TASK", { column, value, task });
    }, 250);
  },
  async cleanTasks({ commit }) {
    commit("CLEAN_TASKS");
  },
  async deleteTask({ commit }, task) {
    commit("DELETE_TASK", task);
  }
};

const getters = {
  tasks: (state) => state.tasks,
  isLoading: (state) => state.isLoading,
  user: (state, getters, rootState, rootGetters) => rootGetters["auth/user"]
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
