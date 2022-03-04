import React,{useState} from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
const CourseForm = () => {
  const [value11, setValue11] = useState(null);
  const [value1, setValue1] = useState('');

  return (
    <>
      <div className='courserDetails'>
        <span className="p-input-icon-left" name="inTxt" >
          <i className="pi pi-book" />
          <InputText id="inputtext" placeholder="Course Name" value={value1} onChange={(e) => setValue1(e.target.value)} />

        </span>
        <span name="inTxt">
          <Dropdown inputId="dropdown" value={value11} options={[{ name: 'aaa' }, { name: 'aaa' }, { name: 'aaa' }]} onChange={(e) => setValue11(e.value)} optionLabel="name" placeholder='Instructor' />
        </span>
      </div>
      <div className='topics'>
        <span className="p-input-icon-left" name="inTxt">
          <i className="pi pi-book" />
          <InputText id="inputtext" placeholder="Topic" value={value1} onChange={(e) => setValue1(e.target.value)} />

        </span>
        <span className="p-input-icon-left" name="inTxt">
          <i className="pi pi-book" />
          <InputText id="inputtext" placeholder="Topic" value={value1} onChange={(e) => setValue1(e.target.value)} />

        </span>
      </div>
    </>
  )
}
export default CourseForm