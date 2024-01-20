import axios from "@/axios";

export const category = {
  namespaced: true,
  state: {
    categories: {},
  },
  actions: {
    fetchCategoryList({ commit }, catObj) {
      return axios
        .get("category/list", {
          params: {
            searchTxt: catObj.searchTxt,
            paginate: catObj.paginate || 10,
            categoryId: catObj.categoryId || null,
          },
        })
        .then((response) => {
          commit("updateCategoryList", response.data);
          return Promise.resolve(response.data);
        });
    },
    storeCategory(_,requestObj) {
      return axios.post("category/store", requestObj).then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        // Handle errors if necessary
      
        return Promise.reject(error.response.data);
      });
    },
  },
  mutations: {
    updateCategoryList(state, categories) {
      state.categories = categories;
    },
  },
  getters: {},
};
