import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./CheckboxGroup.scss";

export const CheckboxGroup = ({ title, children, className, modificators }) => {
  const classes = clsx("checkbox-group", className, modificators);
  return (
    <div className={classes}>
      <p className="checkbox-group__title">{title}</p>
      <div className="checkbox-group__content">{children}</div>
    </div>
  );
};

// export default React.memo(CheckboxGroup)

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
