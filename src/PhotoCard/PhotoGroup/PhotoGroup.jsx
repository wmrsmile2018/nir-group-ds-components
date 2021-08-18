import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./PhotoGroup.scss";

const PhotoGroup = ({ title, className, modificators, children }) => {
  const classes = clsx("photo-group", className, modificators);

  return (
    <div className={classes}>
      <p className="photo-group__title">{title}</p>
      <div className="photo-group__content">{children}</div>
    </div>
  );
};

export default React.memo(PhotoGroup)

PhotoGroup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PhotoGroup.defaultProps = {
  title: "",
  className: "",
};
