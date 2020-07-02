import React from 'react';
import TableItem from './TableItem';

const TableContent = (props) => {
  const { recordList, onEditCompanyData, onRemoveRecord } = props;

  return (
    <div className='cols-12'>
      {recordList && recordList.length > 0
      ? recordList.map((interview, i) => {
        return (
          <TableItem
            key={i}
            index={i}
            interview={interview}
            onEditCompanyData={onEditCompanyData}
            onRemoveRecord={onRemoveRecord}
          />
        );
      })
      : null}
    </div>
  )
}

export default TableContent;