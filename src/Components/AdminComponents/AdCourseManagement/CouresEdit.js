import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourseToJson } from '../../../../src/Slice/Courseslice';


function MyVerticallyCenteredModal(props) {

  const {selectedCourse} = useSelector((state) => state.courses);

  const [coursename, setCoursename] = useState('');
  const [courseimage, setcourseimage] = useState('');
  const [discription, setdiscription]= useState('');
  const [duration, setduration]= useState('');
  const [startdate, setstartdate]= useState('');
  const [enddate, setenddate]= useState('');
  const [id,setId]=useState(0);
  const dispatch = useDispatch()

  const [courseError, setCourseError] = useState('');
  const [imgError, setImgError] = useState('');
  const [discriptionError, setDiscriptionError] = useState('');
  const [durationError, setDurationError] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');

  const validateCourse = () => {
    const regex = /^[A-Za-z].*$/;
    if (!coursename.trim()) {
      setCourseError('Course Name is required.');
    } else if (!regex.test(coursename)) {
      setCourseError('Course Name should start with a letter.');
    } else {
      setCourseError('');
    }
  };
  
  const validateImage = () => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!courseimage.trim()) {
      setImgError('Image URL is required.');
    } else if (!urlRegex.test(courseimage)) {
      setImgError('Please enter a valid Image URL.');
    } else {
      setImgError('');
    }
  };

  const validateDiscription = () => {
    if (!discription.trim()) {
      setDiscriptionError('Description is required.');
    } else {
      setDiscriptionError('');
    }
  };

  const validateStartDate = () => {
    const currentDate = new Date();
    if (!startdate.trim()) {
      setStartDateError('Start Date is required.');
    } else if (new Date(startdate) < currentDate) {
      setStartDateError('Start Date must be the current date or later.');
    } else {
      setStartDateError('');
    }
  };

  const validateEndDate = () => {
    const currentDate = new Date();
    const threeDaysLater = new Date(currentDate);
    threeDaysLater.setDate(threeDaysLater.getDate() + 3); // Adding 3 days to the current date

    if (!enddate.trim()) {
      setEndDateError('End Date is required.');
    } else if (new Date(enddate) <= threeDaysLater) {
      setEndDateError('End Date must be at least 3 days after the current date.');
    } else {
      setEndDateError('');
    }
  };

  const validateDuration = () => {
    if (!duration.trim()) {
      setDurationError('Duration is required.');
    } else if (isNaN(duration)) {
      setDurationError('Duration should be a numeric value.');
    } else {
      setDurationError('');
    }
  };

  const validateSubmit = (e) => {
    e.preventDefault();

    validateCourse();
    validateImage();
    validateDiscription();
    validateStartDate();
    validateEndDate();
    validateDuration();

    if (courseError || imgError || discriptionError || durationError || startDateError || endDateError) {
      return;
    }

    if (!coursename.trim() || !courseimage.trim() || !discription.trim() || !duration.trim() || !startdate.trim() || !enddate.trim()) {
      // If any of the fields are empty, return without submitting
      return;
    }

  };

  useEffect(() => {
    if (Object.keys(selectedCourse).length!== 0) {
      setCoursename(selectedCourse.coursename);
      setcourseimage(selectedCourse.courseimage);
      setdiscription(selectedCourse.discription);
      setduration(selectedCourse.duration);
      setstartdate(selectedCourse.startdate);
      setenddate(selectedCourse.enddate); 
      setId(selectedCourse.id);
    }
  },[selectedCourse.id]);
  
    const updateCourse = () => {
        props.onHide()
        dispatch(updateCourseToJson({id, coursename,discription,duration,startdate,enddate,courseimage}))
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={validateSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="coursename">
                  <Form.Label>Course Name<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="text" value={coursename} onChange={(e) => setCoursename(e.target.value)} onBlur={validateCourse} />
                  {courseError && <p className="text-danger">{courseError}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="imageUrl">
                  <Form.Label>Course Image<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="text" value={courseimage} onChange={(e) => setcourseimage(e.target.value)} onBlur={validateImage} />
                  {imgError && <p className="text-danger">{imgError}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="description">
                  <Form.Label>Course Description<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="textarea" as="textarea"
                        rows={5} value={discription} onChange={(e) => setdiscription(e.target.value)} onBlur={validateDiscription} />
                  {discriptionError && <p className="text-danger">{discriptionError}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="startdate">
                  <Form.Label>Start Date<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="date" value={startdate} onChange={(e) => setstartdate(e.target.value)} onBlur={validateStartDate} />
                  {startDateError && <p className="text-danger">{startDateError}</p>}
                </Form.Group>
                <Form.Group as={Col} controlId="enddate">
                  <Form.Label>End Date<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="date" value={enddate} onChange={(e) => setenddate(e.target.value)} onBlur={validateEndDate} />
                  {endDateError && <p className="text-danger">{endDateError}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="duration">
                  <Form.Label>Course Duration<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="text" value={duration} onChange={(e) => setduration(e.target.value)} onBlur={validateDuration} />
                  {durationError && <p className="text-danger">{durationError}</p>}
                </Form.Group>
              </Row>
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className='text-end'>
        <Button variant="primary" type="submit" onClick={updateCourse}>
               update Course
              </Button>
              <Button className='m-3' onClick={props.onHide}>Close</Button>
      </div>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal

