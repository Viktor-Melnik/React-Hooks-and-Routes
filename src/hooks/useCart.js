import { useEffect, useState } from "react";

export function useCart(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const productsInCart = localStorage.getItem("Cart")
      ? JSON.parse(localStorage.getItem("Cart"))
      : [];
    setCart(productsInCart);
  }, [props]);

  return cart;
}