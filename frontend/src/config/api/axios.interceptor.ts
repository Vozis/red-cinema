import axios from 'axios';

import { API_URL } from '@/config/api/api.config';

const axiosOptions = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosClassic = axios.create(axiosOptions);

export const instance = axios.create(axiosOptions);
