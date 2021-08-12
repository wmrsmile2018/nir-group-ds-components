import React from "react";
import PropTypes from "prop-types";
import compSvg from "./svg/comp.svg";
import "./AccountModalInfoBlock.scss";

export const AccountModalInfoBlock = ({
  showSkip = true,
  showUnavailable = false,
  handleOnClickGoToSettings,
  handleOnClickSkip,
  title,
}) => {
  return (
    <div className="account-modal-info-block">
      <p className="account-modal-info-block--title">
        {showUnavailable && (
          <span>
            Сервис недоступен <br />
          </span>
        )}
        {title}
      </p>
      <div className="account-modal-info-block--sub-title">
        <img src={compSvg} alt="" />
        <p>Упрощенная учетная запись</p>
      </div>

      <p className="account-modal-info-block--discription">
        Учетная запись организации не подтверждена, поэтому большинство сервисов вам не доступно.
      </p>

      <p className="account-modal-info-block--discription">
        Расширенная учетная запись дает неограниченный доступ к работе с системой, в том числе к
        формированию заявок на сертификацию, мониторинг процессов сертификации в режиме реального
        времени, а также сохранения информации для анализа и статистики.
      </p>

      <p className="account-modal-info-block--discription">
        Получить расширенную учетную запись просто: внесите недостающую информацию об организации и
        приобретите один из вариантов доступа в систему
      </p>
      <button
        className="ds-button-shadow account-modal-info-block-goTo"
        onClick={handleOnClickGoToSettings}
      >
        Настроить учетную запись
      </button>
      {showSkip && (
        <button
          className="ds-button-shadow account-modal-info-block-skip"
          onClick={handleOnClickSkip}
        >
          Настроить позже и продолжить
        </button>
      )}
    </div>
  );
};

AccountModalInfoBlock.propTypes = {
  showSkip: PropTypes.bool,
  showUnavailable: PropTypes.bool,
  handleOnClickGoToSettings: PropTypes.func,
  handleOnClickSkip: PropTypes.func,
  title: PropTypes.string,
};
