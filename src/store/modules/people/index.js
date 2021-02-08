import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      people: [
        {
          id: "p1",
          firstName: "Julia",
          lastName: "Müller",
          food: ["vegetarian", "bread", "vegan"],
          description:
            "I'm Julia and I like to share food for years. Contact me, I like to share!",
        },
        {
          id: "p2",
          firstName: "Peter",
          lastName: "Pan",
          food: ["milk", "sausages", "vegetarian"],
          description: "My name says it all. Just the needy, please.",
        },
        {
          id: "p3",
          firstName: "Jonas",
          lastName: "Schmidt",
          food: ["vegan", "vegetarian"],
          description: "Small amount...",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
