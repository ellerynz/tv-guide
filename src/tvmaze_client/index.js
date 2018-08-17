import woop from '../../tests/unit/tvmaze_client/sample_shows.json';

const mockResponse = result => (
  new Promise((resolve) => {
    setTimeout(() => resolve(result));
  })
);

export default {
  findShow: () => mockResponse(woop),
  listShows: () => mockResponse(woop),
};
