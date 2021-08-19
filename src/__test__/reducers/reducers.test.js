import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Probando los reducers', () => {
  test('Retornar el estado inicial', () => {
    expect(reducer({}, '')).toEqual({});
  });

  // Probaremos cuando se anade un producto al Cart
  test('Probando ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
