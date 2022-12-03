import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext({});

export const useStateContext = () => useContext(Context);

export const StateContext = ({ children }: any) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct: { quantity: number; price: number };
  let index;

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;

      return prev - 1;
    });
  };

  const onAdd = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item: any) => item._id === product._id
    );

    setTotalPrice((prev: any) => prev + product.price * quantity);
    setTotalQty((prev: any) => prev + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const toggleCartItemQty = (id: string, value: string) => {
    index = cartItems.findIndex((product: any) => product._id === id);
    foundProduct = cartItems.find((item: any) => item._id === id);
    const newCartItems = cartItems.filter((item: any) => item._id !== id) 

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQty((prev) => prev + 1);
      setQty((prev) => prev + 1);

    }
     else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prev) => prev - foundProduct.price);
        setTotalQty((prev) => prev - 1);
        setQty((prev) => prev -1)
      }
    }
  };

  const onRemove = (product: any) => {
    foundProduct = cartItems.find((item: any) => item._id === product._id);
    const newCartItems = cartItems.filter((item: any) => item._id !== product._id); 

    setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity )
    setTotalQty((prev) => prev -  foundProduct.quantity);
    setCartItems(newCartItems)
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQty,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        setTotalQty,
        setTotalPrice,
        setCartItems,
        toggleCartItemQty,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  );
};
