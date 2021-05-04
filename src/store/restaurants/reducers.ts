import { combineReducers } from 'redux';
import { RestaurantActions, STORE_RESTAURANTS } from './actions';

const records = (state = [], action: RestaurantActions) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  records,
});
