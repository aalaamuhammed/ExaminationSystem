import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import AvailableTestsTile from './AvailableTestTile';
import './VirtualScrollerDemo.css';

const VirtualScrollerDemo = () => {
  const basicItems = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  const [courses, setCourses] = useState([
    { title: 'Css' },
    { title: 'HTML' },
    { title: 'Js' },

  ])
  const AvailableTestsTemplate = (item, options) => {
    return <AvailableTestsTile title={item.title} key={1} type="Completed"/>;
  }
  return (

    <div className="virtualscroller-demo1">
      <div className='wrapper'>
        <div className='sectionHeader'>
          <h3>Completed Tests</h3>    
        </div>
        <VirtualScroller items={courses} itemSize={250} itemTemplate={AvailableTestsTemplate
        } orientation="horizontal" />
      </div>
    </div>
  )
}
export default VirtualScrollerDemo

