import httpClient from '../../src/services/common-api';
import {
    getSearchResult, getAllShows, getShowDetailsById, showDetailsByName
  } from '../../src/services/tv-maze-api';

const spyEvent = jest.spyOn(httpClient, 'get');

describe('Testing TV Maze API', () => {
  it('getSearchResult should call', () => {
    getSearchResult().then(() => {
      expect(spyEvent).toHaveBeenCalled();
    });
  });
  it('getAllShows should call', () => {
    getAllShows().then((() => {
      expect(spyEvent).toHaveBeenCalled();
    }));
  });
  it('getShowDetailsById should call', () => {
    getShowDetailsById().then((() => {
      expect(spyEvent).toHaveBeenCalled();
    }));
  });
  it('showDetailsByName should call', () => {
    showDetailsByName().then((() => {
      expect(spyEvent).toHaveBeenCalled();
    }));
  });
});
