export default {
  async registerPeople(context, data) {
    const userId = context.rootGetters.userId;
    const peopleData = {
      firstName: data.first,
      lastName: data.last,
      desc: data.desc,
      food: data.food,
    };

    const response = await fetch(
      `https://vue-course-2bcef-default-rtdb.europe-west1.firebasedatabase.app/people/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(peopleData),
      }
    );

    if (!response.ok) {
      // error...
    }

    context.commit("registerPeople", {
      ...peopleData,
      id: userId,
    });
  },
};
