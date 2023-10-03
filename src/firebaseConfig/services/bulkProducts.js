import { PRODUCTS } from '../../asyncMock';
import { addItem } from './items';

export const upLoadProducts = () => {
  PRODUCTS.forEach(({ id, ...restOfProduct }) => {
    // Llama a addItem y pasa los datos del producto como argumento
    addItem({
      // Aquí debes proporcionar los datos del producto, por ejemplo:
      id,
      ...restOfProduct,
    });
  });
};