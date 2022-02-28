import React from 'react';
import { RadioButton } from 'primereact/radiobutton';

const ExamQuestion = ({ question, index, onselect }) => {
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
                <div key={c.id} className="field-radiobutton">
                  <RadioButton inputId={c.id} name="c" value={c} onChange={(e)=>onselect(e,index)} disabled={c.id === 'R'} />
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