import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./PhotoGroup.scss";

export const PhotoGroup = ({ title, className, modificators, children }) => {
  const classes = classNames("photo-group", className, modificators);

  return (
    <div className={classes}>
      <p className="photo-group__title">{title}</p>
      <div className="photo-group__content">{children}</div>
    </div>
  );
};

PhotoGroup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PhotoGroup.defaultProps = {
  title: "",
  className: "",
};
