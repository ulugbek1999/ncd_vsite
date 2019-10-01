import axios from 'axios';
import {BASE_DOMAIN} from '~/settings/settings.js';

const apiClient = axios.create({
  baseURL: BASE_DOMAIN,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getAPI() {
    return apiClient.get('/api/cms/list/');
  },
};
