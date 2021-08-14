import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./FileTagGroup.scss";

export const FileTagGroup = ({ title, children, className, modificators }) => {
  const classes = clsx("file-tag-group", className, modificators);
  return (
    <div className={classes}>
      <p className="file-tag-group__title">{title}</p>
      <div className="file-tag-group__content">{children}</div>
    </div>
  );
};

FileTagGroup.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  modificators: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FileTagGroup.defaultProps = {
  title: "",
  className: "",
  modificators: "",
};
