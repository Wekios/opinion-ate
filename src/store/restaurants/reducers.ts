import { combineReducers } from 'redux';
import {
  RestaurantActions,
  STORE_RESTAURANTS,
  START_LOADING,
  RECORD_LOADING_ERROR,
} from './actions';

const records = (state = [], action: RestaurantActions) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
};

const loading = (state = false, action: RestaurantActions) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STORE_RESTAURANTS:
    case RECORD_LOADING_ERROR:
      return false;
    default:
      return state;
  }
};

const loadError = (state = false, action: RestaurantActions) => {
  switch (action.type) {
    case START_LOADING:
      return false;
    case RECORD_LOADING_ERROR:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  records,
  loading,
  loadError,
});
