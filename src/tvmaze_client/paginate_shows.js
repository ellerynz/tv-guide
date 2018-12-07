export default ({ getShows }, { batchSize = 25 }) => {
  let lastVisibleShow = { id: 0 };
  let tvShows = [];

  const getBatchAfterShow = () => {
    const start = tvShows.indexOf(lastVisibleShow) + 1;
    const end = start + batchSize;
    return tvShows.slice(start, end);
  };
  const pageNumber = () => (Math.floor((lastVisibleShow.id) / 250));

  const getNextBatch = () => {
    const nextBatch = getBatchAfterShow();
    if (nextBatch.length) {
      [lastVisibleShow] = nextBatch.slice(-1);
      return nextBatch;
    }
    return [];
  };

  const fetchNextBatch = async () => {
    const nextBatch = getNextBatch();

    // Check locally for next batch
    if (nextBatch.length) {
      return nextBatch;
    }

    // Fetch next page from server
    return getShows(pageNumber()).then((response) => {
      tvShows = [...tvShows, ...response];
      return getNextBatch();
    });
  };

  return { fetchNextBatch };
};
