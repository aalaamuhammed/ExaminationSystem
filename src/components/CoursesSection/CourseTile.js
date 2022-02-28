
import React,{useState} from 'react';
const Course = ({title,key1}) => {
    return (
      <div key={key1} className="courseTile">
        {title}
      </div>
    );
}
export default Course                 