import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Restaurant } from 'types';
import { RootState } from '../index';
import api from 'api';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  typeof api,
  AnyAction
>;

export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export type StoreRestaurantsAction = {
  type: typeof STORE_RESTAURANTS;
  payload: Restaurant[];
};

export type RestaurantActions = StoreRestaurantsAction;

export const loadRestaurants = (): AppThunk => (dispatch, _getState, api) => {
  api.loadRestaurants().then(records => {
    dispatch(storeRestaurants(records));
  });
};

export function storeRestaurants(
  records: Restaurant[],
): StoreRestaurantsAction {
  return {
    type: STORE_RESTAURANTS,
    payload: records,
  };
}
