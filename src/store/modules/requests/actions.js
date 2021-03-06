export default {
  contactPeople(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      peopleId: payload.peopleId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit("addRequest", newRequest);
  },
};
