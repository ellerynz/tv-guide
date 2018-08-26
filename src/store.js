import Vue from 'vue';
import Vuex from 'vuex';
import api from './tvmaze_client';

Vue.use(Vuex);

/* eslint-disable no-shadow */
export const getters = {
  findShow: state => id => (
    state.tvShows.find(tvShow => tvShow.id.toString() === id.toString())
  ),
  selectedShow: (state, getters) => (
    getters.findShow(state.selectedShowId) || {}
  ),
  selectedImageUrl: (state, getters) => {
    const { image } = (getters.selectedShow || {});
    return (image && image.original) || '';
  },
  getEpisodes: state => id => (
    state.episodes[id] || []
  ),
  // { 'Season 1': [], ... }
  groupEpisodesBySeasons: (state, getters) => {
    const episodes = getters.getEpisodes(state.selectedShowId);
    /* eslint-disable no-param-reassign */
    return [...episodes].reduce((seasons, episode) => {
      if (seasons[episode.season]) {
        seasons[episode.season] = [...seasons[episode.season], episode];
      } else {
        seasons[episode.season] = [episode];
      }
      return seasons;
    }, {}) || {};
    /* eslint-enable no-param-reassign */
  },
};
/* eslint-enable no-shadow */

export default new Vuex.Store({
  state: {
    tvShows: [],
    episodes: {},
    selectedShowId: '',
  },
  getters,
  /* eslint-disable no-param-reassign */
  mutations: {
    addShows: (state, shows) => {
      state.tvShows = shows;
    },
    selectShow: (state, id) => {
      state.selectedShowId = id;
    },
    resetShow: (state) => {
      state.selectedShowId = '';
    },
    addEpisodes: (state, { id, episodes }) => {
      state.episodes = {
        ...state.episodes,
        ...{ [id]: episodes },
      };
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
    /* eslint-disable-next-line no-shadow */
    fetchEpisodes: ({ commit, getters }, { id }) => {
      if (!getters.getEpisodes(id).length) {
        return api.getEpisodes(id).then(response => (
          commit('addEpisodes', {
            id,
            episodes: response,
          })
        ));
      }
      return ''; // We don't actually care what is returned
    },
  },
});
