import woop from '../../tests/unit/tvmaze_client/sample_shows.json';
import paginateShows from './paginate_shows';

const showsUrl = 'http://api.tvmaze.com/shows';
const parameterizeObject = params => (
  new URLSearchParams(Object.entries(params))
);
const showsUrlForPagination = pageNumber => (
  Object.entries(pageNumber).length ?
    `${showsUrl}?${parameterizeObject(pageNumber)}`
    :
    showsUrl
);

const episodesUrl = id => (
  `http://api.tvmaze.com/shows/${id}/episodes`
);

const mockResponse = result => (
  new Promise((resolve) => {
    setTimeout(() => resolve(result));
  })
);

const showsPaginator = paginateShows({
  getShows: pageNumber => (
    fetch(showsUrlForPagination(pageNumber)).then(response => response.json())
  ),
}, {});

export default {
  listShows: () => mockResponse(woop),
  getShows: () => (
    showsPaginator.fetchNextBatch()
  ),
  findShow: id => (
    fetch(`${showsUrl}/${id}`)
      .then(response => response.json())
  ),
  getEpisodes: id => (
    fetch(episodesUrl(id))
      .then(response => response.json())
  ),
};
