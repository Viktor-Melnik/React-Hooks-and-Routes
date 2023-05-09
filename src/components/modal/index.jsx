import "./modal.scss";
import PropTypes from "prop-types";

export default function Modal(props) {
  
    return (
      <div className="modal__wrapper" onClick={props.toggleModalOpen()}>

        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <h2 className="modal__title">{props.header}</h2>
            {props.closeButton ? (
              <div className="modal__close" onClick={props.toggleModalOpen()}>
                &times;
              </div>
            ) : null}
          </div>
          <hr />
          <div className="modal__body">
            <p className="modal__text">{props.text}</p>
          </div>
          <hr />
          <div className="modal__footer">{props.actions}</div>
        </div>
      </div>
    );
  }

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  toggleModalOpen: PropTypes.func,
  closeButton: PropTypes.bool,
  actions: PropTypes.array,
};