import "./product_list.scss";
import ProductCard from "../productCard";
import { useCart, useFavorites } from "../../hooks";
import PropTypes from "prop-types";

export default function ProductList(props) {
  const cart = useCart(props);
  const favorites = useFavorites(props);

  const addFavorite = (article) => {
    if (!favorites.includes(article)) {
      const newFavorites = [...favorites, article];
      localStorage.setItem("Favorites", JSON.stringify(newFavorites));
    }
  };

  const addToCart = (article) => {
    if (!cart.includes(article)) {
      const newCart = [...cart, article];
      localStorage.setItem("Cart", JSON.stringify(newCart));
    }
  };

  const removeFavorite = (article) => {
    const newFavorites = favorites.filter((product) => product !== article);
    localStorage.setItem("Favorites", JSON.stringify(newFavorites));
  };

  const removeFromCart = (article) => {
    const newCart = cart.filter((product) => product !== article);
    localStorage.setItem("Cart", JSON.stringify(newCart));
  };

  return (
    <ul className="products__list">
      {props.productList.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          isFavorite={favorites.includes(product.article)}
          inCart={cart.includes(product.article)}
          addFavorite={addFavorite}
          addToCart={addToCart}
          removeFavorite={removeFavorite}
          removeFromCart={removeFromCart}
          changeLocalStorageState={props.changeLocalStorageState}
        />
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  changeLocalStorageState: PropTypes.func,
  productList: PropTypes.arrayOf(PropTypes.object),
};
