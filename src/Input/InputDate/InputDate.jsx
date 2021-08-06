import React, { useMemo } from "react";
import DatePicker from "react-date-picker";
import classNames from "classnames";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { calendarIcon, clearIcon } from "../../icons";

import "./InputDate.scss";

export const InputDate = ({
  className,
  title,
  id,
  name,
  modificators,
  state,
  onChange,
  ...rest
}) => {
  const value = useMemo(() => (state instanceof Date ? state : undefined), [state]);
  const newId = useMemo(() => id || uuid(), []);
  const classes = classNames("input-date", className, { [modificators]: modificators });

  const handleOnChange = (data) => {
    onChange({
      target: {
        value: data,
        name,
      },
    });
  };

  return (
    <div className={classes}>
      <p className="input-date__title" htmlFor={newId}>
        {title}
      </p>
      <DatePicker
        id={newId}
        onChange={handleOnChange}
        value={value}
        clearIcon={clearIcon("input-date__clear-icon")}
        calendarIcon={calendarIcon("input-date__calendar-icon")}
        {...rest}
      />
    </div>
  );
};

InputDate.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  modificators: PropTypes.string,
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
};

InputDate.defaultProps = {
  id: "",
  title: "",
  className: "",
  name: "",
  modificators: "",
  state: {},
  onChange: () => {},
};
