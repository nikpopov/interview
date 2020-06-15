import React, { Fragment } from 'react';

function TableItem(props) {
  const { company, project, contactPerson, contactPhone, date, time, impression } = props;
  return (
    <Fragment>
      <div className='col-2'>
        <h6>{company}</h6>
      </div>
      <div className='col-2'>
        <h6>{project}</h6>
      </div>
      <div className='col-2'>
        <h6>{contactPerson}</h6>
      </div>
      <div className='col-2'>
        <h6>{contactPhone}</h6>
      </div>
      <div className='col-1'>
        <h6>{date}</h6>
      </div>
      <div className='col-1'>
        <h6>{time}</h6>
      </div>
      <div className='col-2'>
        <h6>{impression}</h6>
      </div>
    </Fragment>
  );
}

export default TableItem;