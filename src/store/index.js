import { createStore } from "vuex";

import peopleModule from "./modules/people/index";
import requestsModule from "./modules/requests/index";

const store = createStore({
  modules: {
    people: peopleModule,
    requests: requestsModule,
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
