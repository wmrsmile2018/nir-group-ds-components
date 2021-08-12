import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./CheckboxContainer.scss";

export const CheckboxContainer = ({
  children,
  className,
  organization,
  registration,
  modificators,
}) => {
  const classes = classNames("checkbox-container", className, modificators);
  return (
    <div className={classes}>
      <div className="checkbox__ontainer-wrapper">{children}</div>
      <div className="checkbox-container__description">
        {organization && <p className="checkbox-container__organiztion">{organization}</p>}
        {registration && <p className="checkbox-container__registration">{registration}</p>}
      </div>
    </div>
  );
};

CheckboxContainer.propTypes = {
  children: PropTypes.node.isRequired,
  organization: PropTypes.string.isRequired,
  registration: PropTypes.string.isRequired,
  className: PropTypes.string,
  modificators: PropTypes.string,
};

CheckboxContainer.defaultProps = {
  className: "",
  modificators: "",
};
