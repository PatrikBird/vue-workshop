export default {
  people(state) {
    return state.people;
  },
  hasPeople(state) {
    return state.people && state.people.length > 0;
  },
  isPeople(_state, getters, _rootState, rootGetters) {
    const peoples = getters.people;
    const userId = rootGetters.userId;
    console.log(peoples);
    console.log(userId);
    return peoples.some(people => people.id === userId);
  },
};
