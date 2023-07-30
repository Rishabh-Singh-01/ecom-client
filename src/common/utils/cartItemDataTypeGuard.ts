import { ProductFromCartInterface } from '../models/cartIntefaces';

interface HelperCartDataInterface {
  data: [ProductFromCartInterface];
}

const isValidCartItemsData = (
  cartItemsData: any
): cartItemsData is HelperCartDataInterface => {
  return (
    typeof cartItemsData === 'object' &&
    cartItemsData !== null &&
    cartItemsData.hasOwnProperty('data')
  );
};

export default isValidCartItemsData;
