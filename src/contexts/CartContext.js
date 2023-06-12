import React, { createContext, useState, useEffect } from 'react';

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // item price state
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0)
    setTotal(total);
  });

  // update amount state contador del icono de carrito
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart])
  // adD to cart
  const addToCart = (product, id) => {
    // add "amount" at object product
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    // comprobar si el product ya esta en el cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    // sumar el product
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem])
    }
  };
  // console.log(cart)
  // remove from cart funcion para eliminar una sola compra
  const removeFromCart = (id) => {
    // filter permite verificar si cumple una condicion
    const newCart = cart.filter(item => {
      // retorna los id que son diferente que el id que pasamos
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear cart all eliminar todo el carrito de compra
  const clearCart = () => {
    setCart([]);
  }

  // increment amount
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    // console.log(item);  
    addToCart(cartItem, id);
  };

  // decrease amount 
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    });
    // console.log(item)
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item;
        }
      });
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }

  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
