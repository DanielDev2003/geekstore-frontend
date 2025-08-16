import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setWishlist(storedWishlist);
    setCart(storedCart);
  }, []);

  const addToWishlist = (product) => {
    const exists = wishlist.find((p) => p.id === product.id);
    if (!exists) {
      const updated = [...wishlist, product];
      setWishlist(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }
  };

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter((p) => p.id !== productId);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const addToCart = (product, quantity = 1) => {
    const exists = cart.find((p) => p.id === product.id);

    let updated;
    if (exists) {
      updated = cart.map((p) =>
        p.id === product.id
          ? { ...p, quantity: (p.quantity || 1) + quantity }
          : p
      );
    } else {
      updated = [...cart, { ...product, quantity }];
    }

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeFromCart = (productId) => {
    const updated = cart.filter((p) => p.id !== productId);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const updateQty = (productId, newQty) => {
    if (newQty < 1) return;
    const updated = cart.map((p) =>
      p.id === productId ? { ...p, quantity: newQty } : p
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        cart,
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
        updateQty
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
