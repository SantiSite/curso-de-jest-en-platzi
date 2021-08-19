import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Pruebas en los actions', () => {
  const payload = ProductMock;
  test('Verificando que la funcion addToCart este funcionando', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('Verificando la funcion removeFromCart', () => {
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
