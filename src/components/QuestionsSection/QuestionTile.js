import React from 'react';
const courseTemplate = ({question,key1}) => {
    
 
  return (
    <div key={key1} className="questionTile">
      <div className='circularDiv'>Q{question.index}</div>
      <div className="details">
      <div className='leftDiv'>
        <div className='content'>{question.content}</div>
        <div className='choices'>{question.choices.map((c,i)=><div key={i+1} className='choice'>{`${i+1}) ${c}`}</div>)}</div>
      </div>
      <div className='rightDiv'>
        <div className='mark'>Marks:{question.mark}</div>
        <div className='correctAnswer'>Answer:<div className='choice'>{question.correctAnswer}</div></div>
      </div>
      </div>
     
    </div>
  );
}
export default courseTemplate