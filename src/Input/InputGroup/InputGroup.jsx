import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./InputGroup.scss";

const InputGroup = ({ title, className, modificators, children }) => {
  const classes = clsx("input-group", className, { [modificators]: modificators });

  return (
    <div className={classes}>
      <p className="input-group__title">{title}</p>
      <div className="input-group__content">{children}</div>
    </div>
  );
};

export default React.memo(InputGroup)

InputGroup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InputGroup.defaultProps = {
  title: "",
  className: "",
};
