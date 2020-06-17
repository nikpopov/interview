import React from 'react';

const ModalFooter = (props) => {
  const { closeModal, onSubmitForm } = props;

  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
        onClick={closeModal}
      >
        Close
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onSubmitForm}
      >
        Save changes
      </button>
    </div>
  );
}

export default ModalFooter;