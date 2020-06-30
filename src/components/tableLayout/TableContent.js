import React from 'react';
import TableItem from './TableItem';

const TableContent = (props) => {
  const { list, onEditCompanyData, onRemoveRecord } = props;

  return (
    <div className='cols-12'>
      {list && list.length > 0
      ? list.map((interview, i) => {
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