import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./RadioGroup.scss";

export const RadioGroup = ({ title, onChange, children, value, className }) => {
  const classes = clsx("radio-group", className);
  return (
    <div className={classes} onChange={onChange} value={value}>
      <p className="radio-group__title">{title}</p>
      <div className="radio-group__content">{children}</div>
    </div>
  );
};

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

RadioGroup.defaultProps = {
  onChange: () => {},
  value: null,
  className: "",
};
