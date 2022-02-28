import React from 'react';
const courseTemplate = ({title,key1}) => {
  const question={
    content:'Q - Which of the following property is used as shorthand to specify a number of other font properties?',
    choices:['font-size','font',' font-variant','font-weight'],
    mark:2,
    correctAnswer:['1','2']
  }  
 
  return (
    <div key={key1} className="questionTile">
      <div className='circularDiv'>Q1</div>
      <div className="details">
      <div className='leftDiv'>
        <div className='content'>{question.content}</div>
        <div className='choices'>{question.choices.map((c,i)=><div key={i+1} className='choice'>{`${i+1}) ${c}`}</div>)}</div>
      </div>
      <div className='rightDiv'>
        <div className='mark'>Marks:{question.mark}</div>
        <div className='correctAnswer'>Answer:{question.correctAnswer.map((c,i)=><div key={i+1} className='choice'>{`${i+1}) ${c}`}</div>)}</div>
      </div>
      </div>
     
    </div>
  );
}
export default courseTemplate