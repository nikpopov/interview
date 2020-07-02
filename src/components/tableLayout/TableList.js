import React from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

const TableList = (props) => {
  const { recordList, modalIsOpen, onEditCompanyData, onRemoveRecord } = props;

  return (
    <div className='container fluid'>
      <TableHeader />
      {recordList && recordList.length
      ? <TableContent recordList={recordList} onEditCompanyData={onEditCompanyData} onRemoveRecord={onRemoveRecord} />
      : !modalIsOpen && <div className='col-12'>There is no any data in your database</div>
      }
    </div>
  );
}

export default TableList;