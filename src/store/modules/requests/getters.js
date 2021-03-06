export default {
  requests(state, _getters, _rootState, rootGetters) {
    const peopleId = rootGetters.userId;
    return state.requests.filter(req => req.peopleId === peopleId);
  },
  hasRequests(_state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
