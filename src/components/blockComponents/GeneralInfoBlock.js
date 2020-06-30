import React, { Fragment } from 'react';
import TextInput from '../formComponents/TextInput';

const GeneralInfoBlock = props => {
  const { record, onValueChange } = props;
  return (
    <Fragment>
      <h4 className='textAlignLeft'>General Information</h4>
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
            width={8}
            fieldName={'officePlacement'}
            onChange={onValueChange}
            value={record.officePlacement || ''}
            placeholder='Office placement'
          />
          <TextInput
            width={4}
            fieldName={'employeeNumber'}
            onChange={onValueChange}
            value={record.employeeNumber || ''}
            placeholder='Employee number'
          />
        </div>
        <div className='form-group row'>
          <TextInput
            width={12}
            fieldName={'remarkGeneral'}
            onChange={onValueChange}
            value={record.remarkGeneral || ''}
            placeholder='Remark'
          />
        </div>
    </Fragment>
  );
}

export default GeneralInfoBlock;

