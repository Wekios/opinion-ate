import { render } from '@testing-library/react';
import { RestaurantList } from '../RestaurantList';

describe('RestaurantList', () => {
  const restaurants = [
    { id: 1, name: 'Sushi Place' },
    { id: 2, name: 'Pizza Place' },
  ];
  let loadRestaurants;
  let context;

  beforeEach(() => {
    loadRestaurants = jest.fn().mockName('loadRestaurants');

    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  });

  it('loads restaurants on first render', () => {
    expect(loadRestaurants).toHaveBeenCalled();
  });

  /**
   * Why did we split this unit test out from the first one? There is a common testing principle to check one behavior per test in unit tests.
   * In our first test we checked the loading behavior, and in this test we are checking the restaurant-display behavior.
   * Having separate test cases for each behavior of the component makes it easy to understand what it does,
   * and easy to see what went wrong if one of the assertions fails. This principle is sometimes phrased "run one expectation per test",
   * but in this test we have two expectations. We're following the spirit of the principle, though, because
   * those two expectations are very closely related: they're checking for two analogous bits of text on the page.
   */

  it('displays the restaurants', () => {
    const { queryByText } = context;

    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
