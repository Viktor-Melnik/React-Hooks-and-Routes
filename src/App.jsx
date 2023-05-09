import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import { Cart, Favorites, Home } from "./pages";

import { useState } from "react";
import { useFetch, useCart, useFavorites } from "./hooks";

function App() {
  const productList = useFetch("./products.json");

  const [localStorage, setLocalStorage] = useState(false);
  const cart = useCart(localStorage);
  const favorites = useFavorites(localStorage);

  const changeLocalStorageState = () => {
    setLocalStorage((prevState) => !prevState);
  };
  return (
    <>
      <Header
        title="React Clothes Shop"
        productsInFavorites={favorites.length}
        productsInCart={cart.length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              changeLocalStorageState={changeLocalStorageState}
              productList={productList.data}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              productList={productList.data}
              changeLocalStorageState={changeLocalStorageState}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              productList={productList.data}
              changeLocalStorageState={changeLocalStorageState}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
