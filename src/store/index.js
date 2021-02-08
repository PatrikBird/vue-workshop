import { createStore } from "vuex";

import peopleModule from "./modules/people/index";

const store = createStore({
  modules: {
    people: peopleModule,
  },
});

export default store;
