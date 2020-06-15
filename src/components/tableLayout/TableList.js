import React from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

function TableList(props) {
  const { list, formIsOpen } = props;

  return (
    <div className='container fluid'>
      <TableHeader />
      {list && list.length
      ? <TableContent list={list} />
      : !formIsOpen && <div className='col-12'>There is no any data in your database</div>
      }
    </div>
  );
}

export default TableList;