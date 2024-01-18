import { createStore } from "vuex";
import { auth } from "./auth.module";
import axios from "axios";

const store = createStore({
  modules: {
    auth,
  },
  state: {
    allFoods: [],
  },
  mutations: {
    setFoodsData(state, payload) {
      state.allFoods = payload;
    },
  },
  actions: {
    async getFoodsData(context) {
      await axios
        .get("/menu")
        .then(function (response) {
          console.log(response.data);
          context.commit("setFoodsData", response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});

export default store;
