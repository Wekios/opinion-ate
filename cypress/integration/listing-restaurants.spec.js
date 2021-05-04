describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    cy.server({ force404: true });

    cy.route({
      method: 'GET',
      url:
        'https://outside-in-dev-api.herokuapp.com/gxch4Lz3YIQzEmDIOXSwZwvq6zYb5aD2/restaurants',
      response: [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ],
    });

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
