export const getProductSizeSelectedLocalStore = (productId: string) => {
  const size = localStorage.getItem(`selectedSize/${productId}`);
  if (
    size !== 'S' &&
    size !== 'M' &&
    size !== 'L' &&
    size !== 'XL' &&
    size !== 'XXL'
  )
    return 'M';

  return size;
};

export const setProductSizeSelectedLocalStore = (
  productId: string,
  size: string
) => {
  if (
    size !== 'S' &&
    size !== 'M' &&
    size !== 'L' &&
    size !== 'XL' &&
    size !== 'XXL'
  )
    return;

  localStorage.setItem(`selectedSize/${productId}`, size);
  return size;
};
