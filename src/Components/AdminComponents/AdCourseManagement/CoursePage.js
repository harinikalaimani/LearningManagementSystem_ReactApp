import React, { useState , useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button ,Row ,Col, Container } from 'react-bootstrap';
import  Editcard from '../../../Components/AdminComponents/AdCourseManagement/CouresEdit';
import Addcard from '../../../Components/AdminComponents/AdCourseManagement/CourseAdd';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseFromJson , removeCourseFromJson, setSelectedCourse} from '../../../Slice/Courseslice';
import DeleteModal from '../../../Components/AdminComponents/AdCourseManagement/CourseDelete';

function CourseCard() {
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);
    const [courseToDelete, setCourseToDelete] = useState(null);
  
    const dispatch = useDispatch(); 

    const { courseSet } = useSelector((state) => state.courses);
    
    const Editcourse = (course) => {
        setModalShow2(true);
        dispatch(setSelectedCourse(course))
    }

    const Addcourse = () => {
        setModalShow3(true);
    }
    
    const deleteCourse = (course) => {
      setCourseToDelete(course);
      setdeleteModal(true);
    };
  
    const confirmDelete = () => {
      if (courseToDelete) {
        dispatch(removeCourseFromJson(courseToDelete));
        setCourseToDelete(null);
        setdeleteModal(false);
      }
    };
  
    const cancelDelete = () => {
      setCourseToDelete(null);
      setdeleteModal(false);
    };
  
    useEffect(() => {
        dispatch(getCourseFromJson());
    }, [dispatch]);
  
    return (
        <Row className='mrg-left'>
            <div className='ms-auto d-flex justify-content-between'>
                <div><h3>Course Management</h3></div>
                <div><Button variant="success" onClick={Addcourse}>Add Course</Button></div>
            </div>
            <Container className="ms-start">
                    
            </Container>
            <div>
            <Container>
        <Row>
        {courseSet && courseSet.map((course) => (
         <Col lg={3} md={6} sm={12} className='mt-2'>
          <div class="coursecard" key={course.id}>
            <div className="card">
                <img src={course.courseimage} class="card-img-top cimg" alt="logo" />
                    <div className="card-body">
                        <h5 className="card-title">{course.coursename}</h5>
                        <p className=""><span style={{color: 'black'}}>Course Duration:</span>&nbsp;{course.duration}&nbsp;weeks</p>
                        <div className="d-flex date-flex mt-3">
                        <div className="card-text d-flex date-flex">
                            {/* <BiCalendar style={{fontSize: '25px'}} /> */}
                            <p className=""><span style={{color: 'black'}}>Start Date:</span> <br></br>{course.startdate}</p>
                        </div>
                        <div className="card-text d-flex date-flex">
                            {/* <BiCalendar style={{fontSize: '25px'}}/> */}
                            <p className=""><span style={{color: 'black'}}>End Date:</span> <br></br>{course.enddate}</p>
                        </div>
                    </div>
                </div>
                <div class="icon-container">
                <Button variant="outline-success" className='mx-1' onClick={()=>Editcourse(course)}><FaEdit style={{fontSize:"20px"}} /></Button>
                <Button variant="outline-success" className='mx-1' onClick={()=>deleteCourse(course)}><MdDelete style={{fontSize:"20px"}} /></Button>
                </div>
            </div>
         </div>
       </Col>
      ))}
    </Row>
</Container>
<Editcard show={modalShow2} onHide={() => setModalShow2(false)} />
    <Addcard show={modalShow3} onHide={() => setModalShow3(false)} /> 
    <DeleteModal
        show={deleteModal}
        onHide={cancelDelete}
        onConfirm={confirmDelete}
        itemName={courseToDelete ? courseToDelete.name : ''} 
      />
    </div>
    </Row>
    );
}

export default CourseCard;