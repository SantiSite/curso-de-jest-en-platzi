import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';

describe('Probando el componente Product', () => {
  // Se verifica que el componente si se monta correctamente.
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });

  // Se hace un test para verificar si el boton de anadir al carrito funciona.
  test('Verificar el boton de comprar', () => {
    const handleAddCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProviderMock}
          handleAddToCart={handleAddCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddCart).toHaveBeenCalledTimes(1);
  });
});
