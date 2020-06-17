import React from 'react';

const ModalBody = (props) => {
  const { onValueChange, record } = props;
  return (
    <div className="modal-body">
      <div className='col-12'>
        <div className='form-group row'>
          <label htmlFor='company' className='col-sm-2 col-form-label'>Company</label>
          <div className='col-sm-10'>
            <input
              id='company'
              name='company'
              type='text'
              className='form-control'
              onChange={onValueChange}
              value={record.company || ''}
            />
          </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='project' className='col-sm-2 col-form-label'>Project Description</label>
            <div className='col-sm-10'>
              <input
                id='project'
                name='project'
                type='text'
                className='form-control'
                onChange={(e) => onValueChange(e)}
                value={record.project || ''}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='contactPerson' className='col-sm-2 col-form-label'>Contact Person</label>
            <div className='col-sm-10'>
              <input
                id='contactPerson'
                name='contactPerson'
                type='text'
                className='form-control'
                onChange={(e) => onValueChange(e)}
                value={record.contactPerson || ''}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='contactPhone' className='col-sm-2 col-form-label'>Contact phone</label>
            <div className='col-sm-10'>
              <input
                id='contactPhone'
                name='contactPhone'
                type='text'
                className='form-control'
                onChange={(e) => onValueChange(e)}
                value={record.contactPhone || ''}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='date' className='col-sm-2 col-form-label'>Interview Date</label>
            <div className='col-sm-10'>
              <input
                id='date'
                name='date'
                type='text'
                className='form-control'
                onChange={(e) => onValueChange(e)}
                value={record.date || ''}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='time' className='col-sm-2 col-form-label'>Interview Time</label>
            <div className='col-sm-10'>
              <input
                id='time'
                name='time'
                type='text'
                className='form-control'
                onChange={(e) => onValueChange(e)}
                value={record.time || ''}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='impression' className='col-sm-2 col-form-label'>Impression</label>
            <div className='col-sm-10'>
              <input
                id='impression'
                name='impression'
                type='text'
                className='form-control'
                onChange={(e) => onValueChange(e)}
                value={record.impression || ''}
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default ModalBody;