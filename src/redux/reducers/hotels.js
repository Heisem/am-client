const initialState = {
  hotels: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HOTELS': {
      return {
        hotels: action.hotels,
      }
    }
    case 'FETCHING_HOTELS':
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}
