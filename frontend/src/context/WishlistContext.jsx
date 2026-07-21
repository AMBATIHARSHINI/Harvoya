import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const WishlistContext = createContext();

// Custom Hook
export const useWishlist = () => {
  return useContext(WishlistContext);
};

// Provider Component
export const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from LocalStorage
  useEffect(() => {

    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);

  }, []);

  // Save whenever wishlist changes
  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  // Add / Remove Wishlist
  const toggleWishlist = (hotel) => {

    const exists = wishlist.find(
      (item) => item.id === hotel.id
    );

    if (exists) {

      setWishlist(
        wishlist.filter(
          (item) => item.id !== hotel.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        hotel
      ]);

    }

  };

  // Remove from Wishlist
  const removeFromWishlist = (id) => {

    setWishlist(
      wishlist.filter(
        (item) => item.id !== id
      )
    );

  };

  // Check if hotel already exists
  const isWishlisted = (id) => {

    return wishlist.some(
      (item) => item.id === id
    );

  };

  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        isWishlisted,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

};