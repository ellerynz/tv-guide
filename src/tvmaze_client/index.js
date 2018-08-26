import woop from '../../tests/unit/tvmaze_client/sample_shows.json';

const showsUrl = id => (
  `http://api.tvmaze.com/shows/${id}`
);

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
  findShow: id => (
    fetch(showsUrl(id))
      .then(response => response.json())
  ),
  getEpisodes: id => (
    fetch(episodesUrl(id))
      .then(response => response.json())
  ),
};
