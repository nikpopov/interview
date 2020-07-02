import React from 'react';
import classnames from 'classnames';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import './modal.css'

const Modal = (props) => {
  const {
    record, modalIsOpen, onCloseModal, onValueChange, onSubmitForm, onAddInterview, changed
  } = props;

  return (
    <div
      className={classnames('fade modal beige',{
        'show': modalIsOpen
      })}
      tabIndex="-1"
      role="dialog"
      area-hidden={!modalIsOpen ? 'true' : undefined}
      area-modal={modalIsOpen ? 'true' : undefined}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <ModalHeader
            onCloseModal={onCloseModal}
            onSubmitForm={onSubmitForm}
            title={record.project}
            changed={changed}
          />
          <ModalBody
            onValueChange={onValueChange}
            onAddInterview={onAddInterview}
            record={record}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;