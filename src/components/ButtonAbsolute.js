import React from 'react';

function ButtonAbsolute(props) {
  const { formIsOpen, toggleModal } = props;
  return (
    <div className='fixedTopRight'>
        <button
          type='button'
          className='btn btn-primary'
          onClick={toggleModal}
          disabled={formIsOpen}
        >
          Add New Record
        </button>
      </div>
  );
}

export default ButtonAbsolute;