import React, { useState,useEffect } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import CourseTile from './CourseTile';
import './VirtualScrollerDemo.css';
import { Button } from 'primereact/button';
import axios from 'axios';

const VirtualScrollerDemo = ({onClick}) => {
  const basicItems = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  const [courses, setCourses] = useState([
    { title: 'Css' },
    { title: 'HTML' },
    { title: 'Js' },
    
  ])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'http://127.0.0.1:8080/courses/list',
      );
      const json = await res.json();
      console.log(json);
    };
    fetchData();
  });


  const courseTemplate = (item, options) => {
    return <CourseTile title={item.title} key={1} />;
  }
  return (
    
    <div className="virtualscroller-demo">
       <div className='wrapper'>
         <div className='sectionHeader'>
         <h3>Courses</h3>
         {onClick&&<Button icon="pi pi-plus" style={{backgroundColor:'var(--blue-500)'}} label='Add Course' onClick={() => onClick('displayBasic')} />
          }</div>
        <VirtualScroller  items={courses} itemSize={250} itemTemplate={courseTemplate} orientation="horizontal" />
      </div>
    </div>
  )
}
export default VirtualScrollerDemo


// import React, { useState } from 'react';
// import { Dialog } from 'primereact/dialog';
// import { Button } from 'primereact/button';
// import '../../styles/DialogDemo.css';

// const DialogDemo = () => {
//     const [displayBasic, setDisplayBasic] = useState(false);
//     const [displayPosition, setDisplayPosition] = useState(false);
//     const [position, setPosition] = useState('center');


   
//     return (
//         <div className="dialog-demo">
//             <div className="card">
//                 <h5>Basic</h5>
//                 <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />
//                 <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                 </Dialog>
//             </div>
//         </div>
//     )
// }
                 
// export default DialogDemo