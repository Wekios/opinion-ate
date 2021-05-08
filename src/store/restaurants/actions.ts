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

export const START_LOADING = 'START_LOADING';
export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
export const RECORD_LOADING_ERROR = 'RECORD_LOADING_ERROR';

export type StoreRestaurantsAction =
  | {
      type: typeof STORE_RESTAURANTS;
      payload: Restaurant[];
    }
  | { type: typeof START_LOADING }
  | { type: typeof RECORD_LOADING_ERROR };

export type RestaurantActions = StoreRestaurantsAction;

export const loadRestaurants = (): AppThunk => (dispatch, _getState, api) => {
  dispatch(startLoading());
  api
    .loadRestaurants()
    .then(records => {
      dispatch(storeRestaurants(records));
    })
    .catch(() => {
      dispatch(recordLoadingError());
    });
};

export const startLoading = () => ({ type: START_LOADING });

export function storeRestaurants(
  records: Restaurant[],
): StoreRestaurantsAction {
  return {
    type: STORE_RESTAURANTS,
    payload: records,
  };
}

const recordLoadingError = () => ({ type: RECORD_LOADING_ERROR });
