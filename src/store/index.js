import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const baseURL = `https://www.balldontlie.io/api/v1`;

export default new Vuex.Store({
  state: {
    loading: false,
    playersList: []
  },
  actions: {
    retrieveAllPlayers: ({ commit }, payload) => {
      commit("updateLoadingStatus", true);
      return new Promise((resolve, reject) => {
        Vue.axios
          .get(`${baseURL}/players?per_page=100&search=${payload.name}`)
          .then(resp => {
            const players = resp.data.data;
            commit("updatePlayersList", players);
            commit("updateLoadingStatus", false);
            resolve();
          })
          .catch(err => {
            commit("updateLoadingStatus", false);
            console.log(err);
            reject();
          });
      });
    }
  },
  mutations: {
    updatePlayersList: (state, players) => {
      state.playersList = players;
    },

    updateLoadingStatus: (state, status) => {
      state.loading = status;
    }
  },
  modules: {}
});
