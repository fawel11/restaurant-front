import axios from "@/axios";

export const item = {
  namespaced: true,
  state: {
    items: {},
  },
  actions: {
    fetchItemList({ commit }, catObj) {
      return axios
        .get("item/list", {
          params: {
            searchTxt: catObj.searchTxt,
            paginate: catObj.paginate || 10,
            categoryId: catObj.categoryId || null,
          },
        })
        .then((response) => {
          commit("updateItemList", response.data);
          return Promise.resolve(response.data);
        });
    },
    storeItem(_,requestObj) {
      return axios.post("item/store", requestObj).then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        // Handle errors if necessary
      
        return Promise.reject(error.response.data);
      });
    },
  },
  mutations: {
    updateItemList(state, items) {
      state.items = items;
    },
  },
  getters: {},
};
