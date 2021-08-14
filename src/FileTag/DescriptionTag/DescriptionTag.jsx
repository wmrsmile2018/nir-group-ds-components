import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import "./DescriptionTag.scss";

export const DescriptionTag = ({ className, children, modificators, prepared, date }) => {
  const classes = clsx("description-tag", className, modificators);
  return (
    <div className={classes}>
      <div className="description-tag__content">{children}</div>
      <div className="description-tag-informations">
        <div className="description-tag__information description-tag-informations__prepared">
          <p>Подготовлен:</p>
          {prepared ? prepared : "Нет Данных"}
        </div>
        <div className="description-tag__information description-tag-informations__date">
          <span>Дата:</span>
          {date ? date : "Нет Данных"}
        </div>
      </div>
    </div>
  );
};

DescriptionTag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  modificators: PropTypes.string,
  prepared: PropTypes.string,
  date: PropTypes.string,
};

DescriptionTag.defaultProps = {
  className: "",
  modificators: "",
  prepared: "",
  date: "",
};
