import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./InfoBlock.scss";

const getIsEmpty = (value) => {
  if (typeof value === "string") {
    return value === "" || value === null || value === undefined || value === "Данные отсутствуют";
  }
  return false;
};

const InfoBlock = ({ label, value, className, modificators }) => {
  const classes = classNames("info-block", className, modificators);
  const isEmptyValue = getIsEmpty(value);
  return (
    <p className={classes}>
      {`${label}: `}
      <span className={`info-block__value ${isEmptyValue && "info-block__value--no-data"}`}>
        {isEmptyValue ? "Данные отсутствуют" : value}
      </span>
    </p>
  );
};

export default InfoBlock;

InfoBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  modificators: PropTypes.string,
};
InfoBlock.defaultProps = {
  label: "",
  value: "",
  className: "",
  modificators: "",
};
