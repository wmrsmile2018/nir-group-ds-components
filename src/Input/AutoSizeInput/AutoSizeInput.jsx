import React, { useMemo, useEffect, useRef } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import autosize from "autosize";

import "./AutoSizeInput.scss";

export const AutoSizeInput = ({
  className,
  modificators,
  title,
  value,
  onChange,
  name,
  id,
  ...rest
}) => {
  const textarea = useRef(null);
  const val = useMemo(() => {
    if (value === null) {
      return undefined;
    }
    return typeof value === "string" ? value : value[name];
  }, [value]);
  const newId = useMemo(() => id || uuid(), []);
  const classes = clsx("auto-size-input", className, modificators);

  useEffect(() => {
    autosize(textarea);
  }, []);

  return (
    <div className={classes}>
      <p className="auto-size-input__title" htmlFor={newId}>
        {title}
      </p>
      <textarea
        className="auto-size-input__textarea"
        ref={autosize}
        rows={1}
        onChange={onChange}
        name={name}
        id={newId}
        value={val}
        {...rest}
      />
    </div>
  );
};

AutoSizeInput.propTypes = {
  className: PropTypes.string,
  modificators: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
};

AutoSizeInput.defaultProps = {
  className: "",
  modificators: "",
  title: "",
  value: null,
  name: "",
  id: "",
  onChange: () => {},
};
