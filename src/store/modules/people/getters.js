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
    return peoples.some(people => people.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) return true;
    const currentTimestamp = new Date().getTime();
    return (currentTimestamp - lastFetch) / 1000 > 60;
  },
};
