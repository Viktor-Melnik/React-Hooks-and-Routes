import ProductList from "../components/productList";
import { useEffect, useState } from "react";
import { useFavorites } from "../hooks";
import PropTypes from "prop-types";

export function Favorites(props) {
  const [productList, setProductList] = useState([]);
  const [loaded, setLoaded] = useState(null);

  const favorites = useFavorites(props);

  useEffect(() => {
    setLoaded(false);
    if (props.productList && favorites) {
      const productsInFavorites = props.productList.filter((product) =>
        favorites.includes(product.article)
      );
      setProductList(productsInFavorites);
      setLoaded(true);
    }
  }, [favorites]);

  return (
    <>
      <main className="main">
        <section className="main__container">
          {loaded && favorites.length === 0 ? (
            <p className="main__text">There are no selected products in the favorites...</p>
          ) : null}
          {props.productList ? (
            <ProductList
              productList={productList}
              changeLocalStorageState={props.changeLocalStorageState}
            />
          ) : null}
        </section>
      </main>
    </>
  );
}

Favorites.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object),
  onLocalStorageChanged: PropTypes.func,
};
