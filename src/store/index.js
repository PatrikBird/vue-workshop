import { createStore } from "vuex";

import peopleModule from "./modules/people/index";

const store = createStore({
  modules: {
    people: peopleModule,
  },
  state() {
    return {
      userId: "p4",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
