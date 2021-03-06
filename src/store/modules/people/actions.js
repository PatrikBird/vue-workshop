export default {
  registerPeople(context, data) {
    const peopleData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      desc: data.desc,
      food: data.food,
    };

    context.commit("registerPeople", peopleData);
  },
};
