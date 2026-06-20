import React, {
  useState,
  createContext,
  useEffect,
  useContext,
} from "react";

// Create Context
export const CartContext = createContext(null);

// Provider
export const CartProvider = ({ children }) => {

  // Load Cart Directly From LocalStorage
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Save Cart To LocalStorage
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // Add To Cart
  const addToCart = (product) => {

    const existingProduct = cartItems.find(
      item => item.id === product.id
    );

    if (existingProduct) {

      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }

  };

  // Increase Quantity
  const increaseQty = (id) => {

    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };

  // Decrease Quantity
  const decreaseQty = (id) => {

    setCartItems(
      cartItems
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(item => item.quantity > 0)
    );

  };

  // Remove Item
  const removeItem = (id) => {

    setCartItems(
      cartItems.filter(
        item => item.id !== id
      )
    );

  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Total Quantity Count
  const totalItems = cartItems.length

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );

};

// Custom Hook
export const getCart = () => {
  return useContext(CartContext);
};