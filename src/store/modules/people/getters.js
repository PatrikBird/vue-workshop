export default {
  people(state) {
    return state.people;
  },
  hasPeople(state) {
    return state.people && state.people.length > 0;
  },
};
