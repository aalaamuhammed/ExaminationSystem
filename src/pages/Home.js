
import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';
import Instructors from './Instructors';
import Reports from './Reports';
import CoursesSection from '../components/CoursesSection/CoursesList';
import QuestionTable from '../components/QuestionsSection/QuestionTable';
import { Dialog } from 'primereact/dialog';
import '../styles/DialogDemo.css';
import { Button } from 'primereact/button';
import CourseForm from '../components/CourseForm';

const Home = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState();
    const [displayBasic, setDisplayBasic] = useState(false);
    const [position, setPosition] = useState('center');

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Instructors', icon: 'pi pi-fw pi-users' },
        { label: 'Reports', icon: 'pi pi-fw pi-file' },
    ];
    const onClick = (name, position) => {
        setDisplayBasic(true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        setDisplayBasic(false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Add" style={{ backgroundColor: 'var(--blue-500)' }} icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return (

        <div>
            <div >
                <div>
                    <h1 style={{ color: 'rgb(25, 98, 233)', marginLeft: 15 }}>Examinatiommn System</h1>

                </div>
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={e => setActiveIndex(e.index)} />
                {activeIndex === 2 ? (<Reports />) : activeIndex === 1 ? (<Instructors />) : (
                    <>
                        <CoursesSection onClick={onClick} />
                        <QuestionTable onClick={onClick} />
                    </>
                )}
                <div className="dialog-demo">
                    <div >
                        <Dialog style={{ width: '70vw' }} header="New Course" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                            <div className='form'>
                                <CourseForm />

                            </div>



                        </Dialog>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Home                 