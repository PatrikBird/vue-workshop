export default {
  registerPeople(state, payload) {
    state.people.push(payload);
  },
  setPeople(state, payload) {
    state.people = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
