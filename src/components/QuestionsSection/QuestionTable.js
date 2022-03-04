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



import React, { useState,useEffect } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import QuestionTile from './QuestionTile';
import './VirtualScrollerDemoo.css';
import { Button } from 'primereact/button';
import axiosInstance from '../../adapters/axiosConfig';
const VirtualScrollerDemo = ({onClick,courseId}) => {
  
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.get(`/questions/courseQuestions/${courseId}`)
      if (res.status===200) {
        const mapped =res.data.data.map((q,i)=> {return{
          content:q?.Body,
          choices: q?.Choices,
          mark:q?.Degree,
          correctAnswer:q?.Correct_Answer,
          index:i
        }})
        console.log({courseId,mapped});
        setQuestions(mapped)
      }   
    };
    fetchData();
  },[courseId]);
  const questionTemplate = (item, options) => {
    return <QuestionTile question={item} key={1} />;
  }

  return (
    
    <div className="virtualscroller-demoo">
       <div className='wrapper'>
       <div className='sectionHeader'>
         <h3>Questions</h3>
         <Button icon="pi pi-plus" style={{backgroundColor:'var(--blue-500)'}} label='Add Question' onClick={() => onClick('q')} />
         </div>
        <VirtualScroller items={questions} itemSize={250} itemTemplate={questionTemplate} orientation="virtical" />
      </div>
    </div>
  )
}
export default VirtualScrollerDemo