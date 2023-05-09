import ProductList from "../components/productList";
import PropTypes from "prop-types";

export function Home(props) {
  return (
    <>
      <main className="main">
        <section className="main__container">
          {props.productList ? (
            <ProductList
              productList={props.productList}
              changeLocalStorageState={props.changeLocalStorageState}
            />
          ) : null}
        </section>
      </main>
    </>
  );
}

Home.propTypes = {
  changeLocalStorageState: PropTypes.func,
  productList: PropTypes.arrayOf(PropTypes.object),
};
