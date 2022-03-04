import React, { useState,useEffect } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import CourseTile from './CourseTile';
import './VirtualScrollerDemo.css';
import { Button } from 'primereact/button';
import axiosInstance from '../../adapters/axiosConfig';

const VirtualScrollerDemo = ({onClick, setCourseId}) => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    console.log('coursess',axiosInstance.defaults.headers);
    const fetchData = async () => {
      const res = await axiosInstance.get(`/courses/list`)
      if (res.status===200) {
        const mapped =res.data.data.map(c=> {return{title:c.Crs_Name,id:c.Crs_ID}})
        console.log(mapped);
        setCourses(mapped)
      }   
    };
    fetchData();
  },[]);


  const courseTemplate = (item, options) => {
    return <CourseTile title={item.title} id={item.id} setCourseId={setCourseId}/>;
  }
  return (
    
    <div className="virtualscroller-demo">
       <div className='wrapper'>
         <div className='sectionHeader'>
         <h3>Courses</h3>
         {onClick&&<Button icon="pi pi-plus" style={{backgroundColor:'var(--blue-500)'}} label='Add Course' onClick={() => onClick('c')} />
          }</div>
        <VirtualScroller  items={courses} itemSize={250} itemTemplate={courseTemplate} orientation="horizontal" />
      </div>
    </div>
  )
}
export default VirtualScrollerDemo