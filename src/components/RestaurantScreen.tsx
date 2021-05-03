import { RestaurantList } from './RestaurantList';

export function RestaurantScreen() {
  return (
    <div>
      <h1>Restaurant</h1>
      <RestaurantList restaurants={[]} loadRestaurants={() => {}} />
    </div>
  );
}
