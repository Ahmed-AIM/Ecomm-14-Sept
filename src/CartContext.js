import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    // Load wishlist from localStorage if available
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // Save wishlist to localStorage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = useCallback((product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      // If the product already exists, increase the quantity
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      // If the product does not exist, add it to the cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }, [cart]);

  const decreaseQuantity = useCallback((productToDecrease) => {
    setCart(cart.map(product => 
      product.id === productToDecrease.id 
        ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 } 
        : product
    ));
  }, [cart]);

  const removeFromCart = useCallback((productToRemove) => {
    setCart(cart.filter(product => product.id !== productToRemove.id));
  }, [cart]);

  const addToWishlist = useCallback((product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    } else {
      alert("This product is already in your wishlist!");
    }
  }, [wishlist]);

  const removeFromWishlist = useCallback((productToRemove) => {
    setWishlist(wishlist.filter(product => product.id !== productToRemove.id));
  }, [wishlist]);

  const memoizedCart = useMemo(() => ({ cart, addToCart, decreaseQuantity, removeFromCart }), [cart, addToCart, decreaseQuantity, removeFromCart]);
  const memoizedWishlist = useMemo(() => ({ wishlist, addToWishlist, removeFromWishlist }), [wishlist, addToWishlist, removeFromWishlist]);

  return (
    <CartContext.Provider value={{ ...memoizedCart, ...memoizedWishlist, setWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
