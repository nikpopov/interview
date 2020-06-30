import React from 'react';
import TextInput from '../formComponents/TextInput';
import GeneralInfoBlock from '../blockComponents/GeneralInfoBlock';
import InterviewList from '../blockComponents/InterviewList';

const ModalBody = (props) => {
  const { record, onValueChange, onAddInterview } = props;

  return (
    <div className="modal-body">
      <div className='col-12'>
        <GeneralInfoBlock
          record={record}
          onValueChange={onValueChange}
        />
        <InterviewList
          record={record}
          onValueChange={onValueChange}

        />
        <div className='setUpInterviewBtnWrapper'>
          <button
            className='btn btn-primary setUpInterviewBtn'
            onClick={() => onAddInterview()}
          >
            Set Up New Interview
          </button>
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