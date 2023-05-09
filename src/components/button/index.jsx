import "./button.scss";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      className="default__btn"
      style={{ backgroundColor: props.backgroundColor }}
      onClick={props.onClick()}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};
