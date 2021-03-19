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
  async loadPeople(context) {
    const response = await fetch(
      `https://vue-course-2bcef-default-rtdb.europe-west1.firebasedatabase.app/people.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const peoples = [];

    for (const key in responseData) {
      const people = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        desc: responseData[key].desc,
        food: responseData[key].food,
      };
      peoples.push(people);
    }

    context.commit("setPeople", peoples);
  },
};
