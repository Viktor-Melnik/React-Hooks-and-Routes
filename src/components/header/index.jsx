import "./header.scss";
import { NavLink } from "react-router-dom";
import { StarHeader } from "../icons";
import { Cart } from "../icons";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to={"/"}>
          <h1 className="header__logo">{props.title}</h1>
        </NavLink>

        <NavLink to={"/"} className="link_name">Home</NavLink>

        <NavLink to={"/favorites"} className="link_name">Favorites</NavLink>

        <NavLink to={"/cart"} className="link_name">Cart</NavLink>

        <div className="header__icons_container">
          <NavLink to={"/favorites"} className="header__icons">
            <StarHeader />
            <div className="header__counter">
              &lsaquo; {props.productsInFavorites} &rsaquo;
            </div>
          </NavLink>
          <NavLink to={"/cart"} className="header__icons">
            <Cart />
            <div className="header__counter">
              &lsaquo; {props.productsInCart} &rsaquo;
            </div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  title: "Shop",
  productsInFavorites: 0,
  productsInCart: 0,
};

Header.propTypes = {
  title: PropTypes.string,
  productsInFavorites: PropTypes.number,
  productsInCart: PropTypes.number,
};
