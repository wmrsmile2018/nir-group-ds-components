import React, { useReducer } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import InfoBlock from "../InfoBlock";
import { StepContext } from "./StepContext";
import { arrowIcon } from "../icons";
import { Phase } from "./Phase/";

import "./Step.scss";

const Step = React.memo(({ className, title, date, modificators, tags, step, children }) => {
  const [isHide, setHide] = useReducer((state) => !state, false);
  const classes = clsx("step", className, modificators);
  return (
    <div className={classes}>
      <div className="step-content">
        <div className="step-header">
          <p className="step-header__title">{title}</p>
          <p className={`step-header__arrow ${clsx({ open: !isHide })}`} onClick={setHide}>
            {arrowIcon("step-group__icon")}
          </p>
        </div>
        {!isHide && (
          <>
            <InfoBlock className="step-content__date" label="Создано" value={date} />
            <StepContext.Provider
              value={{
                step,
              }}
            >
              <div className="step-content__information">{children}</div>
            </StepContext.Provider>
          </>
        )}
      </div>
      {!isHide && <div className="step__tag">{tags}</div>}
    </div>
  );
});

export default Step;
Step.Phase = Phase;

Step.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  modificators: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.node),
};

Step.defaultProps = {
  className: "",
  title: "",
  modificators: "",
  tags: [],
};
