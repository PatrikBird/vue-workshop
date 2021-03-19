import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      people: [
        {
          id: "p1",
          firstName: "Julia",
          lastName: "Müller",
          food: ["vegetarian", "bread", "vegan"],
          description:
            "I'm Julia and I like to share food for years. Contact me, please!",
        },
        {
          id: "p2",
          firstName: "Peter",
          lastName: "Pan",
          food: ["milk", "sausages", "vegetarian"],
          description: "Just the needy, please.",
        },
        {
          id: "p3",
          firstName: "Jonas",
          lastName: "Schmidt",
          food: ["vegan", "vegetarian"],
          description: "Big amounts...",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
