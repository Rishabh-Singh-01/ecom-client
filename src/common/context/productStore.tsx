'use client';

import {
  createContext,
  useContext,
  useState,
} from 'react';

// assuming the context is having default value of "M"
const ProductContext = createContext('M');

export function ProductProvider({ children }: { children: React.ReactNode }) {
    // TODO(p) -- make it persist even after refresh!!
  const [productSize, setProductSize] = useState('M');

  return (
    // @ts-ignore: :TODO(l) -- find the fix for ts error
    <ProductContext.Provider value={{ productSize, setProductSize }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
