import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import "./InfoCard.scss";

const InfoCard = ({ children, className, modificators, title }) => {
  const classes = clsx("info-card", className, modificators);
  return (
    <div className={classes}>
      <div className="info-card__title"> {title}</div>
      <div className="info-card__information">{children}</div>
    </div>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  children: PropTypes.node.isRequired,
  titlle: PropTypes.string,
  className: PropTypes.string,
  modificators: PropTypes.string,
  shadow: PropTypes.bool,
};

InfoCard.defaultProps = {
  className: "",
  modificators: "",
  shadow: false,
  titlle: "",
};
