import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteModal = ({ show, onHide, onConfirm, itemName }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      className="bg-dark"
      backdropClassName="modal-background"
    >
    <div className='modal-content bg-dark text-white'>
      <Modal.Header closeButton className='modal-content bg-dark text-white border-0'>
        <Modal.Title style={{ color: 'white' }}>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        {`Are you sure you want to delete?`}
      </Modal.Body>
      <Modal.Footer className="bg-   border-0">
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
};

export default DeleteModal;