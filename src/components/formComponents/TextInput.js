import React, { Fragment } from 'react';

const TextInput = (props) => {
  const { fieldName, onChange, value, width, placeholder } = props;

  return (
    <Fragment>
      <div className={`col-sm-${width}`}>
        <input
          name={fieldName}
          type='text'
          className='form-control'
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </Fragment>
  );
}

export default TextInput;