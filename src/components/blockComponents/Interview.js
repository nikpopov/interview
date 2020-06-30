import React, { Fragment } from 'react';
import TextInput from '../formComponents/TextInput';

const Interview = props => {
  const { index, interview, onValueChange } = props;

  return (
    <Fragment>
      <div className='interviewGroup'>
        <div className='form-group row'>
          <TextInput
            width={6}
            fieldName={'type'}
            onChange={(e) => onValueChange(e, index)}
            value={interview.type || ''}
            placeholder='Interview Type'
          />
          <TextInput
            width={3}
            fieldName={'date'}
            onChange={(e) => onValueChange(e, index)}
            value={interview.date || ''}
            placeholder='Interview date'
          />
          <TextInput
            width={3}
            fieldName={'time'}
            onChange={(e) => onValueChange(e, index)}
            value={interview.time || ''}
            placeholder='Interview time'
          />
        </div>
        <div className='form-group row'>
          <TextInput
            width={6}
            fieldName={'interviewer'}
            onChange={(e) => onValueChange(e, index)}
            value={interview.interviewer || ''}
            placeholder='Contact Person'
          />
           <TextInput
            width={6}
            fieldName={'contact'}
            onChange={(e) => onValueChange(e, index)}
            value={interview.contact || ''}
            placeholder='Contact: mail, skype, phone'
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Interview;