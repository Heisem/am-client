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

export const fetchHotels = ({ search = '', stars = [] } = {}) => (dispatch) => {
  dispatch(fetchingHotels());
  const query = `
    ?match=${search ? `{"name":"${search}"}` : ''}
    &or=${stars.length > 0 ? `{"stars":[${stars}]}` : ''}
  `.replace(/^ +| +$/gm, "");
  return axios.get(`${api}hotel${query}`).then(
    hotels => dispatch(getHotels(hotels.data))
  );
};
