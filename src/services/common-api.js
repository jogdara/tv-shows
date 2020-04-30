import axios from 'axios';

// import { apiBaseUrl } from '@/environment/environment';
const apiBaseUrl = 'http://api.tvmaze.com';

/**
 * Axios basic configuration
 * Some general configuration can be added like timeout, headers, params etc. More details can be found on https://github.com/axios/axios
 * */
const config = {
  baseURL: apiBaseUrl,
  Accept: 'application/json',
};

/**
  * Creating the instance of Axios
  * It is because, in large scale application we may need to consume APIs from more
  * than single server,
  * So, may need to create multiple http client with different config
  * Only this client will be used rather than axios in the application
  * */
const httpClient = axios.create(config);

export default httpClient;
