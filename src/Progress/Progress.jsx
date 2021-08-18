import React from "react";

import bigCompletedSvg from "./svg/bigCompleted.svg";
import cosSvg from "./svg/COS.svg";
import labSvg from "./svg/lab.svg";
import organSvg from "./svg/organ.svg";
import smallCompletedSvg from "./svg/smallCompleted.svg";

import "./Progress.scss";

const Progress = ({ steps, stepsCompleted, curStep, className }) => {
  const generateCode = () => {
    const array = steps.map((el, i) => {
      const mainObj = (
        <div className={`progress__piece ${el.size}`}>
          {curStep - 1 === i ? (
            <div className="progress__information-wrapper">
              <div className="progress__information">
                <p className="progress__text">{el.title}</p>
              </div>
              {i !== 15 && <div className={`progress__Rightline ${el.size}`}></div>}
            </div>
          ) : (
            <>
              {((curStep - 1 === 0 && i === 1) || i === 9) && (
                <div className={`progress__Leftline ${el.size}`}></div>
              )}
              <div
                className={`progress__dot ${el.size} ${
                  stepsCompleted.indexOf(i + 1) !== -1 ? "finished" : ""
                }`}
              >
                <p className="progress__step">{i + 1}</p>
                {stepsCompleted.indexOf(i + 1) !== -1 &&
                  (el.size === "big" ? (
                    <img src={bigCompletedSvg} alt="bigSize" />
                  ) : (
                    <img src={smallCompletedSvg} alt="smallSize" />
                  ))}
              </div>
              {i !== 15 && <div className={`progress__Rightline ${el.size}`}></div>}
            </>
          )}
        </div>
      );

      return i === 0 ? (
        <div key={el.id} className="progress__firstStep">
          <div className={`progress__piece ${el.size}`}>
            {curStep - 1 === i ? (
              <div className="progress__information-wrapper">
                <div className="progress__information">
                  <p className="progress__text">{el.title}</p>
                </div>
              </div>
            ) : (
              <>
                <div className={`progress__dot ${el.size} finished`}>
                  <p className="progress__step">{i + 1}</p>
                  <img src={bigCompletedSvg} alt="bigSize" />
                </div>
                <div className="progress__Rightline"></div>
              </>
            )}
          </div>
          <div className="progress__border"></div>
          <div className="progress__COS">
            <img src={cosSvg} alt="COS" />
            <p>ЦОС</p>
          </div>
        </div>
      ) : (
        <div key={el.id} className="progress__bar progress__othersSteps">
          {mainObj}
        </div>
      );
    });

    const first = array[0];
    const leftPart = array.slice(1, 9);
    const middlePart = array.slice(9, 12);
    const rightPart = array.slice(12, 16);
    return [
      first,
      <div key="mainSteps" className="progress__mainSteps">
        {leftPart}
        <div className="progress__middleSteps">
          <div className="progress__lab">
            <img src={labSvg} alt="lab" />
            <p>Испытательная лаборатория</p>
          </div>
          <div className="progress__border"></div>
          {middlePart}
        </div>
        {rightPart}
        <div className="progress__border"></div>
        <div className="progress__organ">
          <img src={organSvg} alt="organ" />
          <p>Орган по сертификации</p>
        </div>
      </div>,
    ];
  };

  return <div className={`progress ${className}`}>{generateCode()}</div>;
};

export default React.memo(Progress);
