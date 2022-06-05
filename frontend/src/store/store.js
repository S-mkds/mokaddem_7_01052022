import { createStore } from "vuex";

// Create a nex store instance

const store = createStore({
  state: {
    authObj: {
      pseudo: "",
      userId: "",
      token: "",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
