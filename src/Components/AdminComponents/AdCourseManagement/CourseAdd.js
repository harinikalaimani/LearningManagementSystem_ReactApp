import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addCourseToJson } from '../../../Slice/Courseslice';

function Addcard(props) {
  const dispatch = useDispatch();

  const [coursename, setCoursename] = useState('');
  const [courseimage, setCourseimage] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');

  const [courseError, setCourseError] = useState('');
  const [imgError, setImgError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
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

  const validateDescription = () => {
    if (!description.trim()) {
      setDescriptionError('Description is required.');
    } else {
      setDescriptionError('');
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
    validateDescription();
    validateStartDate();
    validateEndDate();
    validateDuration();

    if (courseError || imgError || descriptionError || durationError || startDateError || endDateError) {
      return;
    }

    if (!coursename.trim() || !courseimage.trim() || !description.trim() || !duration.trim() || !startdate.trim() || !enddate.trim()) {
      // If any of the fields are empty, return without submitting
      return;
    }

    dispatch(addCourseToJson({ coursename, description, duration, startdate, enddate, courseimage }));

    // Clear form fields after submission
    setCoursename('');
    setCourseimage('');
    setDescription('');
    setDuration('');
    setStartDate('');
    setEndDate('');

    // Close the modal after successful submission
    props.onHide();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className=''>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
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
                  <Form.Control size='sm' type="text" value={courseimage} onChange={(e) => setCourseimage(e.target.value)} onBlur={validateImage} />
                  {imgError && <p className="text-danger">{imgError}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="description">
                  <Form.Label>Course Description<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="textarea" as="textarea" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} onBlur={validateDescription} />
                  {descriptionError && <p className="text-danger">{descriptionError}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="startdate">
                  <Form.Label>Start Date<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="date" value={startdate} onChange={(e) => setStartDate(e.target.value)} onBlur={validateStartDate} />
                  {startDateError && <p className="text-danger">{startDateError}</p>}
                </Form.Group>
                <Form.Group as={Col} controlId="enddate">
                  <Form.Label>End Date<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="date" value={enddate} onChange={(e) => setEndDate(e.target.value)} onBlur={validateEndDate} />
                  {endDateError && <p className="text-danger">{endDateError}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="duration">
                  <Form.Label>Course Duration<span className='ast'>*</span></Form.Label>
                  <Form.Control size='sm' type="text" value={duration} onChange={(e) => setDuration(e.target.value)} onBlur={validateDuration} />
                  {durationError && <p className="text-danger">{durationError}</p>}
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit">Submit</Button>
              <Button className='m-3' onClick={props.onHide}>Close</Button>
            </Form>
          </Container>
        </Modal.Body>
        </div>
    </Modal>
   );
}

export default Addcard;

