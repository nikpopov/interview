import React from 'react';
import classnames from 'classnames';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

const Modal = (props) => {
  const { modalIsOpen, closeModal, onValueChange, record, onSubmitForm } = props;

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
          <ModalHeader />
          <ModalBody
            onValueChange={onValueChange}
            record={record}
          />
          <ModalFooter
            closeModal={closeModal}
            onSubmitForm={onSubmitForm}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;