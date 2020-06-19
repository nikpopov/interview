import React from 'react';

const TableHeader = () => {
  return (
    <div className='row cols-12'>
      <div className='col-3'>
        <h6>Company</h6>
      </div>
      <div className='col-4'>
        <h6>Short Project Description</h6>
      </div>
      <div className='col-2'>
        <h6>Contact Person</h6>
      </div>
      <div className='col-1'>
        <h6>Interview Date</h6>
      </div>
      <div className='col-1'>
        <h6>Interview Time</h6>
      </div>
      <div className='col-1'>
        Remove record
      </div>
    </div>
  )
}

export default TableHeader;