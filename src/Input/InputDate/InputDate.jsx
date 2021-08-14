import React, { useMemo, useCallback } from "react";
import DatePicker from "react-date-picker";
import clsx from "clsx";
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
  value,
  onChange,
  ...rest
}) => {
  const val = useMemo(() => {
    if (value === null) return null;

    return value instanceof Date ? value : value[name];
  }, [value]);
  const newId = useMemo(() => id || uuid(), []);
  const classes = clsx("input-date", className, { [modificators]: modificators });

  const handleOnChange = useCallback((data) => {
    onChange({
      target: {
        value: data,
        name,
      },
    });
  }, []);

  return (
    <div className={classes}>
      <p className="input-date__title" htmlFor={newId}>
        {title}
      </p>
      <DatePicker
        id={newId}
        onChange={handleOnChange}
        value={val}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
};

InputDate.defaultProps = {
  id: "",
  title: "",
  className: "",
  name: "",
  modificators: "",
  onChange: () => {},
  value: null,
};
