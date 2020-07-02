import React from 'react';

const ModalHeader = (props) => {
  const { onCloseModal, title, onSubmitForm, changed } = props;

  return (
    <div className="modal-header">
      <h5 className="modal-title">{title}</h5>
      <div className='modalButtons'>
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
          onClick={onCloseModal}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary"
          disabled={!changed}
          onClick={onSubmitForm}
        >
          Save changes
        </button>
      </div>
    </div>
  );
}

export default ModalHeader;