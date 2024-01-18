import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    
    return {
      allFoods: [],
      user: storedUser.user || undefined,
      role: storedUser.role || "user",
    };
  },
  mutations: {
    setFoodsData(state, payload) {
      state.allFoods = payload;
    },
    setUser(state, payload) {
      state.user = payload.user;
      state.role = payload.user.role ?? "user";
      localStorage.setItem("user", JSON.stringify(payload.user));

      localStorage.setItem("token", payload.accessToken);
    },
    setLogout(state) {
      state.user = [];
      localStorage.removeItem("user");
      localStorage.removeItem("token");
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
