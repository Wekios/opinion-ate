import axios from 'axios';
import { Restaurant } from 'types';

const url = `https://outside-in-dev-api.herokuapp.com/${process.env.REACT_APP_API_KEY}`;

const client = axios.create({
  baseURL: url,
});

const api = {
  loadRestaurants() {
    return client
      .get<Restaurant[]>('/restaurants')
      .then(response => response.data);
  },
  createRestaurant(name: string) {
    return client
      .post<Restaurant[]>('/restaurants', { name })
      .then(({ data }) => data);
  },
};

export default api;
