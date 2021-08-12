import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ className, children, idNode }) => {
  const el = document.getElementById(idNode);

  return ReactDOM.createPortal(
    <div id="portal" className={`modal ${className}`}>
      {children}
    </div>,
    el,
  );
};

export default Modal;

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  idNode: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  className: "",
};
