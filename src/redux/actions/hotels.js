import axios from 'axios';

import { config } from '../../config';
const { api } = config;

const getHotels = (hotels) => ({
    type: 'GET_HOTELS',
    hotels,
});

const fetchingHotels = () => ({
  type: 'FETCHING_HOTELS',
});

export const fetchHotels = () => (dispatch) => {
  dispatch(fetchingHotels());
  return axios.get(`${api}hotel`).then(
    hotels => dispatch(getHotels(hotels.data))
  );
}
