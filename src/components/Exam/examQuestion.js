import React, { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';

const ExamQuestion = ({ question, index, onselect }) => {
  const [checkedId, setChecked]= useState();
  const onChange=(e)=>{
    onselect(e,index)
    setChecked(e.value.id)
  }
  return (
  <div className="questionTile" key={`${index+10}`}>
    <div className='circularDiv'>Q1</div>
    <div className="details">
      <div className='leftDiv'>
        <div className='content'>{question.content}</div>
        {question.type === 'selectOne' ?
          question.choices
            .map((c) => {
              return (
                <div key={c.id} style={{margin:'5px 0px'}} className="field-radiobutton">
                  <RadioButton inputId={c.id} name={`${index+12}`}  checked={checkedId===c.id} value={c} onChange={(e)=>onChange(e)} disabled={c.id === 'R'} />
                  <label htmlFor={c.id}>{c.content}</label>
                </div>
              )
            })
          : null
        }
      </div>

    </div>

  </div>);
}

export default ExamQuestion;