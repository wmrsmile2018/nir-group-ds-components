import React, { useMemo, useEffect, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import autosize from "autosize";

import "./AutoSizeInput.scss";

export const AutoSizeInput = ({ className, modificators, title, state, onChange, name, id }) => {
  const textarea = useRef(null);
  const value = useMemo(() => (typeof state === "string" ? state : state[name]), [state]);
  const newId = useMemo(() => id || uuid(), []);
  const classes = classNames("auto-size-input", className, modificators);

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
        value={value}
      />
    </div>
  );
};

AutoSizeInput.propTypes = {
  className: PropTypes.string,
  modificators: PropTypes.string,
  title: PropTypes.string,
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: () => {},
  name: PropTypes.string,
  id: PropTypes.string,
};

AutoSizeInput.defaultProps = {
  className: "",
};
