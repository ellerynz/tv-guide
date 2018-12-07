import { getters } from '@/store';
import episodesJSON from './tvmaze_client/sample_episodes.json';

describe('store', () => {
  let state;

  describe('getters', () => {
    beforeEach(() => {
      state = {
        tvShows: [],
        episodes: {},
      };
    });

    describe('groupEpisodesBySeasons', () => {
      let result;

      beforeEach(() => {
        const mockGetters = { getEpisodes: () => episodesJSON };
        result = getters.groupEpisodesBySeasons(state, mockGetters);
      });

      it('returns episodes grouped by season', () => {
        expect(result).toBeInstanceOf(Object);
        expect(Object.keys(result).length).toEqual(3);
        expect(Object.values(result)[0]).toBeInstanceOf(Array);
      });

      it('returns an object whose key matches the season for each of its values', () => {
        const seasonNumber = Object.keys(result)[0];
        result[seasonNumber].forEach((episode) => {
          expect(episode.season.toString()).toEqual(seasonNumber);
        });
      });
    });
  });
});
