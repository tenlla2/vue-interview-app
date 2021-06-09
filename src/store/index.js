import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const url = process.env.VUE_APP_API_URL;
const url2 = process.env.VUE_APP_API_URL2;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataApi: null,
    restaurants: [],
  },
  mutations: {
    SET_DATA_API(state, data) {
      state.dataApi = data;
    },
    SET_RESTAURANTS(state, data) {
      state.restaurants = data;
    },
  },
  actions: {
    //Get data from https://postman-echo.com /exercise1
    //Get data from http://localhost:3000 /exercise2
    async getDataApi({ commit }) {
      try {
        await axios
          .get(url + "get?foo1=bar1&amp;foo2=bar2")
          .then((response) => {
            commit("SET_DATA_API", response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    async createTable() {
      try {
        await axios
          .get(url2 + "createTable")
          .then((response) => {
            Vue.toasted.success(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    async dropTable() {
      try {
        await axios
          .get(url2 + "dropTable")
          .then((response) => {
            Vue.toasted.error(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    async getDataRestaurants({ commit }, obj) {
      try {
        await axios
          .post(url2 + "getRestaurants", obj)
          .then((response) => {
            commit("SET_RESTAURANTS", response.data);
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
