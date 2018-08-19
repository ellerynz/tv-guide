import woop from '../../tests/unit/tvmaze_client/sample_shows.json';

const episodesUrl = id => (
  `http://api.tvmaze.com/shows/${id}/episodes`
);

const mockResponse = result => (
  new Promise((resolve) => {
    setTimeout(() => resolve(result));
  })
);

export default {
  listShows: () => mockResponse(woop),
  getEpisodes: id => (
    fetch(episodesUrl(id))
      .then(response => response.json())
  ),
};
