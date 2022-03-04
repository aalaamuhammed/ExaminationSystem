import React,{useState,useEffect} from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import axiosInstance from '../adapters/axiosConfig';
const CourseForm = ({setCourse,course}) => {
  const [instructors,setInstructors]= useState([])
  const [instructor, setInstructor] = useState(instructors.length>0?instructors[0]:null);

  useEffect(() => {
    console.log('coursess',axiosInstance.defaults.headers);
    const fetchData = async () => {
      const res = await axiosInstance.get(`/instructors`)
      if (res.status===200) {
        const mapped =res.data.data.map(ins=> {return{name:ins.Name,id:ins.Id}})
        console.log(mapped);
        setInstructors(mapped)
      }   
    };
    fetchData();
  },[]);
  const setIns =(e)=>{
    setInstructor({name:e.value.name,id:e.value.id})
    setCourse({...course,insId:e.value.id})
    console.log(course,instructor);
  }
  return (
    <>
      <div className='courserDetails'>
        <span className="p-input-icon-left" name="inTxt" >
          <i className="pi pi-book" />
          <InputText id="inputtext" placeholder="Course Name" value={course.Name} onChange={(e) => setCourse({...course,Name:e.target.value})} />

        </span>
        <span name="inTxt">
          <Dropdown inputId="dropdown" value={instructor}  options={instructors} onChange={(e) => setIns(e)} optionLabel="name" placeholder='Instructor' />
        </span>
      </div>
      <div className='topics'>
        <span className="p-input-icon-left" name="inTxt">
          <i className="pi pi-book" />
          <InputText id="inputtext" placeholder="Topic" value={course.fTopicName} onChange={(e) => setCourse({...course,fTopicName:e.target.value})} />

        </span>
        <span className="p-input-icon-left" name="inTxt">
          <i className="pi pi-book" />
          <InputText id="inputtext" placeholder="Topic" value={course.sTopicName} onChange={(e) => setCourse({...course,sTopicName:e.target.value})} />
        </span>
      </div>
    </>
  )
}
export default CourseForm