import httpClient from "@/services/common-api";

export default class TvShowApi {
  // Search Query
  static getSearchResult = async query => {
    const res = await httpClient.get(`/search/shows?q=${query}`);
    return res.data;
  };
  // Home Page
  static getAllShows = async () => {
    const res = await httpClient.get("/shows");
    return res.data;
  };

  // Single Show Page
  static getShowDetailsById = async id => {
    const res = await httpClient.get(`/shows/${id}?embed=cast`);
    console.log(res.data);
    return res.data;
  };

  static showDetailsByName = async name => {
    const res = await httpClient.get(`/singlesearch/shows?q=${name}`);
    return res.data;
  }

}
