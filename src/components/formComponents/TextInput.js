import React, { Fragment } from 'react';

const TextInput = (props) => {
  const { fieldName, labelText, onChange, value } = props;

  return (
    <Fragment>
      <label htmlFor={fieldName} className='col-sm-2 col-form-label'>{labelText}</label>
      <div className='col-sm-10'>
        <input
          name={fieldName}
          type='text'
          className='form-control'
          onChange={onChange}
          value={value}
        />
      </div>
    </Fragment>
  );
}

export default TextInput;