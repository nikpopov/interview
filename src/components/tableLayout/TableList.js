import React from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

const TableList = (props) => {
  const { list, modalIsOpen, onEditCompanyData, onRemoveRecord } = props;

  return (
    <div className='container fluid'>
      <TableHeader />
      {list && list.length
      ? <TableContent list={list} onEditCompanyData={onEditCompanyData} onRemoveRecord={onRemoveRecord} />
      : !modalIsOpen && <div className='col-12'>There is no any data in your database</div>
      }
    </div>
  );
}

export default TableList;