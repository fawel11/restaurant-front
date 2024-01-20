import axios from "@/axios";

export const discount = {
  namespaced: true,
  state: {
    discounts: {},
  },
  actions: {
    fetchDiscountList({ commit }, catObj) {
      return axios
        .get("discount/list", {
          params: {
            searchTxt: catObj.searchTxt,
            paginate: catObj.paginate || 10
          },
        })
        .then((response) => {
          commit("updateDiscoutList", response.data);
          return Promise.resolve(response.data);
        });
    },
    storeDiscount(_,requestObj) {
      return axios.post("discount/store", requestObj).then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        // Handle errors if necessary      
        return Promise.reject(error.response.data);
      });
    },
  },
  mutations: {
    updateDiscoutList(state, discounts) {
      state.discounts = discounts;
    },
  },
  getters: {},
};
