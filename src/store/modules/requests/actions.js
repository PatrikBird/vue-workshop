export default {
  async contactPeople(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-course-2bcef-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.peopleId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request!"
      );
      throw error;
    }

    newRequest.id = responseData.name; // Firebase docs
    newRequest.peopleId = payload.peopleId;

    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const peopleId = context.rootGetters.userId;
    const response = await fetch(
      `https://vue-course-2bcef-default-rtdb.europe-west1.firebasedatabase.app/requests/${peopleId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed fetch request!");
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        peopleId: peopleId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit("setRequests", requests);
  },
};
