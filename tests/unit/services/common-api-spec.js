import axios from 'axios';
import httpClient from '../../src/services/common-api';

// Mock module with Jest mock functions
jest.mock('../../src/services/common-api');

describe('In httpClient', () => {
  const baseURL = 'http://api.tvmaze.com';

  it('httpClient to be defined', () => {
    expect(httpClient).toBeDefined();
  });
  it('axios.create sets the baseUrl', () => {
    const expected = axios.create({
      baseURL,
    });
    expect(httpClient.baseURL).toEqual(expected.baseURL);
  });
});
