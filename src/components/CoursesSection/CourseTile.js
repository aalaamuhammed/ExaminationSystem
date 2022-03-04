
import React,{useState} from 'react';
const Course = ({title,id, setCourseId,}) => {
    return (
      <div key={id} className="courseTile" onClick={()=>setCourseId(id)}>
        {title}
      </div>
    );
}
export default Course                 