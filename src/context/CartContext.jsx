import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const productAdded = { ...product, quantity };
    const newCart = [...cart];
    const existInCart = newCart.find(
      (product) => product.id === productAdded.id
    );
    if (existInCart) {
      existInCart.quantity =
        parseInt(existInCart.quantity) + parseInt(quantity);
    } else {
      newCart.push(productAdded);
    }
    setCart(newCart);
  };

  const quantityInCart = () => {
    return cart.reduce((acc, prod) => acc + parseInt(prod.quantity), 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (acc, prod) => acc + parseInt(prod.price) * parseInt(prod.quantity),
      0
    );
  };

  const deleteProduct = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const deleteCart = () => {
    setCart([]);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        quantityInCart,
        totalPrice,
        deleteCart,
        deleteProduct,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
