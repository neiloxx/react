import axios, { AxiosResponse } from 'axios';
import { SortType } from '../types';

const API_KEY = 'e8312a66378248f4aaa1299a34a2d6be';
export const MAX_SERVER_RESULT = 100;

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
});

export const getResponse = async (
  searchValue: string,
  sortBy: SortType,
  artOnPage: number,
  page: number,
): Promise<AxiosResponse> =>
  axiosInstance.get(
    `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=${artOnPage}&page=${page}`,
  );

export default axiosInstance;
