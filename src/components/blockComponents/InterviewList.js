import React, { Fragment } from 'react';
import Interview from './Interview';

const InterviewList = props => {
  const { record, onValueChange } = props;

  return (
    <Fragment>
      <h4 className='textAlignLeft'>Interview List</h4>
      {
        record.interviewList
        ? record.interviewList.map((interview, index) => {
           return (
            <Interview
              record={record}
              key={index}
              index={index}
              interview={interview}
              onValueChange={onValueChange}
            />
          );
        })
        : <h5>No Appointed Interviews</h5>
      }
    </Fragment>
  );
}

export default InterviewList;