import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./CheckboxContainer.scss";

export const CheckboxContainer = ({
  children,
  className,
  organization,
  registration,
  modificators,
}) => {
  const classes = clsx("checkbox-container", className, modificators);
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

// export default React.memo(CheckboxContainer)

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
