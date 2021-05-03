import { useEffect } from 'react';

export interface RestaurantListProps {
  loadRestaurants: () => void;
}

export function RestaurantList({ loadRestaurants }: RestaurantListProps) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return <div>RestaurantList</div>;
}
