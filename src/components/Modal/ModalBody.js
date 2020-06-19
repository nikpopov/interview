import React from 'react';
import TextInput from '../formComponents/TextInput';

const ModalBody = (props) => {
  const { onValueChange, record } = props;

  return (
    <div className="modal-body">
      <div className='col-12'>
        <div className='form-group row'>
          <TextInput
            fieldName={'company'}
            labelText={'Company'}
            onChange={onValueChange}
            value={record.company || ''}
          />
        </div>
        <div className='form-group row'>
          <TextInput
            fieldName={'project'}
            labelText={'Project Description'}
            onChange={onValueChange}
            value={record.project || ''}
          />
        </div>
        <div className='form-group row'>
          <TextInput
            fieldName={'contactPerson'}
            labelText={'Contact Person'}
            onChange={onValueChange}
            value={record.contactPerson || ''}
          />
        </div>
        <div className='form-group row'>
          <TextInput
            fieldName={'contactPhone'}
            labelText={'Contact phone'}
            onChange={onValueChange}
            value={record.contactPhone || ''}
          />
        </div>
        <div className='form-group row'>
          <TextInput
            fieldName={'date'}
            labelText={'Interview Date'}
            onChange={onValueChange}
            value={record.date || ''}
          />
        </div>
        <div className='form-group row'>
          <TextInput
            fieldName={'time'}
            labelText={'Interview Time'}
            onChange={onValueChange}
            value={record.time || ''}
          />
        </div>
        <div className='form-group row'>
          <TextInput
            fieldName={'impression'}
            labelText={'Impression'}
            onChange={onValueChange}
            value={record.impression || ''}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalBody;