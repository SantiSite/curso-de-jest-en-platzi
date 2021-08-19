import GetData from '../../utils/GetData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks(); // Elimina los mocks configurados para que no se filtren.
  });

  test('Llamar a una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' })); //  Es un mock (simulacro) de cada llamada fetch de forma independiente.

    GetData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });

    // Verificar que la llamada a la api este correcta
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
