import React from 'react';
import classnames from 'classnames';

const TableItem = (props) => {
  const { index, interview, onEditInterviewData } = props;

  return (
    <div
      className={classnames({
        'row': true,
        'topBottom1REM': true,
        'pointer': true,
        'odd': index % 2 === 1
      })}
      onClick={() => onEditInterviewData(interview)}
    >
      <div className='col-3 textAlignLeft'>
        <h6>{interview.company}</h6>
      </div>
      <div className='col-5 textAlignLeft'>
        <h6>{interview.project}</h6>
      </div>
      <div className='col-2 textAlignLeft'>
        <h6>{interview.contactPerson}</h6>
      </div>
      <div className='col-1'>
        <h6>{interview.date}</h6>
      </div>
      <div className='col-1'>
        <h6>{interview.time}</h6>
      </div>
    </div>
  );
}

export default TableItem;