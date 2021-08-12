import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./CheckboxGroup.scss";

export const CheckboxGroup = ({ title, children, className, modificators }) => {
  const classes = classNames("checkbox-group", className, modificators);
  return (
    <div className={classes}>
      <p className="checkbox-group__title">{title}</p>
      <div className="checkbox-group__content">{children}</div>
    </div>
  );
};

CheckboxGroup.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  modificators: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CheckboxGroup.defaultProps = {
  title: "",
  className: "",
  modificators: "",
};
