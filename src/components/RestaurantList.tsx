import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { loadRestaurants } from '../store/restaurants/actions';
import { Restaurant } from 'types';

export interface RestaurantListProps {
  loadRestaurants: () => void;
  restaurants: Restaurant[];
}

export function RestaurantList({
  loadRestaurants,
  restaurants,
}: RestaurantListProps) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state: RootState) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = { loadRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
