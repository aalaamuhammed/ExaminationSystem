
import React, { useState } from 'react';
import '../styles/DialogDemo.css';
import CoursesSection from '../components/CoursesSection/CoursesList';
import AvailableExams from '../components/AvailableTests/AvailableTestsList';
import CompletedTest from '../components/AvailableTests/CompletedTest';
import photo from './student.png';
import { Dialog } from 'primereact/dialog';
import '../styles/DialogDemo.css';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import Test from '../components/Exam/TotalExam';

const Students = () => {
    const [userData, setUserData] = useState({ name: 'aalaa Muhammad', type: 'Student' })
    // const [displayBasic, setDisplayBasic] = useState(false);
    // const [position, setPosition] = useState('center');
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);
    // const onClick = (name, position) => {
    //     setDisplayBasic(true);

    //     if (position) {
    //         setPosition(position);
    //     }
    // }

    // const onHide = (name) => {
    //     setDisplayBasic(false);
    // }

    // const renderFooter = (name) => {
    //     return (
    //         <div>
    //             <Button label="Add" style={{ backgroundColor: 'var(--blue-500)' }} icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
    //         </div>
    //     );
    // }
    return (

        <div>
            <div className="card">

                <div style={{ flex: 1 }}>
                    <h1 style={{ color: 'rgb(25, 98, 233)', marginLeft: 15 }}>Examinatiommn System</h1>
                </div>
                <div style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', display: 'flex', marginRight:50 }} id="UserInfo">
                    <img style={{marginRight:15}} width={70} src={photo} />
                    <span style={{fontSize:25,color:"GrayText"}}>{userData.name}</span>
                </div>
            </div>
            {/* student courses */}
            <CoursesSection />
            {/* student available test */}
            <AvailableExams setDisplayBasic={setVisibleFullScreen} />
            <CompletedTest />
            {/* <div className="dialog-demo">
                    <div >
                        <Dialog style={{ width: '70vw' }} header="New Course" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                            <div className='form'>
                                <CourseForm />

                            </div>



                        </Dialog>
                    </div>
                </div> */}
                <Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                    <Test></Test>
                </Sidebar>
        </div>

    );
}
export default Students                 