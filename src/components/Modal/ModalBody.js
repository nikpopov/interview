import React from 'react';
import TextInput from '../formComponents/TextInput';

const ModalBody = (props) => {
  const { onValueChange, record } = props;

  return (
    <div className="modal-body">
      <div className='col-12'>
        <div className='form-group row'>
          <TextInput
            width={12}
            fieldName='company'
            onChange={onValueChange}
            value={record.company || ''}
            placeholder='Company name'
          />
        </div>
        <div className='form-group row'>
          <TextInput
            width={12}
            fieldName={'project'}
            onChange={onValueChange}
            value={record.project || ''}
            placeholder='Project description'
          />
        </div>
        <div className='form-group row'>
          <TextInput
            width={6}
            fieldName={'contactPerson'}
            onChange={onValueChange}
            value={record.contactPerson || ''}
            placeholder='Contact'
          />
           <TextInput
            width={6}
            fieldName={'contactPhone'}
            onChange={onValueChange}
            value={record.contactPhone || ''}
            placeholder='Phone'
          />
        </div>
        <div className='form-group row'>
          <TextInput
            width={6}
            fieldName={'date'}
            onChange={onValueChange}
            value={record.date || ''}
            placeholder='Interview date'
          />
          <TextInput
            width={6}
            fieldName={'time'}
            onChange={onValueChange}
            value={record.time || ''}
            placeholder='Interview time'
          />
        </div>
        <div className='form-group row'>
          <TextInput
            width={6}
            fieldName={'officePlacement'}
            onChange={onValueChange}
            value={record.impression || ''}
            placeholder='Office placement'
          />
          <TextInput
            width={6}
            fieldName={'employeeNumber'}
            onChange={onValueChange}
            value={record.impression || ''}
            placeholder='Employee number'
          />
        </div>
        <div className='form-group row'>
          <TextInput
            width={12}
            fieldName={'impression'}
            onChange={onValueChange}
            value={record.impression || ''}
            placeholder='Impression'
          />
        </div>
      </div>
    </div>
  )
}

export default ModalBody;