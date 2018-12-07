import showsPaginator from '@/tvmaze_client/paginate_shows';

describe('paginate_shows', () => {
  describe('findNextBatch', () => {
    const tvShows = async () => (
      // Generates: [{ id: 0 }, { id: 1 }, ...{ id: 9 }]
      [...Array(10).keys()].reduce((prevObj, num) => (
        [...prevObj, { id: num }]
      ), [])
    );

    it('returns a batch size of shows', () => {
      const paginator = showsPaginator({ getShows: tvShows }, { batchSize: 3 });
      return paginator.fetchNextBatch().then((batch) => {
        expect(batch.map(b => b.id)).toEqual([0, 1, 2]);
      });
    });

    it('returns the next batch after the first', () => {
      const paginator = showsPaginator({ getShows: tvShows }, { batchSize: 3 });
      return paginator.fetchNextBatch().then(() => {
        paginator.fetchNextBatch().then((batch) => {
          expect(batch.map(b => b.id)).toEqual([3, 4, 5]);
        });
      });
    });

    it('returns less than the batch size when not enough items remain', () => {
      const paginator = showsPaginator({ getShows: tvShows }, { batchSize: 20 });
      return paginator.fetchNextBatch().then((batch) => {
        expect(batch.length).toEqual(10);
      });
    });

    it('returns an empty array when no batches are found', () => {
      const mockResponse = jest.fn();
      mockResponse.mockResolvedValue(tvShows).mockResolvedValue([]);
      const paginator = showsPaginator({ getShows: mockResponse }, { batchSize: 20 });

      return paginator.fetchNextBatch().then(() => {
        paginator.fetchNextBatch().then((batch) => {
          expect(batch).toEqual([]);
        });
      });
    });
  });
});
