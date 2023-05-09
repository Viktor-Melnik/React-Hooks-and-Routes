import ProductList from "../components/productList";
import { useEffect, useState } from "react";
import { useCart } from "../hooks";
import PropTypes from "prop-types";

export function Cart(props) {
  const [productList, setProductList] = useState([]);
  const [loaded, setLoaded] = useState(null);

  const cart = useCart(props);

  useEffect(() => {
    setLoaded(false);
    if (props.productList && cart) {
      const productsInCart = props.productList.filter((product) =>
        cart.includes(product.article)
      );
      setProductList(productsInCart);
      setLoaded(true);
    }
  }, [cart]);

  return (
    <>
      <main className="main">
        <section className="main__container">
          {loaded && cart.length === 0 ? (
            <p className="main__text">There are no selected products in the cart...</p>
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

Cart.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object),
  changeLocalStorageState: PropTypes.func,
};
