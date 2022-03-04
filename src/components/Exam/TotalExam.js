import React, { useEffect, useState } from 'react';

import { Button } from 'primereact/button';
import ExamQuestion from './examQuestion';

const VirtualScrollerDemo = () => {
  const [courses, setCourses] = useState([
    { title: 'Css' },
    { title: 'HTML' },
    { title: 'Js' },

  ])
  
  const [studentAnswer,setStudentAnswer]= useState([])
  const [selectedAnswers,setSelectedAnswers]= useState()
  const questions = [{
    content: 'Q - Which of the following property is used as shorthand to specify a number of other font properties?',
    choices: [{ id: 1, content: 'font-size' }, { id: 2, content: 'font' }, { id: 3, content: 'font-variant' }, { id: 5, content: 'font-weight' }],
    type: 'selectOne',
  },
  {
    content: 'Q - Which of the following property is used as shorthand to specify a number of other font properties?',
    choices: [{ id: 1, content: 'font-size' }, { id: 2, content: 'font' }, { id: 3, content: 'font-variant' }, { id: 5, content: 'font-weight' }],
   
    mark: 2,
    type: 'selectOne',
    studentAnswer: [],
    correctAnswer: ['1', '2']
  },
  {
    content: 'Q - Which of the following property is used as shorthand to specify a number of other font properties?',
    choices: [{ id: 1, content: 'font-size' }, { id: 2, content: 'font' }, { id: 3, content: 'font-variant' }, { id: 5, content: 'font-weight' }],
   
    mark: 2,
    type: 'selectOne',
    studentAnswer: [],
    correctAnswer: ['1', '2']
  }]
  let prepareArray=[]
  useEffect(() => {
    
    for(let i =0; i<questions.length;i++){
      prepareArray.push({[`${i}`]:[]})
    }
    console.log('useEffect',prepareArray)
    setStudentAnswer(prepareArray);
  }, []);

  const onselect=(e,index)=>{
    prepareArray=[...studentAnswer]
    prepareArray[index][`${index}`]= e.value.id
    console.log(prepareArray);
    setStudentAnswer(prepareArray)

  }
  const summit=()=>{
      console.log(studentAnswer)
  }

  return (

    
      <div className='wrapper'>
        <div className='sectionHeader'>
          <h3>Exam</h3>
        </div>
        {/*  */}
        {
          questions.map((q,i)=><ExamQuestion onselect={onselect} question={q} index={i}/>)
        }
       
        {/*  */}
        <div style={{ textAlign:'center'}}>
        <Button style={{ backgroundColor: 'var(--blue-500)' }} label="Summit" onClick={()=>summit()}/>
        </div>
      </div>
  
  )
}
export default VirtualScrollerDemo

