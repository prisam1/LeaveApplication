import axios from 'axios';
import { create } from 'apisauce';
import { BASE_URL } from '../utils/constants';
import { getByKey } from '../utils/storage-setup';

const baseUrl = BASE_URL;

const customAxiosInstance = axios.create({
  baseURL: baseUrl,
});

customAxiosInstance.interceptors.request.use(
  async config => {
    config.headers.Authorization = `Basic TWVnaGE6TWVnaGE=`;
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

const client = create({ axiosInstance: customAxiosInstance });

export default { client };
