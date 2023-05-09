import { useEffect, useState } from "react";

export function useFavorites(props) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const productsInFavorites = localStorage.getItem("Favorites")
      ? JSON.parse(localStorage.getItem("Favorites"))
      : [];
    setFavorites(productsInFavorites);
  }, [props]);

  return favorites;
}