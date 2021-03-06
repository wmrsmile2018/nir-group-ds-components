import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import "./BorderCard.scss";

const BorderCard = ({ children, className, modificators, title, tags }) => {
  const classes = clsx("border-card", className, modificators);
  return (
    <div className={classes}>
      <div className="border-card-content">
        <div className="border-card__title"> {title}</div>
        <div className="border-card__information">{children}</div>
      </div>
      <div className="border-card__tags">{tags}</div>
    </div>
  );
};

export default React.memo(BorderCard);

BorderCard.propTypes = {
  children: PropTypes.node.isRequired,
  tags: PropTypes.arrayOf(PropTypes.node),
  titlle: PropTypes.string,
  className: PropTypes.string,
  modificators: PropTypes.string,
  shadow: PropTypes.bool,
};

BorderCard.defaultProps = {
  className: "",
  modificators: "",
  shadow: false,
  tags: [],
  titlle: "",
};
