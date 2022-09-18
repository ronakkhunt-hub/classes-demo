import React from "react";
import Modal from "react-bootstrap/Modal";

function ReactModal(props) {
  const { title, show, onClose, children } = props;
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

export default ReactModal;
