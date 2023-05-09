import "./product_card.scss";
import { StarCard } from "../icons";
import Button from "../button";
import { modalButtons } from "../button/buttons_array";
import Modal from "../modal";
import { modalWindowDeclarations } from "../modal/modals_array";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function ProductCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsFavorite(props.isFavorite);
    setInCart(props.inCart);
  }, [props]);

  const toggleFavorite = (article) => {
    isFavorite ? props.removeFavorite(article) : props.addFavorite(article);

    setIsFavorite((prevState) => !prevState);

    props.changeLocalStorageState();
  };

  const toggleInCart = () => {
    inCart
      ? props.removeFromCart(props.article)
      : props.addToCart(props.article);

    setInCart((prevSate) => !prevSate);

    toggleModalOpen();
    props.changeLocalStorageState();
  };

  const toggleModalOpen = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const renderModal = (data, functionsArr = []) => {
    const { header, text, closeButton } = data;

    const actions = modalButtons.map((action) => (
      <Button
        backgroundColor={action.backgroundColor}
        text={action.text}
        key={action.id}
        onClick={() => functionsArr[action.id]}
      />
    ));

    return (
      <Modal
        header={header}
        text={text}
        closeButton={closeButton}
        actions={actions}
        toggleModalOpen={() => toggleModalOpen}
      />
    );
  };

  return (
    <>
      <li id={props.id} className="products__card">
        <img src={props.imageUrl} alt={props.name} />

        <div className="products__name_container">
          <h2>{props.name}</h2>
          <StarCard
            article={props.article}
            isFill={isFavorite}
            onClick={toggleFavorite}
          />
        </div>

        <div className="products__description_container">
          <p className="products__text"><span className="products__bold_text">Article:</span> {props.article}</p>
          <p className="products__text"><span className="products__bold_text">Color:</span> {props.color}</p>
        </div>

        <div className="products__price_container">
          <p className="products__text products__bold_text">&euro; {props.price}</p>
          {inCart ? (
            <Button
              backgroundColor="black"
              text="Delete from cart"
              onClick={() => toggleModalOpen}
            />
          ) : (
            <Button
              backgroundColor="white"
              text="Add to cart"
              onClick={() => toggleModalOpen}
            />
          )}
        </div>
      </li>

      {isModalOpen
        ? inCart
          ? renderModal(modalWindowDeclarations[1], [
              toggleModalOpen,
              toggleInCart,
            ])
          : renderModal(modalWindowDeclarations[0], [
              toggleModalOpen,
              toggleInCart,
            ])
        : null}
    </>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  article: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number,

  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,

  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,

  changeLocalStorageState: PropTypes.func,

  isFavorite: PropTypes.bool,
  inCart: PropTypes.bool,
};
