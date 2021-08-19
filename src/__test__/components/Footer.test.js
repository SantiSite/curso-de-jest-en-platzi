import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Test para el Footer', () => {
  const footer = mount(<Footer />);

  // Se verifica que el componente Footer si se este montando
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  // Se valida que el Footer tenga un title con 'Platzi Store'
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
