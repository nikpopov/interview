import React from 'react';
import classnames from 'classnames';

const TableItem = (props) => {
  const { index, interview, onEditCompanyData, onRemoveRecord } = props;

  return (
    <div
      className={classnames({
        'row': true,
        'topBottom1REM': true,
        'odd': index % 2 === 1
      })}
    >
      <div
        className='col-3 textAlignLeft pointer'
        title="Show all company's projects"
      >
        <h6>{interview.company}</h6>
      </div>
      <div
        className='col-4 textAlignLeft pointer'
        onClick={() => onEditCompanyData(interview)}
        title='Show & Edit Project details'
      >
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
      <div>
        <button
          className='btn btn-secondary'
          onClick={() => onRemoveRecord(interview)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TableItem;