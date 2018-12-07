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

/* eslint-disable no-param-reassign */
const mutations = {
  addShows: (state, shows) => {
    state.tvShows = [...state.tvShows, ...shows];
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
};
/* eslint-enable no-param-reassign */

const actions = {
  // eslint-disable-next-line no-shadow
  findShow: ({ commit, getters }, { id }) => {
    // Check for the show locally first
    if (getters.findShow(id)) {
      commit('selectShow', id);
      return id;
    }

    return api.findShow(id).then((response) => {
      commit('addShows', [response]);
      commit('selectShow', id);
    });
  },
  listShows: ({ commit }) => (
    api.listShows().then(response => (
      commit('addShows', response)
    ))
  ),
  getNextShowsBatch: ({ commit }) => {
    api.getShows().then((nextBatch) => {
      commit('addShows', nextBatch);
    });
  },
  // eslint-disable-next-line no-shadow
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
};

export default new Vuex.Store({
  state: {
    batchSize: 25,
    tvShows: [],
    episodes: {},
    selectedShowId: '',
  },
  getters,
  mutations,
  actions,
});
