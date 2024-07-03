// import React, {useEffect } from 'react';
// import { Row ,Col, Container } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getCourseFromJson , removeCourseFromJson, setSelectedCourse} from '../../../src/Slice/Courseslice';


// function InCourseCard() {

//     const dispatch = useDispatch(); 
    
//     useEffect(() => {
//         dispatch(getCourseFromJson());
//     }, [dispatch]);


//     const { courseSet, error, selectedCourse } = useSelector((state) => state.courses);
    
//     return (
//     <Container>
//         <Row>
//     {courseSet && courseSet.map((course) => (
//          <Col xl={3} md={6} sm={12} className='mt-2'>
//           <div class="coursecard" key={course.id}>
//           <Link to="/instructor/incourse-index" className='text-decoration-none'>
//             <div className="card">
//                 <img src={course.courseimage} class="card-img-top cimg" alt="logo" />
//                     <div className="card-body">
//                         <h5 className="card-title">{course.coursename}</h5>
//                         <div>
//                         <p>Duration: {course.duration} weeks</p> 
//                         </div>
//                         <div className="d-flex date-flex mt-3">
//                         <div className="card-text d-flex date-flex">
//                             <p className="mright"><span style={{color: 'black'}}>Start Date:</span> <br></br>{course.startdate}</p>
//                         </div>
//                         <div className="card-text d-flex date-flex">
//                             <p className="mright"><span style={{color: 'black'}}>End Date:</span> <br></br>{course.enddate}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           </Link>
//         </div>
//         </Col>
//         ))}
//     </Row>
//     </Container>

//    );
// }

// export default InCourseCard;


import React, {useEffect } from 'react';
import { Row ,Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourseFromJson , removeCourseFromJson, setSelectedCourse} from '../../../src/Slice/Courseslice';


function InCourseCard() {

    const dispatch = useDispatch(); 
    
    useEffect(() => {
        dispatch(getCourseFromJson());
    }, [dispatch]);


    const { courseSet, error, selectedCourse } = useSelector((state) => state.courses);
    
    return (
    <Container>
        <Row>
    {courseSet && courseSet.map((course,index) => (
         <Col lg={3} md={6} sm={12} className='mt-2'>
          <div class="coursecard" key={course.id}>
          <Link to={`/instructor/incourse-index/${index+1}`} className='text-decoration-none'>
            <div className="card" >
                <img src={course.courseimage} class="card-img-top cimg" alt="logo" />
                    <div className="card-body">
                        <h5 className="card-title">{course.coursename}</h5>
                       
                        <div className="">
                            <p>Course Duration: {course.duration} weeks</p>
                                             </div>
                        <p>60% completed</p>
                        <div className="d-flex date-flex mt-3">
                        <div className="card-text d-flex date-flex">
                            <p className="mright"><span style={{color: 'black'}}>Start Date:</span> <br></br>{course.startdate}</p>
                        </div>
                        <div className="card-text d-flex date-flex">
                            <p className="mright"><span style={{color: 'black'}}>End Date:</span> <br></br>{course.enddate}</p>
                        </div>
                    </div>
                </div>
            </div>
          </Link>
        </div>
        </Col>
        ))}
    </Row>
    </Container>

   );
}

export default InCourseCard;
