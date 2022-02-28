// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';

// const DataTableFlexScrollDemo = () => {

//     const [questions, setQuestions] = useState([
//       {name:'aa',country:'aaa',representative:'aaaa',status:'sss'}
//     ]);  
//     return (
//         <div>
//             <h3>Questions</h3>
//             <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
//                 <DataTable value={questions} scrollable scrollHeight="flex">
//                     <Column field="name" header="Content"></Column>
//                     <Column field="country" header="Type"></Column>
//                     <Column field="representative" header="Choices"></Column>
//                     <Column field="status" header="Correct Answer"></Column>
//                 </DataTable>
//             </div>
//         </div>
//     );
// }



import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import QuestionTile from './QuestionTile';
import './VirtualScrollerDemoo.css';
import { Button } from 'primereact/button';

const VirtualScrollerDemo = ({onClick}) => {
  const basicItems = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  console.log(basicItems);
  const [courses, setCourses] = useState([
    { title: 'Css' },
    { title: 'HTML' },
    { title: 'Js' },
    
  ])
  const questionTemplate = (item, options) => {
    return <QuestionTile title={item.title} key={1} />;
  }

  return (
    
    <div className="virtualscroller-demoo">
       <div className='wrapper'>
       <div className='sectionHeader'>
         <h3>Questions</h3>
         <Button icon="pi pi-plus" style={{backgroundColor:'var(--blue-500)'}} label='Add Course' onClick={() => onClick('displayBasic')} />
         </div>
        <VirtualScroller items={courses} itemSize={250} itemTemplate={questionTemplate} orientation="virtical" />
      </div>
    </div>
  )
}
export default VirtualScrollerDemo