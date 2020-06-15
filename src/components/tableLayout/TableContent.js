import React from 'react';
import TableItem from './TableItem';

function TableContent(props) {
  const { list } = props;

  return (
    <div className='row cols-12'>
      {list && list.length > 0
      ? list.map((interview, key) => <TableItem key={key} interview={interview}/>)
      : null}
    </div>
  )
}

export default TableContent;