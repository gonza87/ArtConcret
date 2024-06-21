import { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";
import Swal from "sweetalert2";
export const CartContext = createContext();
const cartInitial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartInitial);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Producto agregado exitosamente",
    });
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
    Swal.fire({
      title: "Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Carrito vaciado!",

          icon: "success",
        });
        setCart([]);
      }
    });
  };

  const deleteCartCheckout = () => {
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
        deleteCartCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
