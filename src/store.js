import Vue from 'vue';
import Vuex from 'vuex';
import api from './tvmaze_client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tvShows: [],
    episodes: [],
  },
  getters: {
    findShow: state => id => (
      state.tvShows.find(tvShow => tvShow.id.toString() === id.toString())
    ),
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    addShows: (state, shows) => {
      state.tvShows = shows;
    },
  },
  /* eslint-enable no-param-reassign */
  actions: {
    findShow: ({ commit }) => (
      api.findShow().then(response => (
        commit(response)
      ))
    ),
    listShows: ({ commit }) => (
      api.listShows().then(response => (
        commit('addShows', response)
      ))
    ),
  },
});
