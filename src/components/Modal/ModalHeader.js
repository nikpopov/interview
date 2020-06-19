import React from 'react';

const ModalHeader = (props) => {
  const { closeModal, title } = props;

  return (
    <div className="modal-header">
      <h5 className="modal-title">{title}</h5>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={closeModal}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default ModalHeader;