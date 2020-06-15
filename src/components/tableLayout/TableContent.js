import React from 'react';
import TableItem from './TableItem';

function TableContent(props) {
  const { interviews } = props;
  return (
    <div className='row cols-12'>
      {interviews && interviews.length > 0
      ? interviews.map(interview => <TableItem interview={interview}/>)
      : null}
    </div>
  )
}

export default TableContent;