import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { DSModalContainer } from "@/DSComponents/DSModalContainer/DSModalContainer";
import { Portal } from "@components/Portal/Portal";
import { AccountModalInfoBlock } from "./AccountModalInfoBlock/AccountModalInfoBlock";

export const ModalAccount = ({ domNode, showModal, title }) => {
  const history = useHistory();
  const handleOnClickGoToSettings = ({}) => {
    showModal(false);
    history.push("/app/settings/organization/price_list?action=review");
  };

  return (
    <Portal domNode={domNode}>
      <DSModalContainer className={"ds-modal-mask-dark account-modal-info-block--modal"}>
        <AccountModalInfoBlock
          showSkip={false}
          showUnavailable
          handleOnClickGoToSettings={handleOnClickGoToSettings}
          title={title}
        />
      </DSModalContainer>
    </Portal>
  );
};

ModalAccount.propTypes = {
  domNode: PropTypes.node,
  showModal: PropTypes.func,
};
