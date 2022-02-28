
import React,{useState} from 'react';
import { Button } from 'primereact/button';

const Test = ({title,key1,type,setDisplayBasic}) => {
    const onClick=()=>{
      setDisplayBasic(true)
    }
    return (
      <div key={key1} className="AvailableTestsTile">
        <h4>Data Science</h4>
        <span>Marks: 50</span>
        <span>Duration: 20</span>
        <span>Number Of Questions: 15</span>
        {
          type==='Completed'?<span>Your score: 5</span>:null
        }
        <p>This exam covers topic1, topic2</p>
      
        <Button label={type==='Completed'?"Completed":"Start"} disabled={type==='Completed'} 
        onClick={onClick}
        style={{
          backgroundColor:'var(--blue-500)',
          alignSelf:'center'  
          }} />
      </div>
    );
}
export default Test                 