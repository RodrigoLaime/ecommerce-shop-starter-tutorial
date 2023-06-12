import React from 'react';
import { createContext, useState, useEffect } from 'react';

// crete context
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  // product state
  const [products, setProducts] = useState([])
  // fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    }
    fetchProduct();
  }, [])
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
};

export default ProductProvider;
