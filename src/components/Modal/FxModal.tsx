import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

export const FxModal: React.FC<{ showModal: any; setShowModal: any }> = ({
  showModal,
  setShowModal,
}) => {
  const toggle = () => setShowModal(!showModal);
  return (
    <Modal isOpen={showModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>test</ModalHeader>
      <ModalBody>
        <h4>Modal Body</h4>
      </ModalBody>
    </Modal>
  );
};
